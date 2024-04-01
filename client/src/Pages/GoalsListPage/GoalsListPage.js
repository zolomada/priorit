import { useState } from "react";
import GoalForm from "../../components/GoalForm/GoalForm";
import GoalsList from "../../components/GoalsList/GoalsList";

function GoalsListPage() {
  const [goals, setGoals] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  // New state to control the visibility of GoalForm
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (formData) => {
    if (editIndex !== null) {
      const newGoals = [...goals];
      newGoals[editIndex] = formData;
      setGoals(newGoals);
      setEditIndex(null);
    } else {
      setGoals([...goals, formData]);
    }
    setIsFormVisible(false); // Hide the form after submission
  };

  const handleEditGoal = (index) => {
    setEditIndex(index);
    setIsFormVisible(true); // Show the form when editing
  };

  return (
    <div>
      <h1>Goals Page</h1>
      {isFormVisible && (
        <GoalForm
          onSubmit={handleSubmit}
          initialValues={editIndex !== null ? goals[editIndex] : {}}
        />
      )}
      <GoalsList goals={goals} onEditGoal={handleEditGoal} />
    </div>
  );
}

export default GoalsListPage;
