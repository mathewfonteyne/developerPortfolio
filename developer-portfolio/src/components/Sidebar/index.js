import "./index.scss";
import { Link, NavLink } from "react-router-dom";
// Design an image to be used as my logo for both my home button/name and subtitle/name
import LogoS from "../../assets/images/logo-s.png";
// import LogoSubtitle from "../../assets/images/logos/logo-sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img src={LogoSubtitle} alt="Mathew Fonteyne" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
