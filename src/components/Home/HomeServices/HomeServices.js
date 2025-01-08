import React, { useState } from "react";
import "./HomeServices.css";

const HomeServices = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="home-services">
      <h1>Servicios que dan vida a tus ideas</h1>
      <div
        className={`home-services__item ${activeItem === 0 ? "active" : ""}`}
        onClick={() => toggleItem(0)}
      >
        <div className="home-services__title">
          <span className="home-services__number">01</span>
          <h3>Diseño grafico</h3>
        </div>
        <p className="home-services__description">
          <ul>
            <li>
              Creación de identidades visuales (logotipos y línea gráfica).
            </li>
            <li>
              Diseño de materiales impresos: flyers, carteles, tarjetas, y más.
            </li>
            <li>Diseño de presentaciones corporativas y de producto.</li>
          </ul>
        </p>
        <img
          className="home-services__item-image"
          src={
            "https://res.cloudinary.com/dgeaapj3n/image/upload/v1736198568/Rectangle_88_zxlvd1.png"
          }
          alt="Diseño gráfico"
        />
      </div>
      <div
        className={`home-services__item ${activeItem === 1 ? "active" : ""}`}
        onClick={() => toggleItem(1)}
      >
        <div className="home-services__title">
          <span className="home-services__number">02</span>
          <h3>Redes sociales</h3>
        </div>
        <p className="home-services__description">
          <ul>
            <li>Diseño de contenido visual atractivo para redes sociales.</li>
            <li>
              Creación de plantillas personalizadas para publicaciones y
              stories.
            </li>
            <li>
              Desarrollo de estrategias visuales alineadas con la identidad de
              marca.
            </li>
          </ul>
        </p>
        <img
          className="home-services__item-image"
          src={
            "https://res.cloudinary.com/dgeaapj3n/image/upload/v1736198568/Rectangle_96_jdb3be.png"
          }
          alt="Redes sociales"
        />
      </div>
      <div
        className={`home-services__item ${activeItem === 2 ? "active" : ""}`}
        onClick={() => toggleItem(2)}
      >
        <div className="home-services__title">
          <span className="home-services__number">03</span>
          <h3>Diseño web</h3>
        </div>
        <p className="home-services__description">
          <ul>
            <li>Diseño de sitios web personalizados y responsivos.</li>
            <li>Optimización de la experiencia visual del usuario (UX/UI).</li>
            <li>Creación de prototipos interactivos.</li>
          </ul>
        </p>
        <img
          className="home-services__item-image"
          src={
            "https://res.cloudinary.com/dgeaapj3n/image/upload/v1736198568/Rectangle_98_qrsuee.png"
          }
          alt="Diseño web"
        />
      </div>
      <div
        className={`home-services__item ${activeItem === 3 ? "active" : ""}`}
        onClick={() => toggleItem(3)}
      >
        <div className="home-services__title">
          <span className="home-services__number">04</span>
          <h3>Multimedia</h3>
        </div>
        <p className="home-services__description">
          <ul>
            <li>Producción de videos promocionales y animaciones gráficas.</li>
            <li>Edición de contenido audiovisual.</li>
            <li>Creación de presentaciones multimedia impactantes.</li>
          </ul>
        </p>
        <img
          className="home-services__item-image"
          src={
            "https://res.cloudinary.com/dgeaapj3n/image/upload/v1736198568/Rectangle_97_ox38n8.png"
          }
          alt="Multimedia"
        />
      </div>
    </section>
  );
};

export default HomeServices;
