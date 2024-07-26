import React from "react";
import "./HomeProjects.css";

const HomeProjects = () => {
  return (
    <section className="home-projects">
      <h2 className="home-projects__title">Proyectos</h2>
      <div className="home-projects__sectionInner">
        <div data-scroll-in-section>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "cadetblue" }}
          >
            Proyecto 1
          </div>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "coral" }}
          >
            Proyecto 2
          </div>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "cornsilk" }}
          >
            Proyecto 3
          </div>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "lightgreen" }}
          >
            Proyecto 4
          </div>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "lightblue" }}
          >
            Proyecto 5
          </div>
          <div
            className="home-projects__item"
            style={{ backgroundColor: "lightcoral" }}
          >
            Proyecto 6
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
