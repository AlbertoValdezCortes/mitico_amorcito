import React from 'react';
import { Link } from 'react-router-dom';
import esferaImg from '../../imagenes/esferas.jpg';
import adornoImg from '../../imagenes/adorno.jpg';
import santaImg from '../../imagenes/santa.jpg';
import arbolImg from '../../imagenes/arbol.jpg'; // Agregado para decoración adicional
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
      <img 
        src={adornoImg} 
        alt="Adorno navideño" 
        className="muerdago-img"
      />
      
      {/* Contenido principal */}
      <div className="menu-content">
        <h1 className="menu-title">¡Bienvenido a nuestro Menú Navideño!</h1>
        <p className="menu-subtitle">
          Elige entre nuestras opciones de <strong>Desayunos</strong> o <strong>Comida/Cena</strong>.
        </p>
        <p className="menu-customize">
          ¿No encuentras lo que necesitas? Personaliza tu propio paquete según tus necesidades y presupuesto.
        </p>
        
        {/* Botones para seleccionar el menú */}
        <div className="menu-buttons-container">
          <Link to="/menu-desayunos" className="menu-button">Menú de Desayunos</Link>
          <Link to="/menu-comida" className="menu-button">Menú de Comida/Cena</Link>
        </div>
      </div>
      
      {/* Decoraciones en la parte inferior */}
      <div className="decoracion-inferior">
        <img 
          src={santaImg} 
          alt="Santa decorativo" 
          className="santa-img"
        />
        <img 
          src={arbolImg} 
          alt="Árbol navideño decorativo" 
          className="arbol-img"
        />
      </div>
    </div>
  );
};

export default MenuNavideno;