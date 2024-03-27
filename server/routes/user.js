const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const { postNewUserValidator } = require("../validators/user-validator");

router.route("/");

router.route("/sign-up").post(postNewUserValidator, userController.register);

module.exports = router;
