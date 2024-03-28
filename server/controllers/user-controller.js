const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  //check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [userId] = await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      id: userId,
      name,
      email,
      Status: "Success",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ message: "An error occured while registering the user." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users").where({ email }).first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const unhashedPassword = await bcrypt.compare(
      password.toString(),
      user.password
    );

    if (!unhashedPassword) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ Status: "Login successful" });
  } catch (error) {
    console.error("Error logging into account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
