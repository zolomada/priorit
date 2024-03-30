import "./LandingPage.scss";
import CarouselCard from "../../components/Carousel/Carousel";
import PrioritHeader from "../../components/PrioritHeader/PrioritHeader";

function LandingPage() {
  return (
    <div>
      <div>
        <PrioritHeader />
      </div>
      <div className="landing__text-card">
        <CarouselCard className="carouselcard" />
        <div className="landing__button-container">
          <button className="landing__signup btn">Sign Up</button>
          <button className="landing__login btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
