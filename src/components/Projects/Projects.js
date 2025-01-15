import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import TruncatedCategories from "./TruncatedCategories";
import HaveAnIdea from "../shared/HaveAnIdea/HaveAnIdea";
import projectsData from "../../services/projects.json";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);

  useGSAP(() => {
    if (projectsRef.current.length > 0) {
      projectsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out", // Efecto suave en la animación
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse", // Reproduce la animación cuando el item entra en el viewport
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="projects">
      <h1 className="slide-in-blurred-top">Proyectos</h1>
      <ul>
        {projectsData.projects.map((project, index) => (
          <li
            key={project.id}
            className="projects-item"
            ref={(el) => (projectsRef.current[index] = el)} // Guarda una referencia para cada item
          >
            <Link to={`/projects/${project["url-title"]}`}>
              <img
                src={project.frontImage}
                alt={project.title}
                className="projects-item-image"
              />
              <div className="projects-item-description">
                <h3>{project.title}</h3>
                <div>
                  <TruncatedCategories categories={project.categories} />
                </div>
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
