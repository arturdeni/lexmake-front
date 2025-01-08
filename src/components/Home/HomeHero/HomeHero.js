import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./HomeHero.css";

import lexMakeText from "../../../assets/icons/LexMakeText.svg";
import rocketIcon from "../../../assets/icons/RocketIcon.svg";

const HomeHero = () => {
  const descriptionRef = useRef();
  const rocketRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.from(descriptionRef.current, {
      yPercent: -100,
      duration: 1.2,
      delay: 0.6,
      opacity: 0,
      ease: "power2.out",
    });

    tl.from(rocketRef.current, {
      opacity: 0,
      scale: 0,
      y: 100,
      duration: 1.2,
      delay: 1,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <section className="home-hero">
      <div className="home-hero__logo">
        <img src={lexMakeText} alt="LexMake" className="home-hero__text" />
        <img
          ref={rocketRef}
          src={rocketIcon}
          alt="Rocket Icon"
          className="home-hero__rocket"
        />
      </div>
      <div className="home-hero__description">
        <p ref={descriptionRef}>
          En Lexmake, tejemos diseño que habla, emociona y transforma. Cada
          píxel, una historia; tu marca, el protagonista. Descubre cómo lo
          visual redefine lo posible
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
