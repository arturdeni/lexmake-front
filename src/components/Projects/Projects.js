import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Proyecto 1", description: "Descripción del proyecto 1" },
  { id: 2, name: "Proyecto 2", description: "Descripción del proyecto 2" },
  { id: 3, name: "Proyecto 3", description: "Descripción del proyecto 3" },
];

const Projects = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
