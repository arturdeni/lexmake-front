import React from "react";
import "./HomeHero.css";

import lexMakeBigLogo from "../../../assets/icons/LexMakeBigLogo.svg";

const HomeSkills = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__logo">
        <img src={lexMakeBigLogo} alt="LexMake Logo" />
      </div>
      <div className="home-hero__description">
        <p>
          En Lexmake, tejemos diseño que habla, emociona y transforma. Cada
          píxel, una historia; tu marca, el protagonista. Descubre cómo lo
          visual redefine lo posible
        </p>
      </div>
    </section>
  );
};

export default HomeSkills;
