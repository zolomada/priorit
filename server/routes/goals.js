const express = require("express");
const router = express.Router();
const goalsController = require("../controllers/goals-controller");

router.route("/goals").post(goalsController.addGoals);

module.exports = router;
