const { body } = require("express-validator");

exports.postNewUserValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().notEmpty().isEmail().withMessage("Enter a valid email"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 chars"),
];
