const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const { postNewUserValidator } = require("../validators/user-validator");

router.route("/");

router.route("/signup").post(postNewUserValidator, userController.register);

router.route("/login").post(userController.login);

module.exports = router;
