// import LogoS from "../../assets/images/letter_m.png";
import LogoS from "../../assets/images/purple_m.png";
import { Link } from "react-router-dom";
// this logo is placeholder for what my actual logo will be.
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          {/* Put an image here that matches my brand and introduces myself i.e logo */}
          <img src={LogoS} alt="developer" />
          athew
          <br />
          Software Developer
        </h1>
        <h2>Full-Stack Developer / Game Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
