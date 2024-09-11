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
              <p>Logo, brand identity and web.</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/misoil"}>
            <img src={misoilImage} alt="Misoil Project" />
            <div className="home-projects__item-description">
              <h3>Misoil</h3>
              <p>Mockups and social media.</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/weye"}>
            <img src={weyeImage} alt="Weye Project" />
            <div className="home-projects__item-description">
              <h3>Weye</h3>
              <p>Packaging and brand identity.</p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/regatta"}>
            <img src={regattaImage} alt="Regatta Project" />
            <div className="home-projects__item-description">
              <h3>Regatta Fund Fi</h3>
              <p>
                Brand identity and web design for a financial services company.
              </p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/garrotxa"}>
            <img src={garrotxaImage} alt="Garrotxa Project" />
            <div className="home-projects__item-description">
              <h3>Garrotxa Startup</h3>
              <p>
                Brand identity and web design for a startup that offers guided
                tours in La Garrotxa.
              </p>
            </div>
          </Link>
        </div>
        <div className="home-projects__item">
          <Link to={"/projects/olivella"}>
            <img src={olivellaImage} alt="Olivella Project" />
            <div className="home-projects__item-description">
              <h3>Cuinats Olivella</h3>
              <p>Web design for a company that offers catering services.</p>
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
