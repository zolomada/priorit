const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
  //check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const name = req.body.name;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const [userId] = await knex("user").insert({
      name,
      email,
      password: hashedPassword,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
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

module.exports = {
  register,
};
