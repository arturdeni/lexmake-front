import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import InstagramIcon from "../../assets/icons/rrss/instagram-icon";
import TiktokIcon from "../../assets/icons/rrss/tiktok-icon";
import LinkedInIcon from "../../assets/icons/rrss/linkedin-icon";
import WhatsAppIcon from "../../assets/icons/rrss/whatsapp-icon";
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
        <div className="desktop-header-container">
          <div className="logo">
            <div className="logo-container">
              <Link to="/">
                <Logo color="black" />
              </Link>
            </div>
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
            <div className="contact-content">
              <a href="mailto:alexiaviladot@lexmake.com" className="email">
                alexiaviladot@lexmake.com
              </a>
              <div className="social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon--instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon--linkedin"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon--whatsapp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
