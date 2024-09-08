import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../../services/projects.json";
import HaveAnIdea from "../../shared/HaveAnIdea/HaveAnIdea";

import "./ProjectDetail.css";

const ProjectDetail = () => {
  const projects = projectsData.projects;
  const { urlTitle } = useParams();
  const project = projects.find((proj) => proj["url-title"] === urlTitle);

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1>{project.title}</h1>
        <span className="project-detail__header-year">{project.year}</span>
      </div>
      <img
        className="project-detail__front-image"
        src={project.frontImage}
        alt={project.title}
      />
      <div className="project-detail__description">
        <h3>Descripción</h3>
        <p>{project.description}</p>
        <span style={{ fontWeight: "bold" }}>¿Qué se hizo?</span>
        <ul>
          {project.details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="project-detail__images">
        {project.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            className="project-detail__image"
          />
        ))}
      </div>
      <HaveAnIdea />
    </div>
  );
};

export default ProjectDetail;
