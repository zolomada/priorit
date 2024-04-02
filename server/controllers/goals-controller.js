const knex = require("knex")(require("../knexfile"));
const { verifyToken } = require("../utility");

const addGoals = async (req, res) => {
  let { quarterNumber, year, majorGoal, minorGoals } = req.body;

  // Parse quarterNumber and year as integers
  quarterNumber = parseInt(quarterNumber, 10);
  year = parseInt(year, 10);

  // Backend validation for quarterNumber and year
  if (!quarterNumber || isNaN(quarterNumber) || !year || isNaN(year)) {
    return res
      .status(400)
      .json({ error: "Invalid quarter number or year provided." });
  }
  try {
    //Get userID from token
    const token = req.headers.authorization.split(" ")[1];

    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userID = verifiedToken.userId;

    //check for exisiting quarter id
    let quarterID = await knex("quarters")
      .where({
        quarter_number: quarterNumber,
        year: year,
      })
      .select("id")
      .first();

    //if quarter id does not exist, add the info to the db and get the id created
    if (!quarterID) {
      quarterID = (
        await knex("quarters").insert({
          quarter_number: quarterNumber,
          year: year,
        })
      )[0];
    } else {
      quarterID = quarterID.id;
    }

    //insert major goal
    const majorGoalId = await knex("goals").insert({
      user_id: userID,
      quarter_id: quarterID,
      goal_type: "Major",
      description: majorGoal,
    });

    const majorGoalResponse = await knex("goals")
      .where({ id: majorGoalId[0] })
      .first();

    //insert minor goals. Need to map through since there are 4 goals
    const minorGoalIds = await Promise.all(
      minorGoals.map((goalDescription) => {
        return knex("goals").insert({
          user_id: userID,
          quarter_id: quarterID,
          goal_type: "Minor",
          description: goalDescription,
        });
      })
    );

    const minorGoalsQuery = minorGoalIds.map((idArray) => {
      return knex("goals").where({ id: idArray[0] }).first();
    });

    const minorGoalsResponse = await Promise.all(minorGoalsQuery);

    res.status(201).json({
      message: "Successfully added goals",
      quarterNumber,
      year,
      majorGoal: majorGoalResponse,
      minorGoals: minorGoalsResponse,
    });
  } catch (error) {
    console.error("Error creating goals: ", error);
    res.status(500).json({
      error: "Failed to create goals",
    });
  }
};

const getAllGoals = async (req, res) => {
  try {
    //Get userID from token
    const token = req.cookies.token;
    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userID = verifiedToken.userId;

    // Get goals for the logged-in user
    const userGoals = await knex("goals").select("*").where("user_id", userID);

    res.status(200).json({ goals: userGoals });
  } catch (error) {
    console.error("Error fetching goals: ", error);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
};

const getGoalByQuarter = async (req, res) => {
  try {
    //Get userID from token
    const token = req.headers.authorization.split(" ")[1];

    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userID = verifiedToken.userId;
    console.log(userID);

    const { quarter, year } = req.query;

    if (!quarter || !year) {
      return res.status(400).json({ error: "Quarter and year are required" });
    }

    //finding the quarter_id based on the quarter and year param

    const quarterNumber = parseInt(quarter.replace("Q", ""), 10);
    const quarterData = await knex("quarters")
      .where({
        quarter_number: quarterNumber,
        year: parseInt(year, 10),
      })
      .first();

    if (!quarterData) {
      return res.status(404).json({ error: "Quarter not found" });
    }

    // Get goals for the logged-in user
    const userGoals = await knex("goals").select("*").where({
      user_id: userID,
      quarter_id: quarterData.id,
    });

    res.status(200).json({ goals: userGoals });
  } catch (error) {
    console.error("Error fetching goals: ", error);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
};

const editGoal = async (req, res) => {};

module.exports = {
  addGoals,
  getAllGoals,
  getGoalByQuarter,
};
