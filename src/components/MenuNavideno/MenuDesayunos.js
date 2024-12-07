import React from 'react';
import './menunavideno.css';

const MenuDesayunos = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Paquetes Navideños: Desayunos</h1>
      <p className="menu-subtitle">
        ¡Empieza tu mañana con nuestro sabor navideño!
      </p>
      <div className="packages-container">
        {/* Paquete 1 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #1</h3>
          <ul className="package-list">
            <li>HUEVOS AL GUSTO: Revueltos o estrellados, con frijoles</li>
            <li>CHILAQUILES: Rojos o verdes, con frijoles</li>
            <li>MOLLETES: Con frijoles y salsa mexicana</li>
            <li>QUESADILLAS A LA PLANCHA: Bañadas en salsa verde, con frijoles</li>
            <li>HOT CAKES</li>
            <li>PAN FRANCÉS</li>
          </ul>
          <p className="package-price">$160 por persona</p>
        </div>

        {/* Paquete 2 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #2</h3>
          <ul className="package-list">
            <li>CHILAQUILES MÍTICOS: Con pollo o huevo, elige tu salsa.</li>
            <li>OMELLETE: Elige tus ingredientes.</li>
            <li>PORTOBELLO CAPRESSE: Mozzarella, cherry y balsámico.</li>
            <li>QUESADILLAS FRITAS: Con salsa verde, queso y crema.</li>
            <li>MACHACA CON HUEVO: Con jitomate, cebolla, cilantro y pimiento.</li>
            <li>BOWL DE AVENA</li>
          </ul>
          <p className="package-price">$245 por persona</p>
        </div>

        {/* Paquete 3 */}
        <div className="package-card">
          <h3 className="package-title">Paquete #3</h3>
          <ul className="package-list">
            <li>HUEVOS TURCOS: Pimientos y cebolla, tomate y queso.</li>
            <li>CHEESE SANDWICH: Jamón de pavo, pimientos y fondue.</li>
            <li>TOAST MÍTICO: Tocino, huevo pochado, miel con d'jon.</li>
            <li>ENCHILADAS SUIZAS: Con salsa verde, pollo, gratinadas.</li>
            <li>CHICHARRÓN EN SALSA VERDE: Chicharrón prensado, con frijoles.</li>
            <li>SANDWICH MILANESA CERDO: Milanesa empanizada, con ensalada.</li>
          </ul>
          <p className="package-price">$305 por persona</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDesayunos;