import React from "react";
import "./MenuButton.css";

const MenuButton = ({ toggleMenu, isOpen }) => {
  return (
    <button className="menu-button" onClick={toggleMenu}>
      <div className={`menu-button__line ${isOpen ? "open" : ""}`}></div>
      <div className={`menu-button__line ${isOpen ? "open" : ""}`}></div>
      <div className={`menu-button__line ${isOpen ? "open" : ""}`}></div>
    </button>
  );
};

export default MenuButton;
