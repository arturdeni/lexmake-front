// About.js
import React from "react";
import "./About.css";
import quotationMarks from "../../assets/icons/quotation-marks.svg";
import HomeSkills from "../Home/HomeSkills/HomeSkills";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ALEXIA VILADOT</h1>

      <div className="about-top-section">
        <div className="about-image-container">
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
