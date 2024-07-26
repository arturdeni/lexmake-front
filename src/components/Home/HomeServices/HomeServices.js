import React from "react";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <section className="home-services">
      <h1 className="home-services__title">
        Servicios que dan vida a tus ideas
      </h1>
      <div className="home-services__item">
        <h3>Diseño gráfico</h3>
        <p className="home-services__description">
          Creamos diseños que reflejan la esencia de tu marca y conectan con tu
          audiencia.
        </p>
      </div>
      <div className="home-services__item">
        <h3>Redes sociales</h3>
        <p className="home-services__description">
          Optimiza tu presencia en redes sociales y conecta con tus seguidores
          de manera efectiva.
        </p>
      </div>
      <div className="home-services__item">
        <h3>Diseño web</h3>
        <p className="home-services__description">
          Desarrollamos sitios web que combinan estética y funcionalidad para
          impactar a tus usuarios.
        </p>
      </div>
      <div className="home-services__item">
        <h3>Multimedia</h3>
        <p className="home-services__description">
          Creamos contenido multimedia que capta la atención y comunica tu
          mensaje de manera efectiva.
        </p>
      </div>
    </section>
  );
};

export default HomeServices;
