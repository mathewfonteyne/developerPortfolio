import LogoS from "../../assets/images/logo-s.png";
// this logo is placeholder for what my actual logo will be.

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
      </div>
    </div>
  );
};

export default Home;
