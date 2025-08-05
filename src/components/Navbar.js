import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logoCompleto from "../assets/images/logoCompleto.png";
import logoCompacto from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = isScrolled ? logoCompacto : logoCompleto;
  const logoClass = isScrolled ? "logo-compacto" : "logo-grande";

  return (
    <nav className="navbar">
      <a href="/#home" className="navbar-logo" onClick={handleLinkClick}>
        <img
          src={logoSrc}
          alt="Mítico Logo"
          className={`logo-image fade-logo ${logoClass}`}
        />
      </a>

      <div className="social-icons-navbar">
        <a
          href="https://www.facebook.com/mitico.amorcito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/mitico_amorcito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@miticoamorcito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
      </div>

      {/* BOTÓN DE NOVEDADES */}
      <a href="/novedades" className="novedades-btn" onClick={handleLinkClick}>
        Novedades
      </a>

      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <ul className="navbar-links">
        <li>
          <a href="/#home" onClick={handleLinkClick}>
            Inicio
          </a>
        </li>
        <li>
          <a href="/#about" onClick={handleLinkClick}>
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="/#gallery" onClick={handleLinkClick}>
            Galería
          </a>
        </li>
        <li>
          <a href="/#reservations" onClick={handleLinkClick}>
            Reservaciones
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={handleLinkClick}>
            Contacto
          </a>
        </li>
        <li>
          <a href="/menu" className="menu-float-btn" onClick={handleLinkClick}>
            Ver Menú Completo 🍽️
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
