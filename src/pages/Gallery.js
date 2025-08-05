import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Gallery.css";

// ESPACIO
import ambienteArena from "../assets/images/ambienteArena.jpg";
import ambienteInterior from "../assets/images/ambienteInterior.jpg";
import ambienteTerraza from "../assets/images/ambienteTerraza.jpg";
import ambienteTerraza2 from "../assets/images/ambienteTerraza2.jpg";
import arena from "../assets/images/arena.jpg";
import exterior from "../assets/images/exterior.jpg";
import fondoReserva from "../assets/images/fondoReserva.jpg";

// BEBIDAS
import barra from "../assets/images/barra.jpg";
import te from "../assets/images/te.jpg";
import cieloRojo from "../assets/images/cieloRojo.jpg";
import lobaTropical from "../assets/images/lobaTropical.jpg";
import malteada from "../assets/images/malteada.png";
import minervaViena from "../assets/images/minervaViena.jpg";

// PLATILLOS
import bistec from "../assets/images/bistec.jpg";
import bowlDeAvena from "../assets/images/bowlDeAvena.jpg";
import cheeseSandwich from "../assets/images/cheeseSandwich.jpg";
import chilaquilesMole from "../assets/images/chilaquilesMole.jpg";
import chilaquilesVerdes from "../assets/images/chilaquilesVerdes.png";
import chopSalad from "../assets/images/chopSalad.jpg";
import crepa_dulce from "../assets/images/crepa_dulce.jpg";
import crepa_salada from "../assets/images/crepa_salada.jpg";
import dogos from "../assets/images/dogos.jpg";
import enchiladasSuizas from "../assets/images/enchiladasSuizas.jpg";
import enmoladas from "../assets/images/enmoladas.jpg";
import hamburguesaAtun from "../assets/images/hamburguesaAtun.jpg";
import hamburguesaPortobello from "../assets/images/hamburguesaPortobello.jpg";
import huevosRevueltos from "../assets/images/huevosRevueltos.jpg";
import molletes from "../assets/images/molletes.jpg";
import omellet from "../assets/images/omellet.jpg";
import panFrances from "../assets/images/panFrances.jpg";
import hamburguesaMendiola from "../assets/images/hamburguesaMendiola.png";
import paninis from "../assets/images/paninis.jpg";
import papasMiticas from "../assets/images/papasMiticas.jpg";
import pitaGarbanzo from "../assets/images/pitaGarbanzo.png";
import pitaLenteja from "../assets/images/pitaLenteja.png";
import pitaLentejaGarbanzo from "../assets/images/pitaLentejaGarbanzo.png";
import platillosVarios from "../assets/images/platillosVarios.png";
import quesadillasFritas from "../assets/images/quesadillasFritas.jpg";
import sandwichMilaCerdo from "../assets/images/sandwichMilaCerdo.jpg";
import sandwichRoastBeef from "../assets/images/sandwichRoastBeef.png";
import sopa_tortilla from "../assets/images/sopa_tortilla.jpg";
import toast from "../assets/images/toast.jpg";
import toastMitico from "../assets/images/toastMitico.jpg";
import toastPesto from "../assets/images/toastPesto.jpg";
import waffles from "../assets/images/waffles.jpg";

// POSTRES
import opera from "../assets/images/opera.png";
import panElote from "../assets/images/panElote.png";
import postreHelado from "../assets/images/postreHelado.png";

function Gallery() {
  const [activeTab, setActiveTab] = useState("espacio");
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = {
    espacio: [
      ambienteArena,
      ambienteInterior,
      ambienteTerraza,
      ambienteTerraza2,
      arena,
      exterior,
      fondoReserva,
    ],
    bebidas: [barra, te, cieloRojo, lobaTropical, malteada, minervaViena],
    platillos: [
      bistec,
      bowlDeAvena,
      cheeseSandwich,
      chilaquilesMole,
      chilaquilesVerdes,
      chopSalad,
      crepa_dulce,
      crepa_salada,
      dogos,
      enchiladasSuizas,
      enmoladas,
      hamburguesaAtun,
      hamburguesaPortobello,
      huevosRevueltos,
      molletes,
      omellet,
      panFrances,
      hamburguesaMendiola,
      paninis,
      papasMiticas,
      pitaGarbanzo,
      pitaLenteja,
      pitaLentejaGarbanzo,
      platillosVarios,
      quesadillasFritas,
      sandwichMilaCerdo,
      sandwichRoastBeef,
      sopa_tortilla,
      toast,
      toastMitico,
      toastPesto,
      waffles,
    ],
    postres: [opera, panElote, postreHelado],
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Galería</h2>

      <div className="gallery-tabs">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="gallery-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tabs[activeTab].length > 0 ? (
            tabs[activeTab].map((img, index) => {
              const sizes = ["small", "medium", "large"];
              const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];

              return (
                <motion.div
                  key={index}
                  className={`gallery-item ${sizeClass}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(img)}
                  onTouchStart={(e) => {
                    e.currentTarget.classList.add("active");
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.classList.remove("active");
                  }}
                >
                  <img src={img} alt={`img-${index}`} loading="lazy" />
                </motion.div>
              );
            })
          ) : (
            <p className="gallery-empty">No hay imágenes disponibles.</p>
          )}
        </motion.div>
      </AnimatePresence>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="preview"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
