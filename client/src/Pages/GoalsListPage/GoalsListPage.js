import "./GoalsListPage.scss";
import { useState } from "react";
import GoalForm from "../../components/GoalForm/GoalForm";
import NavHeader from "../../components/NavHeader/NavHeader";

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

  return (
    <div>
      <NavHeader />
      <h1>Your Goals For The Year</h1>
      {isFormVisible && (
        <GoalForm
          onSubmit={handleSubmit}
          initialValues={editIndex !== null ? goals[editIndex] : {}}
        />
      )}
    </div>
  );
}

export default GoalsListPage;
