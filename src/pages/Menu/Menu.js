import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Desayunos from "./components/Desayunos";
import ComidaCena from "./components/ComidaCena";
import "./styles/Menu.css";

const Menu = ({ setVistaGlobal }) => {
  const [vista, setVista] = useState("desayunos");

  // Sincroniza el estado local con el estado global en App.js
  useEffect(() => {
    setVistaGlobal(vista);
  }, [vista, setVistaGlobal]);

  return (
    <div
      className={`menu-wrapper ${
        vista === "desayunos" ? "modo-dia" : "modo-noche"
      }`}
    >
      <section className="menu-section" id="menu">
        <h2
          className={`menu-title ${vista === "comida" ? "titulo-noche" : ""}`}
        >
          Nuestro Menú
        </h2>

        <div className="menu-buttons">
          <button
            className={`menu-toggle-btn ${
              vista === "desayunos" ? "activo" : ""
            }`}
            data-icon="🌞"
            onClick={() => setVista("desayunos")}
          >
            Desayunos
          </button>
          <button
            className={`menu-toggle-btn ${vista === "comida" ? "activo" : ""}`}
            data-icon="🌙"
            onClick={() => setVista("comida")}
          >
            Comida / Cena
          </button>
        </div>

        <div
          className={`menu-vista ${
            vista === "desayunos" ? "vista-desayunos" : "vista-comida"
          }`}
        >
          <AnimatePresence mode="wait">
            {vista === "desayunos" ? (
              <motion.div
                key="desayunos"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                <Desayunos />
              </motion.div>
            ) : (
              <motion.div
                key="comida"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <ComidaCena />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Menu;
