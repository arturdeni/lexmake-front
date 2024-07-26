import React from "react";
import "./Home.css";

import lexMakeBigLogo from "../../assets/icons/LexMakeBigLogo.svg";

import HomeProjects from "./HomeProjects/HomeProjects";
import HomeServices from "./HomeServices/HomeServices";
import HomeSkills from "./HomeSkills/HomeSkills";

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <div className="home__intro-logo">
          <img src={lexMakeBigLogo} alt="LexMake Logo" />
        </div>
        <div className="home__intro-text">
          <p>
            En Lexmake, tejemos diseño que habla, emociona y transforma. Cada
            píxel, una historia; tu marca, el protagonista. Descubre cómo lo
            visual redefine lo posible
          </p>
        </div>
      </div>

      <HomeProjects />
      <HomeServices />
      <HomeSkills />
    </div>
  );
};

export default Home;
