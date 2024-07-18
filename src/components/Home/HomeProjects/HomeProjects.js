import React, { useRef, useEffect } from "react";
import "./HomeProjects.css";

const HomeProjects = () => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const isAtStart = container.scrollLeft === 0;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if ((isAtEnd && e.deltaY > 0) || (isAtStart && e.deltaY < 0)) {
      return; // Permitir el desplazamiento vertical
    }

    // Prevenir el comportamiento de scroll por defecto y desplazarse horizontalmente
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const preventScroll = (e) => {
        const isAtStart = container.scrollLeft === 0;
        const isAtEnd =
          container.scrollLeft + container.clientWidth >= container.scrollWidth;
        if (!((isAtEnd && e.deltaY > 0) || (isAtStart && e.deltaY < 0))) {
          e.preventDefault();
        }
      };
      container.addEventListener("wheel", preventScroll, { passive: false });
      return () => {
        container.removeEventListener("wheel", preventScroll);
      };
    }
  }, []);

  return (
    <div className="home__projects">
      <h2>Proyectos destacados</h2>
      <div
        className="home__projects-images"
        onWheel={handleScroll}
        ref={containerRef}
      >
        <div className="home__project">
          <img
            src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 1"
          />
          <h3>Proyecto 1</h3>
        </div>
        <div className="home__project">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125317942-013b0235b261?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 2"
          />
          <h3>Proyecto 2</h3>
        </div>
        <div className="home__project">
          <img
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Proyecto 3"
          />
          <h3>Proyecto 3</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
