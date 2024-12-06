import React from 'react';
import esferaImg from '../../imagenes/esferas.jpg';
import adornoImg from '../../imagenes/adorno.jpg';
import pinguinoImg from '../../imagenes/pinguino.jpg';
import santaImg from '../../imagenes/santa.jpg';
import arbolImg from '../../imagenes/arbol.jpg';
import qrImg from '../../imagenes/menu_navideno_updated_qr.png'; // Ruta del QR
import './menunavideno.css';

const MenuNavideno = () => {
  return (
    <div className="menu-container">
      {/* Esferas decorativas en la parte superior */}
      <div className="esfera-container">
        <img 
          src={esferaImg} 
          alt="Esferas navideñas" 
          className="esfera-img"
        />
      </div>
      
      {/* Muérdago en esquina superior derecha */}
      <img 
        src={adornoImg} 
        alt="Muérdago navideño" 
        className="muerdago-img"
      />
      
      {/* Contenido del menú */}
      <div className="menu-content">
        <h1 className="menu-title">
          Paquetes Decembrinos
        </h1>
        <h2 className="menu-subtitle">
          Por la tarde / noche
        </h2>
        
        {/* Paquetes */}
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
          
          {/* Paquete 2 con pingüino */}
          <div className="package-card">
            <img 
              src={pinguinoImg} 
              alt="Pingüino navideño" 
              className="pinguino-img"
            />
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
      
      {/* Santa en la parte inferior */}
      <img 
        src={santaImg} 
        alt="Santa" 
        className="santa-img"
      />
      
      {/* Árbol de navidad en esquina inferior derecha */}
      <img 
        src={arbolImg} 
        alt="Árbol de navidad" 
        className="arbol-img"
      />

      {/* Código QR oculto */}
      <img 
        src={qrImg} 
        alt="QR Menú Navideño" 
        className="hidden-qr" 
      />
    </div>
  );
};

export default MenuNavideno;