const knex = require("knex")(require("../knexfile"));
const { verifyToken } = require("../utility");

const addGoals = async (req, res) => {
  const { quarterNumber, year, majorGoal, minorGoals } = req.body;

  try {
    //Get userID from token
    const token = req.cookies.token;
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
    await knex("goals").insert({
      user_id: userID,
      quarter_id: quarterID,
      goal_type: "Major",
      description: majorGoal,
    });

    //insert minor goals. Need to map through since there are 4 goals
    await Promise.all(
      minorGoals.map(async (goal) => {
        await knex("goals").insert({
          user_id: userID,
          quarter_id: quarterID,
          goal_type: "Minor",
          description: goal,
        });
      })
    );

    res.status(201).json({ message: "Successfully added goals" });
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

module.exports = {
  addGoals,
  getAllGoals,
};
