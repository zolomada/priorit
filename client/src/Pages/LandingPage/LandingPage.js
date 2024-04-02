import "./LandingPage.scss";
import CarouselCard from "../../components/Carousel/Carousel";
import PrioritHeader from "../../components/PrioritHeader/PrioritHeader";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing_container">
      <PrioritHeader />
      <div className="landing__text-card">
        <CarouselCard className="carouselcard" />
        <div className="landing__button-container">
          <Link to="/signup">
            <button className="landing__signup btn ">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="landing__login btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
