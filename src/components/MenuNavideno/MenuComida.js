import React from 'react';
import './menunavideno.css';

const MenuComida = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Paquetes Navideños: Comida y Cena</h1>
      <p className="menu-subtitle">
        ¡Perfectos para tus celebraciones de tarde y noche!
      </p>
      <p className="menu-customize">
        ¿No encuentras lo que necesitas? Personaliza tu propio paquete según tus necesidades y presupuesto.
      </p>
      <div className="packages-container">
        {/* Paquete 1 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #1</h3>
          <ul className="package-list">
            <li>4 HAMBURGUESAS A ELEGIR</li>
            <li>150 GRS BONELESS</li>
            <li>150 GRS PAPAS GAJO</li>
            <li>4 DEDOS DE QUESO</li>
            <li>4 PZAS ALITAS</li>
            <li>4 PZAS ELOTE AMARILLO</li>
            <li>3 BALLENAS (pacífico familiar)</li>
          </ul>
          <p className="package-price">$1099</p>
        </div>

        {/* Paquete 2 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #2</h3>
          <ul className="package-list">
            <li>10 HAMBURGUESAS A ELEGIR</li>
            <li>600 GRS TENDERS</li>
            <li>600 GRS PAPAS GAJO</li>
            <li>20 PZAS ALITAS</li>
            <li>20 CORONAS DE CUARTITO</li>
          </ul>
          <p className="package-price">$2549</p>
        </div>

        {/* Paquete 3 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #3</h3>
          <ul className="package-list">
            <li>450 GRS BONELESS</li>
            <li>450 GRS PAPAS GAJO</li>
            <li>15 PZAS ALITAS</li>
            <li>12 DEDOS DE QUESO</li>
            <li>15 AROS DE CEBOLLA</li>
            <li>5 CORONA FAMILIAR</li>
          </ul>
          <p className="package-price">$1049</p>
        </div>
      </div>
    </div>
  );
};

export default MenuComida;