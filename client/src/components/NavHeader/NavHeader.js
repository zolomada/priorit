import "./NavHeader.scss";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icons/list.svg";
import user from "../../assets/icons/user.svg";
import logo from "../../assets/images/prioritlogo.png";
import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <div className="navheader">
      <div className="navheader__logo-container">
        <img src={logo} alt="priorit-logo" className="navheader__logo"></img>
      </div>
      <div className="navheader__nav-container">
        <Link to={"/goals/home"}>
          <img src={home} alt="Home button" className="navheader__home"></img>
        </Link>
        <Link to={"/goals"}>
          <img src={list} alt="goals button" className="navheader__list"></img>
        </Link>
        <img src={user} alt="Profile button" className="navheader__user"></img>
      </div>
    </div>
  );
}

export default NavHeader;
