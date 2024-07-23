import React from "react";
import "./HomeProjects.css";

const HomeProjects = () => {
  return (
    <div className="home-projects">
      <h2 className="home-projects-title">Proyectos</h2>
      <div
        className="home-project-item"
        style={{ backgroundColor: "cadetblue" }}
      >
        Proyecto 1
      </div>
      <div className="home-project-item" style={{ backgroundColor: "coral" }}>
        Proyecto 2
      </div>
      <div
        className="home-project-item"
        style={{ backgroundColor: "cornsilk" }}
      >
        Proyecto 3
      </div>
      <div
        className="home-project-item"
        style={{ backgroundColor: "lightgreen" }}
      >
        Proyecto 4
      </div>
      <div
        className="home-project-item"
        style={{ backgroundColor: "lightblue" }}
      >
        Proyecto 5
      </div>
      <div
        className="home-project-item"
        style={{ backgroundColor: "lightcoral" }}
      >
        Proyecto 6
      </div>
    </div>
  );
};

export default HomeProjects;
