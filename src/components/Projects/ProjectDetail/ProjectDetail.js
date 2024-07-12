import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Proyecto 1",
    description: "Descripción detallada del proyecto 1",
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción detallada del proyecto 2",
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Descripción detallada del proyecto 3",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
