import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HomeProjects.css";

const HomeProjects = () => {
  const projects = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(projects.current, {
      x: -100,
      scrollTrigger: {
        trigger: projects.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <section className="home-projects">
      <div className="home-projects__container">
        <div className="home-projects__item">
          <p>Project 1</p>
        </div>
        <div className="home-projects__item">
          <p>Project 2</p>
        </div>
        <div className="home-projects__item">
          <p>Project 3</p>
        </div>
        <div className="home-projects__item">
          <p>Project 4</p>
        </div>
        <div className="home-projects__item">
          <p>Project 5</p>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
