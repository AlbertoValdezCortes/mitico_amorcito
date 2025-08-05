import React from "react";
import { motion } from "framer-motion";
import "../styles/NovedadesDestacados.css";

const novedades = [
  {
    titulo: "🎶 Música en Vivo este Viernes",
    descripcion:
      "Acompáñanos este viernes a partir de las 8:00 pm con nuestro dueto acústico favorito.",
  },
  {
    titulo: "🍽️ Platillo Destacado: Panini de Prosciutto",
    descripcion:
      "Disfruta nuestro panini especial con prosciutto, arúgula fresca y aderezo balsámico.",
  },
  {
    titulo: "🌟 Novedad: Noche de Karaoke",
    descripcion:
      "Este sábado, libera tu voz en nuestra primera Noche de Karaoke.",
  },
];

const NovedadesDestacados = () => {
  return (
    <section className="novedades-section">
      <h2 className="novedades-title">Novedades y Destacados</h2>
      <div className="novedades-grid">
        {novedades.map((item, index) => (
          <motion.div
            className="novedad-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NovedadesDestacados;
