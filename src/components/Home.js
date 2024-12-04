import React, { useRef } from 'react';

// Importa todas las imágenes desde la carpeta imagenes en src
import ambiente from '../imagenes/ambiente.JPG';
import barra from '../imagenes/barra.JPG';
import bowlDeAvena from '../imagenes/bowlDeAvena.JPG';
import chilaMole from '../imagenes/chilaMole.JPG';
import pesto from '../imagenes/pesto.JPG';
import pitaGarbanzo from '../imagenes/pitaGarbanzo.JPG';
import pitaLenteja from '../imagenes/pitaLenteja.JPG';
import te from '../imagenes/te.JPG';
import toastMitico from '../imagenes/toastMitico.JPG';

// Importa CustomMap
import CustomMap from './CustomMap';

// Componente para el carrusel
function ImageCarousel() {
  const images = [
    ambiente,
    barra,
    bowlDeAvena,
    chilaMole,
    pesto,
    pitaGarbanzo,
    pitaLenteja,
    te,
    toastMitico,
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

function Home() {
  const contentRef = useRef(null);
  return (
    <div>
      <ImageCarousel />

      <section ref={contentRef} className="home-info">
        <div className="info-container">
          <div className="restaurant-map">
            <CustomMap />
          </div>

          <div className="restaurant-info">
            <p>Aurelio Ortega 863,</p>
            <p>Jardines de La Seattle, Zapopan</p>
            <p>Lunes a Domingo 7:45am a 2:00pm</p>
            <p>
              <a
                href="https://wa.me/5213312937187"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7B4436', fontWeight: 'bold' }}
              >
                (33) 1293-7187
              </a>
              </p>
            <p>
              <a
                href="mailto:contacto@miticocafe.com"
                style={{ color: '#7B4436', fontWeight: 'bold' }}
              >
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