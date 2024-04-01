import React, { useState } from "react";
import axios from "axios";
import "./GoalForm.scss";
import { baseUrl } from "../../global";
import { useNavigate } from "react-router-dom";

function GoalForm() {
  const [goalForms, setGoalForms] = useState([
    { quarter: "", year: "", majorGoal: "", minorGoals: ["", "", "", ""] },
    { quarter: "", year: "", majorGoal: "", minorGoals: ["", "", "", ""] },
    { quarter: "", year: "", majorGoal: "", minorGoals: ["", "", "", ""] },
    { quarter: "", year: "", majorGoal: "", minorGoals: ["", "", "", ""] },
  ]);

  const [submittedGoals, setSubmittedGoals] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const navigate = useNavigate();

  const handleQuarterChange = (index, value) => {
    const newGoalForms = [...goalForms];
    newGoalForms[index].quarter = value;
    setGoalForms(newGoalForms);
  };

  const handleYearChange = (index, value) => {
    const newGoalForms = [...goalForms];
    newGoalForms[index].year = value;
    setGoalForms(newGoalForms);
  };

  const handleMajorGoalChange = (index, value) => {
    const newGoalForms = [...goalForms];
    newGoalForms[index].majorGoal = value;
    setGoalForms(newGoalForms);
  };

  const handleMinorGoalChange = (goalIndex, minorIndex, value) => {
    const newGoalForms = [...goalForms];
    newGoalForms[goalIndex].minorGoals[minorIndex] = value;
    setGoalForms(newGoalForms);
  };

  const addMinorGoal = (index) => {
    const newGoalForms = [...goalForms];
    if (newGoalForms[index].minorGoals.length < 4) {
      newGoalForms[index].minorGoals.push("");
      setGoalForms(newGoalForms);
    }
  };

  // const fetchAllGoals = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}goals`, {
  //       withCredentials: true,
  //     });
  //     setSubmittedGoals(response.data.goals);
  //     console.log(response.data.goals)
  //   } catch (error) {
  //     console.error("Error fetching goals: ", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllGoals();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormVisible(false);

    // Retrieve the session token from local storage
    const token = localStorage.getItem("token");

    // Check if the token exists

    if (!token) {
      console.error("No session token found");
      navigate("/login");

      setIsFormVisible(true);
      return; // Exit the function to prevent making the request without a token
    }
    const promises = goalForms.map((form) => {
      // To ensure quarterNumber is properly formatted as an integer
      const quarterNumber = parseInt(form.quarter.replace("Q", ""), 10);
      // To ensure year is sent as an integer
      const year = parseInt(form.year, 10);

      // Filter out empty minor goals and ensure proper data formatting
      const postData = {
        quarterNumber,
        year,
        majorGoal: form.majorGoal,
        minorGoals: form.minorGoals.filter((minorGoal) => minorGoal !== ""),
      };

      return axios.post(`${baseUrl}goals`, postData, {
        headers: {
          // Include the token in the Authorization header
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
    });

    try {
      // Wait for all Axios requests to complete
      const results = await Promise.all(promises);

      const updatedGoals = results.map((result) => ({
        ...result.data,
        quarter: results.data.quarterNumber,
        year: results.data.year,
        majorGoal: results.data.majorGoal.description,
        minorGoals: Array.isArray(results.data.minorGoals)
          ? results.data.minorGoals.map((minor) => minor.description)
          : [],
      }));

      console.log("Updated Goals: ", updatedGoals);
      setSubmittedGoals(updatedGoals);

      setIsFormVisible(false);
    } catch (error) {
      console.error("Error submitting goals: ", error);
      setIsFormVisible(true); // Optionally show the form again
    }
  };

  const handleEditClick = () => {
    setIsFormVisible(true);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          {goalForms.map((goalForm, index) => (
            <div key={index}>
              <div>
                <label htmlFor={`quarter-${index}`}>Quarter:</label>
                <select
                  id={`quarter-${index}`}
                  value={goalForm.quarter}
                  onChange={(e) => handleQuarterChange(index, e.target.value)}
                >
                  <option value="">Select Quarter</option>
                  <option value="Q1">Q1</option>
                  <option value="Q2">Q2</option>
                  <option value="Q3">Q3</option>
                  <option value="Q4">Q4</option>
                </select>
              </div>
              <div>
                <label htmlFor={`year-${index}`}>Year:</label>
                <select
                  id={`year-${index}`}
                  value={goalForm.year}
                  onChange={(e) => handleYearChange(index, e.target.value)}
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`majorGoal-${index}`}>Major Goal:</label>
                <input
                  type="text"
                  id={`majorGoal-${index}`}
                  value={goalForm.majorGoal}
                  onChange={(e) => handleMajorGoalChange(index, e.target.value)}
                />
              </div>
              <div>
                <label>Minor Goals:</label>
                {goalForm.minorGoals.map((minorGoal, minorIndex) => (
                  <input
                    key={minorIndex}
                    type="text"
                    value={minorGoal}
                    onChange={(e) =>
                      handleMinorGoalChange(index, minorIndex, e.target.value)
                    }
                  />
                ))}
                {goalForm.minorGoals.length < 4 && (
                  <button type="button" onClick={() => addMinorGoal(index)}>
                    Add Minor Goal
                  </button>
                )}
              </div>
            </div>
          ))}
          <button type="submit">Save All Goals</button>
        </form>
      )}
      <div>
        <h2>Submitted Goals</h2>
        {submittedGoals.map((goal, index) => (
          <div key={index}>
            <p>
              Quarter: {goal.quarter}, Year: {goal.year}
            </p>
            <p>Major Goal: {goal.majorGoal}</p>
            <p>Minor Goals:</p>
            <ul>
              {goal.minorGoals.map((minorGoal, minorIndex) => {
                return <li key={minorIndex}>{minorGoal}</li>;
              })}
            </ul>
          </div>
        ))}
        {!isFormVisible && (
          <button onClick={handleEditClick}>Edit Goals</button>
        )}
      </div>
    </>
  );
}

export default GoalForm;
