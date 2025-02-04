import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../../services/projects.json";
import HaveAnIdea from "../../shared/HaveAnIdea/HaveAnIdea";
import ImageSkeleton from "../../shared/ImageSkeleton/ImageSkeleton";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const projects = projectsData.projects;
  const { urlTitle } = useParams();
  const project = projects.find((proj) => proj["url-title"] === urlTitle);

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <>
      <div className="project-detail">
        <h1 className="project-detail__title">{project.title}</h1>

        <ImageSkeleton
          src={project.frontImageProjectDetails}
          alt={project.title}
          className="project-detail__front-image"
        />

        <div className="project-detail__content">
          <div className="project-detail__section-header">
            <div className="project-detail__header-content">
              <h2>Descripción</h2>
              <h2 className="project-detail__year">{project.year}</h2>
            </div>
            <div className="project-detail__line"></div>
          </div>

          <div className="project-detail__two-columns">
            <div className="project-detail__main">
              <p>{project.description}</p>

              <div className="project-detail__what-we-did">
                <h3>¿Qué se hizo?</h3>
                <ul>
                  {project.details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-detail__sidebar">
              <div className="project-detail__categories">
                <h3>Tipo de proyecto</h3>
                <ul>
                  {project.categories?.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail__images">
          {project.images?.map((image, index) => (
            <ImageSkeleton
              key={index}
              src={image}
              alt={project.title}
              className="project-detail__image"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        <HaveAnIdea />
      </div>

      {selectedImage && (
        <div
          className="project-detail__modal"
          onClick={() => setSelectedImage(null)}
        >
          <ImageSkeleton
            src={selectedImage}
            alt={project.title}
            onClick={() => setSelectedImage(null)}
            objectFit="contain"
            className="project-detail__modal-image"
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
