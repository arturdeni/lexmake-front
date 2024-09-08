import React from "react";
import { Link } from "react-router-dom";
import HaveAnIdea from "../shared/HaveAnIdea/HaveAnIdea";
import projectsData from "../../services/projects.json";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Proyectos</h1>
      <ul>
        {projectsData.projects.map((project) => (
          <li key={project.id} className="projects-item">
            <Link to={`/projects/${project["url-title"]}`}>
              <img
                src={project.frontImage}
                alt={project.title}
                className="projects-item-image"
              />
              <div className="projects-item-description">
                <h3>{project.title}</h3>
                <p>{project.categories}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <HaveAnIdea />
    </div>
  );
};

export default Projects;
