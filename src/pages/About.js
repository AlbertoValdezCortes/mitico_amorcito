import React from "react";
import "../styles/About.css";
import ambienteInterior from "../assets/images/ambienteInterior.jpg";
import pitaLenteja from "../assets/images/pitaLenteja.png";
import pitaGarbanzo from "../assets/images/pitaGarbanzo.png";
import pitaLentejaGarbanzo from "../assets/images/pitaLentejaGarbanzo.png";
import ambienteTerraza from "../assets/images/ambienteTerraza.jpg";
import ambienteArena from "../assets/images/ambienteArena.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const { scrollY } = useScroll();

  // Parallax efectos
  const parallaxY = useTransform(scrollY, [0, 300], [0, 50]);
  const parallaxYReverse = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div>
      <div className="about-container">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <strong>MÍTICO</strong> nace de la fusión de dos conceptos llenos de
          magia: el desayuno matutino de <strong>Mítico</strong> y la atmósfera
          romántica y bohemia de <strong>Amorcito Mi Barrio</strong>...
        </motion.p>
      </div>

      <motion.div
        className="history-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Nuestra Historia</h2>
        <p>
          Bienvenidos a <strong>Mítico</strong>, el lugar donde cada desayuno,
          comida y cena cuentan una historia...
        </p>
        <p>Desde nuestros inicios, hemos trabajado como familia...</p>
        <p>
          En <strong>Mítico</strong>, cada ingrediente se selecciona con
          cuidado...
        </p>
        <p>Queremos agradecerte por ser parte de nuestra historia...</p>
        <p>
          ¡Bienvenidos a <strong>Mítico</strong>, donde cada bocado cuenta una
          historia!
        </p>
      </motion.div>

      <motion.div
        className="features-container"
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="features-info">
          <div className="feature">
            <div className="icon">📦</div>
            <h3>Espacio</h3>
            <p>
              Con capacidad para más de 80 comensales, ofrecemos un ambiente
              cómodo y relajado.
            </p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">☕</div>
            <h3>Café y Cócteles</h3>
            <p>
              Desde café de especialidad por la mañana hasta cócteles únicos por
              la noche.
            </p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">🎶</div>
            <h3>Ambiente Único</h3>
            <p>Relajante por la mañana, vibrante y romántico por la noche.</p>
          </div>
        </div>
        <div className="features-image">
          <img src={ambienteInterior} loading="lazy" alt="Ambiente Interior" />
        </div>
      </motion.div>

      <motion.div
        className="tasting-section"
        style={{ y: parallaxYReverse }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="tasting-info">
          <h2>Déjate Consentir</h2>
          <p>
            Comienza tu experiencia con nuestro pan pita crocante con hummus de
            garbanzo y lenteja...
          </p>
          <a href="/menu">
            <button className="menu-button">MIRA NUESTRO MENÚ COMPLETO</button>
          </a>
        </div>
        <div className="tasting-images">
          <div className="tasting-item">
            <img src={pitaLenteja} alt="Pita Lenteja" />
            <p>Pita con hummus de lenteja</p>
          </div>
          <div className="tasting-item">
            <img src={pitaGarbanzo} alt="Pita Garbanzo" />
            <p>Pita con hummus de garbanzo</p>
          </div>
          <div className="tasting-item">
            <img src={pitaLentejaGarbanzo} alt="Ambos" />
            <p>Disfruta de ambos</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="visit-section"
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Visítanos</h2>
        <p className="visit-description">
          Ubicados en el corazón de la colonia Seattle, <strong>MÍTICO</strong>{" "}
          te espera con un ambiente cálido y acogedor...
        </p>
        <div className="visit-images">
          <div className="visit-item">
            <img src={ambienteTerraza} alt="Terraza" />
            <h3>Terraza</h3>
            <p>Disfruta del entorno natural desde nuestra terraza.</p>
          </div>
          <div className="visit-item">
            <img src={ambienteArena} alt="Arena" />
            <h3>Con La Arena A Tus Pies</h3>
            <p>Inspirado en Tulum, relájate en nuestra zona de arena.</p>
          </div>
          <div className="visit-item">
            <img src={ambienteInterior} alt="Interior" />
            <h3>En El Interior</h3>
            <p>Ambiente íntimo junto a la barra de café.</p>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/mitico.amorcito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
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
          <a
            href="https://wa.me/523312937187"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://maps.app.goo.gl/Jts5FRQAdde51YdD9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
