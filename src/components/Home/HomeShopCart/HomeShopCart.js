import React, { useState } from "react";

import BagImage from "./assets/bag.png";
import "./HomeShopCart.css";

const HomeShopCart = () => {
  const [availableItems, setAvailableItems] = useState([
    { id: 1, name: "Una nueva web" },
    { id: 2, name: "Rediseño Marca" },
    { id: 3, name: "Diseño Redes Sociales" },
    { id: 4, name: "Catálogo" },
    { id: 5, name: "Video corporativo" },
    { id: 6, name: "Nueva Imagen" },
    { id: 7, name: "Branding" },
    { id: 8, name: "Animación logotipo" },
    { id: 9, name: "Packaging" },
    { id: 10, name: "Foto de Productos" },
    { id: 11, name: "Planning Redes sociales" },
    { id: 12, name: "Ideas" },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
    setSelectedItems([...selectedItems, droppedItem]);
    setAvailableItems(
      availableItems.filter((item) => item.id !== droppedItem.id)
    );
  };

  return (
    <div className="shop-cart">
      <h1>Compra de los deseos</h1>

      {/* Panel izquierdo: Tags arrastrables */}
      <div className="tags-container">
        {availableItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className="draggable-tag"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Panel derecho: Bolsa y ticket */}
      <div className="bag-and-ticket">
        {/* Área de la bolsa */}
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="bag-area"
        >
          <div className="bag-content">
            <img src={BagImage} alt="Shopping Bag" className="bag-image" />
          </div>
        </div>

        {/* Ticket */}
        <div className="ticket">
          <div className="ticket-header">
            <h3>Ticket LEXMAKE</h3>
          </div>
          <div className="ticket-items">
            {selectedItems.map((item) => (
              <div key={item.id} className="ticket-item">
                • {item.name}
              </div>
            ))}
          </div>
          {selectedItems.length > 0 && (
            <button className="finish-button">FINALIZAR COMPRA</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeShopCart;
