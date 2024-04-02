import "./HomePage.scss";
import CurrentGoalCard from "../../components/CurrentGoalCard/CurrentGoalCard";
import NavHeader from "../../components/NavHeader/NavHeader";

function HomePage() {
  return (
    <>
      <NavHeader />
      <CurrentGoalCard />
    </>
  );
}

export default HomePage;
