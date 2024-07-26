import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo";

import MenuButton from "./MenuButton/MenuButton";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Logo color="black" />
        </Link>
      </div>
      <div ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          HOME
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          PROJECTS
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          CONTACT
        </Link>
      </div>
      <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
    </header>
  );
};

export default Header;
