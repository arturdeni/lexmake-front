import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

import "./HomeHero.css";

import lexMakeBigLogo from "../../../assets/icons/LexMakeBigLogo.svg";

const HomeSkills = () => {
  let animateUp = useRef();

  useLayoutEffect(() => {
    gsap.from(
      animateUp.current,
      {
        yPercent: -100,
        duration: 1.2,
        delay: 0.6,
        opacity: 0,
        ease: "power2.out"
      }
    );
  });

  return (
    <section className="home-hero">
      <div className="home-hero__logo">
        <img src={lexMakeBigLogo} alt="LexMake Logo" />
      </div>
      <div className="home-hero__description">
        <p ref={animateUp}>
          En Lexmake, tejemos diseño que habla, emociona y transforma. Cada
          píxel, una historia; tu marca, el protagonista. Descubre cómo lo
          visual redefine lo posible
        </p>
      </div>
    </section>
  );
};

export default HomeSkills;
