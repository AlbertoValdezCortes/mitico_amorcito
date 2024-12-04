import React from 'react';
import '../About.css';
import espacioImage from '../imagenes/espacio.jpg';
import lentejaImage from '../imagenes/lenteja.png';
import garbanzoImage from '../imagenes/garbanzo.png';
import ambosImage from '../imagenes/ambos.png';
import terrazaImage from '../imagenes/terraza.jpg';
import arenaImage from '../imagenes/arena.jpg';
import interiorImage from '../imagenes/interior.jpg';

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function About() {
  return (
    <div>
      {/* Sección de "Sobre Nosotros" con imagen de fondo */}
      <div className="about-container">
        <h1>Sobre Nosotros</h1>
        <p>
          **MÍTICO AMORCITO** nace de la fusión de dos conceptos llenos de magia: el desayuno matutino de **Mítico** y la atmósfera romántica y bohemia de **Amorcito Mi Barrio**. Esta unión nos permite ofrecerte una experiencia completa para que cada momento del día esté lleno de sabor, calidez y recuerdos inolvidables.
        </p>
      </div>

      {/* Nueva Sección de "Nuestra Historia" */}
      <div className="history-section">
        <h2>Nuestra Historia</h2>
        <p>
          Bienvenidos a **Mítico Amorcito**, el lugar donde cada desayuno, comida y cena cuentan una historia. Esta travesía comenzó con el deseo de reunir lo mejor de dos mundos: la experiencia de **Mítico**, conocida por sus desayunos únicos, y la esencia romántica de **Amorcito Mi Barrio**, que enamoró a tantos con sus noches llenas de encanto.
        </p>
        <p>
          Desde nuestros inicios, hemos trabajado como familia, construyendo un sueño que creció hasta convertirse en un espacio donde tradición e innovación se encuentran. A lo largo de los años, cada plato, cada rincón y cada detalle han sido diseñados con el propósito de ofrecerte una experiencia que trascienda la comida.
        </p>
        <p>
          En **Mítico Amorcito**, cada ingrediente se selecciona con cuidado, cada receta se elabora con amor, y cada visita se convierte en un recuerdo. Este es más que un restaurante: es un lugar donde los momentos especiales suceden, desde las primeras horas del día hasta la caída de la noche.
        </p>
        <p>
          Queremos agradecerte por ser parte de nuestra historia, por confiar en nosotros y permitirnos ser parte de tus días y noches. En **Mítico Amorcito**, no solo encontrarás comida deliciosa, sino un espacio donde te sentirás en casa, rodeado de calidez y buena compañía.
        </p>
        <p>
          ¡Bienvenidos a **Mítico Amorcito**, donde cada bocado cuenta una historia y cada cliente es parte de nuestra familia!
        </p>
      </div>

      {/* Sección de Características */}
      <div className="features-container">
        <div className="features-info">
          <div className="feature">
            <div className="icon">📦</div>
            <h3 className="feature-title">Espacio</h3>
            <p>Con capacidad para recibir a más de 80 comensales a la vez, ofrecemos un ambiente cómodo y relajado tanto de día como de noche.</p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">☕</div>
            <h3 className="feature-title">Café y Cocteles</h3>
            <p>Desde nuestro café orgánico de especialidad por la mañana hasta los cocteles más creativos por la noche, tenemos algo para cada momento del día.</p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">🎶</div>
            <h3 className="feature-title">Ambiente Único</h3>
            <p>Disfruta de una atmósfera que evoluciona contigo: relajante por la mañana, vibrante y romántica por la noche.</p>
          </div>
        </div>
        
        {/* Columna de Imagen */}
        <div className="features-image">
          <img src={espacioImage} alt="Espacio del restaurante" />
        </div>
      </div>

      {/* Sección de Degustación */}
      <div className="tasting-section">
        <div className="tasting-info">
          <h2>Déjate Consentir</h2>
          <p>
            Comienza tu experiencia con nuestro aperitivo de bienvenida: pan pita crocante con hummus de garbanzo y lenteja, preparado con el toque especial de la casa. Perfecto para acompañar tus pláticas y relajarte mientras disfrutas del ambiente.
          </p>
          <a href='/Menu'><button className="menu-button">MIRA NUESTRO MENÚ COMPLETO</button></a>
        </div>
        
        {/* Imágenes de Pita */}
        <div className="tasting-images">
          <div className="tasting-item">
            <img src={lentejaImage} alt="Pita con hummus de lenteja" />
            <p>Pita con hummus de lenteja</p>
          </div>
          <div className="tasting-item">
            <img src={garbanzoImage} alt="Pita con hummus de garbanzo" />
            <p>Pita con hummus de garbanzo</p>
          </div>
          <div className="tasting-item">
            <img src={ambosImage} alt="Disfruta de ambos" />
            <p>Disfruta de ambos</p>
          </div>
        </div>
      </div>

      {/* Sección de Visítanos */}
      <div className="visit-section">
        <h2>Visítanos</h2>
        <p className="visit-description">
          Ubicados en el corazón de la colonia Seattle, **MÍTICO AMORCITO** te espera con un ambiente cálido y acogedor, ideal para compartir momentos especiales. Contamos con espacios únicos que se adaptan a cualquier ocasión.
        </p>
        
        {/* Contenedor de las Imágenes y Descripciones */}
        <div className="visit-images">
          <div className="visit-item">
            <img src={terrazaImage} alt="Terraza" />
            <h3>Terraza</h3>
            <p>Con una vista maravillosa al exterior, nuestra terraza te invita a disfrutar del entorno natural mientras degustas nuestros platillos.</p>
          </div>
          <div className="visit-item">
            <img src={arenaImage} alt="Con La Arena A Tus Pies" />
            <h3>Con La Arena A Tus Pies</h3>
            <p>Vive una experiencia diferente en nuestra zona playera, inspirada en ciudades mágicas como Tulum.</p>
          </div>
          <div className="visit-item">
            <img src={interiorImage} alt="En El Interior" />
            <h3>En El Interior</h3>
            <p>Si prefieres un ambiente más íntimo, nuestras mesas interiores junto a la barra de café te ofrecen tranquilidad y comodidad.</p>
          </div>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="social-icons">
          <a href="https://bit.ly/FacebookMíticoAmorcito" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://bit.ly/InstagramMiticoAmorcito" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://bit.ly/TikTokMiticoAmorcito" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://bit.ly/WhatsAppMiticoAmorcito" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://bit.ly/UbicacionMiticoAmorcito" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;