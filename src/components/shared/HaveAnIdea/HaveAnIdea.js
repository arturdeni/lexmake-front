import React from "react";

import "./HaveAnIdea.css";

const HaveAnIdea = () => {
  return (
    <div className="have-an-idea">
      <p>
        "Quiero ayudar a personas y empresas a tener la imagen que se merecen, a
        mostrar al mundo qué saben hacer."{" "}
        <strong>
          Si has llegado hasta aquí es que tienes algo que contarme.
        </strong>
      </p>
      <a href="/contact">
        <button className="have-an-idea__button">Tengo una idea</button>
      </a>
    </div>
  );
};

export default HaveAnIdea;
