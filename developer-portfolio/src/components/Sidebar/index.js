import "./index.scss";
import { Link } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
// import LogoSubtitle from "../../assets/images/logos/logo-sub.png";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img src={LogoSubtitle} alt="Mathew Fonteyne" /> */}
    </Link>
  </div>
);

export default Sidebar;
