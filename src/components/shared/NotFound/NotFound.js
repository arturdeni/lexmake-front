import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p className="not-found__message">
        ¡Ups! Parece que esta página no existe.
      </p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
