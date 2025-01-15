import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <h1 className="privacy__title">Politica de Privacidad</h1>

      <section className="privacy__section">
        <h2>Información básica</h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
          3/2018 de Protección de Datos Personales y garantía de los derechos
          digitales (LOPDGDD), Lexmake te informa que los datos personales que
          nos proporciones serán tratados como se describe en esta política.
        </p>
      </section>

      <section className="privacy__section">
        <h2>Responsable del tratamiento</h2>
        <p>
          <strong>Identidad:</strong> Alexia Viladot - Lexmake
          <br />
          <strong>Dirección:</strong> Carrer de Marc Aureli, 10, 08006. Barcelona.
          <br />
          <strong>Email:</strong> alexiaviladot@lexmake.com
        </p>
      </section>

      <section className="privacy__section">
        <h2>¿Qué datos recopilamos?</h2>
        <p>A través de nuestra web podemos recopilar:</p>
        <ul>
          <li>
            Datos de contacto que nos proporcionas al usar el formulario de
            contacto (nombre, email)
          </li>
          <li>
            Información técnica sobre tu dispositivo y navegación por nuestra
            web
          </li>
        </ul>
      </section>

      <section className="privacy__section">
        <h2>¿Para qué usamos tus datos?</h2>
        <ul>
          <li>Para atender tus consultas y solicitudes</li>
          <li>
            Para enviarte información sobre nuestros servicios si así lo has
            autorizado
          </li>
          <li>Para mejorar tu experiencia en nuestra web</li>
        </ul>
      </section>

      <section className="privacy__section">
        <h2>Base legal</h2>
        <p>El tratamiento de tus datos se realiza en base a:</p>
        <ul>
          <li>Tu consentimiento explícito al contactar con nosotros</li>
          <li>
            Nuestro interés legítimo en responder tus consultas y mejorar
            nuestros servicios
          </li>
          <li>El cumplimiento de obligaciones legales aplicables</li>
        </ul>
      </section>

      <section className="privacy__section">
        <h2>Conservación de datos</h2>
        <p>
          Conservaremos tus datos personales durante el tiempo necesario para
          cumplir con los fines para los que fueron recogidos y mientras no
          revoques los consentimientos otorgados.
        </p>
      </section>

      <section className="privacy__section">
        <h2>Tus derechos</h2>
        <p>Puedes ejercer tus derechos de:</p>
        <ul>
          <li>Acceso a tus datos personales</li>
          <li>Rectificación de datos inexactos</li>
          <li>Supresión cuando ya no sean necesarios</li>
          <li>Portabilidad de tus datos</li>
          <li>Limitación y oposición al tratamiento</li>
        </ul>
        <p>
          Para ejercer estos derechos, puedes contactar con nosotros en
          alexiaviladot@lexmake.com
        </p>
      </section>
    </div>
  );
};

export default Privacy;
