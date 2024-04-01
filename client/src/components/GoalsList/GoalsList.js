import "./GoalsList.scss";

function GoalsList({ goals, onEditGoal }) {
  if (!Array.isArray(goals)) {
    // Optionally handle the case where goals is not an array
    return null;
  }

  return (
    <div>
      <h2>Goals</h2>
      {goals.map((goal, index) => (
        <div key={index}>
          <h3>
            Quarter {goal.quarter}, {goal.year}
          </h3>
          <p>Major Goal: {goal.majorGoal}</p>
          <p>Minor Goals:</p>
          <ul>
            {Array.isArray(goal.minorGoals) &&
              goal.minorGoals.map((minorGoal, i) => (
                <li key={i}>{minorGoal}</li>
              ))}
          </ul>
          <button onClick={() => onEditGoal(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default GoalsList;
