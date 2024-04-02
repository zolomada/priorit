import "./Carousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselCard() {
  return (
    <Carousel className="landing__slide">
      <div className="landing__slide--card">
        <h2>Create, Track, and Achieve Your Goals with Priorit</h2>
        <p>
          Welcome to Priorit, the ultimate goal-setting and progress-tracking
          tool designed to empower you to achieve your aspirations, big and
          small. Whether you're looking to advance in your career, enhance your
          personal life, or improve your health and fitness, Priorit is here to
          guide you every step of the way.
        </p>
      </div>
      <div className="landing__slide--card">
        <ul>
          <li>
            <strong>Personalized to Your Aspirations: </strong>Tailor your goals
            to suit your individual needs—set a major goal for impactful
            milestones and complement it with up to four minor goals to keep you
            on track.
          </li>
          <li>
            <strong>Quarterly Planning:</strong> Break down your year into
            manageable quarters, making your ambitions more attainable and
            organized
          </li>

          <li>
            <strong>Reflect and Refocus:</strong> End each quarter by reflecting
            on your achievements and areas for improvement, setting a stronger
            foundation for the next.
          </li>
          <li>
            <strong>Support and Inspiration:</strong> You're not alone on your
            journey. Join our vibrant community
          </li>
        </ul>
      </div>
    </Carousel>
  );
}

export default CarouselCard;
