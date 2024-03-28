const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.JWT_SECRET;
const generateToken = (userId, email) => {
  return jwt.sign({ userId, email }, secret_key, { expiresIn: "1d" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret_key);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
