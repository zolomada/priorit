import "./PrioritHeader.scss";
import cloud from "../../assets/images/pinkcloud.jpg";
import logo from "../../assets/images/prioritlogo.png";

function PrioritHeader() {
  return (
    <div className="header-container">
      <img src={cloud} alt="" className="header-container__cloud"></img>
      <img src={logo} alt="" className="header-container__logo"></img>
    </div>
  );
}

export default PrioritHeader;
