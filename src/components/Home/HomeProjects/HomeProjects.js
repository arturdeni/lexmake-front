import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HomeProjects.css";

import estiberImage from "../../../assets/images/projects/estiber-project.jpg";
import misoilImage from "../../../assets/images/projects/misoil-project.jpg";
import weyeImage from "../../../assets/images/projects/weye-project.jpg";
import regattaImage from "../../../assets/images/projects/regatta-project.jpg";
import garrotxaImage from "../../../assets/images/projects/garrotxa-project.jpg";
import olivellaImage from "../../../assets/images/projects/olivella-project.jpg";

const HomeProjects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projects = useRef(null);
  const projects_container = useRef(null);

  useGSAP(() => {
    const containerWidth = projects.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 768) {
      const items = gsap.utils.toArray(".home-projects__item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 }, // Comienza desde 50px abajo y opacidad 0
          {
            opacity: 1,
            y: 0, // Mueve hacia su posición original
            duration: 1, // Duración de la animación
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // Inicia cuando el item esté en el 80% del viewport
              toggleActions: "play none none reverse", // Reproduce al entrar y revierte al salir
            },
          }
        );
      });
    }

    if (viewportWidth > 768) {
      gsap.to(projects.current, {
        x: -(containerWidth - viewportWidth), // Mover hacia la izquierda el ancho total menos el viewport
        ease: "none",
        scrollTrigger: {
          trigger: projects_container.current,
          start: "center center", // Inicia la animación cuando el top del contenedor llega al top del viewport
          end: `+=${containerWidth - viewportWidth}`, // La animación dura hasta que se haya desplazado el contenedor completamente
          scrub: 1, // Hacer que la animación siga el scroll
          pin: true, // Fijar el contenedor mientras dura la animación
          anticipatePin: 1, // Hacer que el contenedor se fije antes de que la animación empiece
        },
      });
    }
  });

  return (
    <section className="home-projects" ref={projects_container}>
      <div className="home-projects__container" ref={projects}>
        <div className="home-projects__item">
          <Link to={"/projects/estiber"}>
            <img src={estiberImage} alt="Estiber Project" />
            <div className="home-projects__item-description">
              <h3>Estiber</h3>
              <p>Logo, brand y web</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/misoil"}>
            <img src={misoilImage} alt="Misoil Project" />
            <div className="home-projects__item-description">
              <h3>Misoil</h3>
              <p>Mockups y RRSS</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/weye"}>
            <img src={weyeImage} alt="Weye Project" />
            <div className="home-projects__item-description">
              <h3>Weye</h3>
              <p>Packaging y Brand</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/regatta"}>
            <img src={regattaImage} alt="Regatta Project" />
            <div className="home-projects__item-description">
              <h3>Regatta Fund Fi</h3>
              <p>Brand y Web</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/garrotxa"}>
            <img src={garrotxaImage} alt="Garrotxa Project" />
            <div className="home-projects__item-description">
              <h3>Garrotxa Startup</h3>
              <p>Brand, Web y RRSS</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/olivella"}>
            <img src={olivellaImage} alt="Olivella Project" />
            <div className="home-projects__item-description">
              <h3>Cuinats Olivella</h3>
              <p>Brand</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects"}>
            <button className="lexmake-button">Otros Proyectos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
