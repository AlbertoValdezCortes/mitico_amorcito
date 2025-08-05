import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Mítico</h3>
        <p>Zapopan, Jalisco</p>
        <p>Abierto: Jue a Mar de 9:00 a 22:30</p>
        <p>Miércoles cerrado</p>
      </div>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/miticoamorcito"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/miticoamorcito"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/523312937187"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Mítico. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
