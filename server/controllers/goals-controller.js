const knex = require("knex")(require("../knexfile"));
const { verifyToken } = require("../utility");

const addGoals = async (req, res) => {
  const { quarterNumber, year, majorGoal, minorGoals } = req.body;

  try {
    //Get userID from JWT token
    const token = req.cookies.token;
    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userID = verifiedToken.userId;

    //check for exisiting quarter id
    const quarterID = await knex("quarters")
      .where({
        quarter_number: quarterNumber,
        year: year,
      })
      .select("quarter_id")
      .first();

    //if quarter id does not exist, add the info to the db and get the id created
    if (!quarterID) {
      [quarterID] = await knex("quarters").insert({
        quarter_number: quarterNumber,
        year: year,
      });
    } else {
      quarterID = quarterID.quarter_id;
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

module.exports = { addGoals };
