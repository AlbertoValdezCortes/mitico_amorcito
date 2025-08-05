import React from "react";
import datosComida from "../data/comidaCena";
import "../styles/ComidaCena.css";

const ComidaCena = () => {
  return (
    <div className="comidacena-container">
      {datosComida.map((categoria, index) => (
        <div key={index} className="comidacena-categoria">
          <img
            src={categoria.imagen}
            alt={`Imagen ilustrativa de ${categoria.categoria}`}
            className="categoria-imagen"
          />
          <h2 className="categoria-titulo">
            <span role="img" aria-label="luna">
              🌙
            </span>{" "}
            {categoria.categoria}
          </h2>
          <div className="platillos-grid">
            {categoria.platillos.map((platillo, idx) => (
              <div className="platillo-card" key={idx}>
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
    </div>
  );
};

export default ComidaCena;
