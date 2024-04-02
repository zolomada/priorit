import "./CurrentGoalCard.scss";
import axios from "axios";
import { baseUrl } from "../../global";
import { useState, useEffect } from "react";

function CurrentGoalCard() {
  const [currentGoals, setCurrentGoals] = useState({
    majorGoal: "",
    minorGoals: [],
  });

  useEffect(() => {
    // Determine the current quarter and year
    const getCurrentQuarter = () => {
      const date = new Date();
      const month = date.getMonth() + 1; // getMonth() is zero-indexed
      const year = date.getFullYear();

      let quarter = "Q1";
      if (month >= 4 && month <= 6) {
        quarter = "Q2";
      } else if (month >= 7 && month <= 9) {
        quarter = "Q3";
      } else if (month >= 10) {
        quarter = "Q4";
      }
      return { quarter, year };
    };

    // Fetch goals for the current quarter and year
    const fetchGoals = async (quarter, year) => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${baseUrl}goals/home`, {
          params: { quarter, year },
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (response.data && response.data.goals) {
          const majorGoal = response.data.goals.find(
            (item) => item.goal_type === "Major"
          );
          const minorGoals = response.data.goals.find(
            (item) => item.goal_type === "Minor"
          );

          setCurrentGoals({
            majorGoal: majorGoal ? majorGoal.description : "",
            minorGoals: minorGoals.map((g) => g.description),
          });
        }
      } catch (error) {
        console.error("Error fetching current goals:", error);
      }
    };

    const { quarter, year } = getCurrentQuarter();
    fetchGoals(quarter, year);
  }, []);

  return (
    <div>
      <h2>Current Quarter Goals</h2>
      <p>
        <strong>Major Goal:</strong> {currentGoals.majorGoal}
      </p>
      <div>
        <strong>Minor Goals:</strong>
        <ul>
          {currentGoals.minorGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CurrentGoalCard;
