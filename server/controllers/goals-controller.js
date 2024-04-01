const knex = require("knex")(require("../knexfile"));
const { verifyToken } = require("../utility");

const addGoals = async (req, res) => {
  let { quarterNumber, year, majorGoal, minorGoals } = req.body;

  // Log incoming data for debugging
  console.log("Received quarterNumber and year:", { quarterNumber, year });

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
    const [majorGoalResponse] = await knex("goals").insert(
      {
        user_id: userID,
        quarter_id: quarterID,
        goal_type: "Major",
        description: majorGoal,
      },
      ["id", "description", "goal_type"]
    );

    //insert minor goals. Need to map through since there are 4 goals
    const minorGoalsResponse = await Promise.all(
      minorGoals.map(async (goal) => {
        await knex("goals").insert(
          {
            user_id: userID,
            quarter_id: quarterID,
            goal_type: "Minor",
            description: goal,
          },
          ["id", "description", "goal_type"]
        );
      })
    );

    res.status(201).json({
      message: "Successfully added goals",
      majorGoal: majorGoalResponse,
      minorGoals: minorGoalsResponse.flat(),
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
    const token = req.cookies.token;
    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userID = verifiedToken.userId;

    //get quarter ID from request parameters
    const quarterID = req.query.quarterID;

    // Get goals for the logged-in user
    const userGoals = await knex("goals")
      .select("*")
      .where("user_id", userID)
      .andWhere("quarter_id", quarterID);

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
