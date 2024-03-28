const express = require("express");
const router = express.Router();
const goalsController = require("../controllers/goals-controller");

router
  .route("/")
  .post(goalsController.addGoals)
  .get(goalsController.getAllGoals);

module.exports = router;