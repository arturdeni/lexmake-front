import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import MenuButton from "./MenuButton/MenuButton";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

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
      {/* Versión móvil */}
      <div className="mobile-header">
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
          <Link to="/about" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
        </div>
        <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>

      {/* Versión desktop */}
      <div className="desktop-header">
        <div className="logo">
          <Link to="/">
            <Logo color="black" />
          </Link>
        </div>
        <nav className="desktop-nav">
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            PROJECTS
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            CONTACT
          </Link>
        </nav>
        <div className="contact-section">
          <a href="mailto:alexiaviladot@lexmake.com" className="email">
            alexiaviladot@lexmake.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
