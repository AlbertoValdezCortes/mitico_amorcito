import React, { useRef, useEffect, useState } from "react";
import "../styles/Home.css";

import ambiente from "../assets/images/ambienteInterior.jpg";
import terraza from "../assets/images/ambienteTerraza.jpg";
import barra from "../assets/images/barra.jpg";
import bowl from "../assets/images/bowlDeAvena.jpg";
import chilaquiles from "../assets/images/chilaquilesMole.jpg";
import pesto from "../assets/images/toastPesto.jpg";
import pita from "../assets/images/pitaGarbanzo.png";
import te from "../assets/images/te.jpg";
import toast from "../assets/images/toastMitico.jpg";

import CustomMap from "../components/CustomMap";

function ImageCarousel() {
  const images = [
    ambiente,
    terraza,
    barra,
    bowl,
    chilaquiles,
    pesto,
    pita,
    te,
    toast,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`carousel-image ${idx === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

function Home() {
  const contentRef = useRef(null);

  return (
    <div id="home">
      <ImageCarousel />

      <section ref={contentRef} className="home-info">
        <div className="info-container">
          <div className="restaurant-map">
            <CustomMap />
          </div>

          <div className="restaurant-info">
            <p>Aurelio Ortega 863,</p>
            <p>Jardines de La Seattle, Zapopan</p>
            <p>Jueves a Martes: 9:00 a 22:30</p>
            <p>Miércoles cerrado</p>
            <p>
              <a
                href="tel:3316410988"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teléfono: (33) 1641-0988
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/5213312937187"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (33) 1293-7187
              </a>
            </p>
            <p>
              <a href="mailto:contacto@miticocafe.com">
                contacto@miticocafe.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
