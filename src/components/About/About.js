// About.js
import React, { useEffect } from "react";
import gsap from "gsap";
import quotationMarks from "../../assets/icons/quotation-marks.svg";
import HomeSkills from "../Home/HomeSkills/HomeSkills";

import "./About.css";

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".blue-line",
      { width: "0%" },
      { width: "100%", duration: 1, delay: 0.6, ease: "power1.inOut" },
      "-=0.5"
    );

    tl.fromTo(
      ".about-image-background",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">ALEXIA VILADOT</h1>

      <div className="about-top-section">
        <div className="about-image-container">
          <div className="about-image-background"></div>
          <img
            className="about-alexia-image"
            src="https://res.cloudinary.com/dgeaapj3n/image/upload/v1730192509/IMG_1593_2_ror5pw.png"
            alt="Alexia Viladot"
          />
        </div>
        <div className="about-text-primary">
          <p>
            ¡Hola! Soy <span className="highlight">Alexia</span>, el corazón y
            la mente detrás de Lexmake. Mi pasión es dar vida a las visiones:
            convertir las ideas en presencias online palpables y marcas que
            respiran y hablan por sí mismas. Fundé Lexmake con un propósito
            claro: democratizar el diseño de calidad. Creo que todos, desde
            emprendedores individuales hasta grandes corporaciones, merecen una
            oportunidad de destacar en el mundo digital con un diseño de marca
            que sea tan único y auténtico como ellos mismos.
          </p>
        </div>
      </div>

      <div className="blue-line"></div>

      <div className="about-bottom-section">
        <div className="about-text-secondary">
          <p>
            Soy una comunicadora visual por naturaleza. Me especializo en captar
            la esencia de lo que mis clientes desean transmitir y convertirlo en
            una realidad visual que trasciende las expectativas. En Lexmake, no
            solo diseñamos, creamos experiencias, construimos historias y
            forjamos conexiones emocionales a través de cada color, cada forma y
            cada textura.
          </p>
        </div>

        <div className="quote-section">
          <div className="quote-container">
            <img
              src={quotationMarks}
              alt="quote"
              className="quote-mark quote-mark-left"
            />
            <div className="quote-text">
              <p>
                DISEÑO QUE DIALOGA, MARCA QUE PERDURA: FORJANDO IDENTIDADES
                VISUALES QUE CUENTAN TU HISTORIA ÚNICA
              </p>
            </div>
            <img
              src={quotationMarks}
              alt="quote"
              className="quote-mark quote-mark-right"
            />
          </div>
        </div>
      </div>
      <HomeSkills />
    </div>
  );
};

export default About;
