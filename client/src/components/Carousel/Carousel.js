import "./Carousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselCard() {
  return (
    <Carousel className="landing__slide">
      <div className="landing__slide--card">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="landing__slide--card">
        <ul>
          <li>Cras vel tellus ornare, finibus leo eu, aliquet arcu</li>
          <li>
            Nunc consectetur dui at nisi tristique, eget sollicitudin est
            interdum.
          </li>
          <li>Ut vitae dui quis magna scelerisque venenatis</li>
          <li>Ut vitae dui quis magna scelerisque venenatis</li>
        </ul>
      </div>
    </Carousel>
  );
}

export default CarouselCard;
