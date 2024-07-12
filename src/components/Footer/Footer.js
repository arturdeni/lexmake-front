import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Lexmake. Todos los derechos reservados.</p>
        <div className="footer__links">
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms-of-service">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
