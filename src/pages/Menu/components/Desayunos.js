import React from "react";
import datosDesayunos from "../data/desayunos";
import "../styles/Desayunos.css";

const Desayunos = () => {
  return (
    <>
      {datosDesayunos.map((categoria, index) => (
        <div key={index} className="desayuno-categoria">
          <img
            src={categoria.imagen}
            alt={`Imagen ilustrativa de ${categoria.subtitulo}`}
            className="categoria-imagen"
          />
          <h2 className="categoria-titulo">
            <span role="img" aria-label="sol">
              ☀️
            </span>{" "}
            {categoria.subtitulo}
          </h2>
          <div className="platillos-grid">
            {categoria.platillos.map((platillo, idx) => (
              <div className="desayuno-platillo-card" key={idx}>
                <div className="platillo-info">
                  <h3>{platillo.nombre}</h3>
                  <p>{platillo.descripcion}</p>
                  <span className="platillo-precio">{platillo.precio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Desayunos;
