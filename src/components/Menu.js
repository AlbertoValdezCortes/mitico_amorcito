import React, { useState, useContext } from 'react';
import './Menu.css';
import menuHeaderImage from '../imagenes/fondoMenu.jpg';
import { CartContext } from '../contexts/CartContext'; // Importamos el contexto del carrito

// Importación de imágenes para Desayunos
import bowlDeAvena from '../imagenes/bowlDeAvena.JPG';
import ambos from '../imagenes/ambos.png';
import panFrances from '../imagenes/panFrances.jpg';
import waffles from '../imagenes/Waffles.jpg';
import panaderia from '../imagenes/panaderia.jpg';
import tartaleta from '../imagenes/tartaleta.jpg';
import molletes1 from '../imagenes/molletes_.jpg';
import molletes2 from '../imagenes/molletes.jpg';
import chilaMole from '../imagenes/chilaMole.JPG';
import chilaVerdes from '../imagenes/chilaVerdes.png';
import huevosRevueltos from '../imagenes/huevosRevueltos.jpg';
import omellet from '../imagenes/omellet.jpg';
import enchiladasSuizas from '../imagenes/enchiladasSuizas.jpg';
import enmoladas from '../imagenes/enmoladas.jpg';
import cheeseSandwich from '../imagenes/cheeseSandwich.jpg';
import mila from '../imagenes/mila.jpg';
import chispas from '../imagenes/chispas.JPG';
import galletas from '../imagenes/galletas.png';
import toast from '../imagenes/toast.jpg';
import toastMitico from '../imagenes/toastMitico.JPG';
import quesadillasFritas from '../imagenes/quesadillasFritas.jpg';
import quesadillas from '../imagenes/quesadillas.jpg';
import bistec from '../imagenes/bistec.jpg';
import bistecMexicana from '../imagenes/bistecMexicana.jpg';

// Importación de imágenes para Comida/Cena
import entradasImg from '../imagenes/huevosRevueltos.jpg';
import hamburguesasImg from '../imagenes/enmoladas.jpg';
import snacksImg from '../imagenes/cheeseSandwich.jpg';
import ensaladasImg from '../imagenes/quesadillas.jpg';
import paninisImg from '../imagenes/quesadillas.jpg';
import postresImg from '../imagenes/panFrances.jpg';

// Menú de Desayunos
const desayunosSections = {
  "Para Comenzar": [
    { name: "Bowl de Avena", description: "Fruta de temporada, cottage, quinoa, chía y leche de almendra", price: 95 },
    { name: "Yogurt con Fruta", description: "Con granola, coco tostado o almendras", price: 80 },
  ],
  "Dulces": [
    { name: "Pan Francés", description: "Con helado de vainilla y fruta", price: 95 },
    { name: "Hot Cakes", description: "Con leche entera, miel de maple o cajeta", price: 95 },
    { name: "Waffles", description: "Con fruta y helado de vainilla", price: 95 },
  ],
  "Pan Dulce": [
    { name: "Pieza", description: "Pregunte a su mesero por las opciones del día", price: 45 },
  ],
  "Molletes": [
    { name: "Salados", description: "Con frijoles negros, costa de queso y salsa mexicana", price: 85 },
    { name: "Con chorizo o chicharrón", description: "Molletes con opción de chorizo o chicharrón", price: 95 },
    { name: "Dulces", description: "Con mantequilla, elige tu ingrediente adicional: azúcar con canela, mermelada de fresa, cajeta, lechecilla", price: 75 },
  ],
  "Chilaquiles": [
    { name: "Chilaquiles Rojos", description: "Con crema, queso y cebolla", price: 75 },
    { name: "Verdes / Divorciados", description: "Con crema, queso y cebolla", price: 95 },
    { name: "Chilaquiles Míticos", description: "Salsa a elegir: chipotle, morita, poblanos, mole", price: 95 },
  ],
  "Huevos": [
    { name: "Machaca con Huevo", description: "Con jitomate, cebolla, chile cuaresmeño, cilantro, pimientos y frijoles negros", price: 120 },
    { name: "Huevos al Gusto", description: "Revueltos con un ingrediente a elegir", price: 95 },
    { name: "Huevos Estrellados", description: "Naturales, rancheros o divorciados", price: 95 },
    { name: "Omelet", description: "Todos con queso, elige un ingrediente", price: 95 },
    { name: "Huevos Turcos", description: "Pimientos y cebolla salteados, con tomate y queso", price: 105 },
  ],
  "Enchiladas": [
    { name: "Enmoladas", description: "Orden de 3, rellenas de pollo", price: 135 },
    { name: "Enchiladas Suizas", description: "Orden de 3 rellenas de pollo y gratinadas", price: 135 },
  ],
  "Sandwich": [
    { name: "Cheese Sandwich", description: "Aderezo de mostaza, aderezo césar, jamón de pavo, pimientos y fondue de queso", price: 145 },
    { name: "Sandwich Roast Beef", description: "Mostaza, col morada, pepinillo, jalapeños y aderezo de chiles", price: 180 },
    { name: "Sandwich Milanesa", description: "Lechuga, pepino y col morada, limón, sal y aderezo de chiles encurtidos", price: 145 },
  ],
  "Galletas": [
    { name: "Galleta de Maicena", description: "Preparadas con mantequilla y leche", price: 35 },
    { name: "Galleta de Chispas de Chocolate", description: "Con chispas de chocolate", price: 45 },
  ],
  "Toast": [
    { name: "Portobello Capresse", description: "Mozzarella fresca y tomate cherry con albahaca a balsámico sobre portobello", price: 90 },
    { name: "Toast Mítico", description: "Con tocino, miel con dijon, reducción de balsámico y huevo pochado", price: 140 },
    { name: "Toast Pesto", description: "Con queso burrata, cherry, queso burrata, albahaca, ajo y pesto", price: 160 },
    { name: "Toast Serrano", description: "Con queso burrata, pera, jamón serrano y miel", price: 155 },
  ],
  "Quesadillas": [
    { name: "A la Plancha", description: "Orden de 3 piezas con tortilla de maíz y queso, con frijoles negros", price: 95 },
    { name: "Fritas", description: "Orden de 3 piezas, rellenas de queso, naturales o con chicharrón prensado", price: 95 },
  ],
  "Guisos": [
    { name: "Chicharrón en Salsa Verde", description: "Chicharrón prensado en salsa verde acompañado con frijoles negros", price: 130 },
    { name: "Bistec a la Mexicana", description: "Carne de res en salsa de tomate, cebolla, cilantro y un toque de picante. Acompañada de frijoles negros", price: 130 },
  ],
};

// Menú de Comida/Cena
const comidaCenaSections = {
  "Entradas": [
    { name: "Fundido Amorcito", description: "Queso manchego con chile poblano", price: 139 },
    { name: "Papas Míticas", description: "Papas a la francesa bañadas en vinagreta de ajo", price: 139 },
    { name: "Tequeños", description: "Dedos de mozarella con salsa pomodoro", price: 119 },
    { name: "Elotitos con Chipotle", description: "Elote amarillo con aderezo chipotle", price: 89 },
  ],
  "Hamburguesas": [
    { name: "Clásica", description: "Carne de res, mayonesa, queso cheddar, lechuga, jitomate", price: 149 },
    { name: "Mendiola Special", description: "Milanesa de cerdo, pepinillos y col morada", price: 189 },
    { name: "Cheese", description: "Carne de res, queso cheddar, cebolla caramelizada, pepinillos", price: 149 },
    { name: "Texas", description: "Carne de res, cheddar, tocino, BBQ y cebolla caramelizada", price: 189 },
    { name: "Guacamole", description: "Carne de res con queso cheddar, guacamole y lechuga", price: 189 },
    { name: "Honolulu", description: "Carne de res, queso manchego, piña caramelizada", price: 189 },
    { name: "Chile con Queso", description: "Carne de res con chiles rellenos de queso", price: 189 },
    { name: "Chilaquiles", description: "Con chilaquiles en salsa verde, frijoles refritos y queso", price: 189 },
    { name: "Pastor", description: "Carne de res, queso, piña caramelizada y adobo al pastor", price: 189 },
  ],
  "Snacks": [
    { name: "Papas a la Francesa", description: "300 grs de papas fritas", price: 79 },
    { name: "Aros de Cebolla", description: "10 piezas de aros empanizados y fritos", price: 149 },
    { name: "Alitas", description: "10 piezas con salsa a elegir", price: 129 },
  ],
  "Ensaladas": [
    { name: "Mythical Salad", description: "Lechuga, zanahoria, arándano, fresa, manzana", price: 159 },
    { name: "Chop Salad", description: "Lechuga, pechuga de pollo, tocino, jitomate", price: 159 },
  ],
  "Paninis": [
    { name: "Pollo a la Parmesana", description: "Focaccia con pechuga empanizada, parmesano y lechuga", price: 169 },
    { name: "Portobello", description: "Focaccia con portobello guisado, pesto y queso de cabra", price: 169 },
  ],
  "Postres": [
    { name: "Pastel Europeo", description: "Pastel de miel estilo europeo hecho en casa", price: 85 },
    { name: "Jericalla", description: "Postre tradicional de leche horneada", price: 85 },
  ],
};

// Imágenes por sección
const sectionImages = {
  desayunos: {
    "Para Comenzar": [bowlDeAvena, ambos],
    "Dulces": [panFrances, waffles],
    "Pan Dulce": [panaderia, tartaleta],
    "Molletes": [molletes1, molletes2],
    "Chilaquiles": [chilaMole, chilaVerdes],
    "Huevos": [huevosRevueltos, omellet],
    "Enchiladas": [enchiladasSuizas, enmoladas],
    "Sandwich": [cheeseSandwich, mila],
    "Galletas": [chispas, galletas],
    "Toast": [toast, toastMitico],
    "Quesadillas": [quesadillasFritas, quesadillas],
    "Guisos": [bistec, bistecMexicana],
  },
  comidaCena: {
    "Entradas": [entradasImg],
    "Hamburguesas": [hamburguesasImg],
    "Snacks": [snacksImg],
    "Ensaladas": [ensaladasImg],
    "Paninis": [paninisImg],
    "Postres": [postresImg],
  },
};

function Menu() {
  const [menuType, setMenuType] = useState("desayunos");
  const [activeSection, setActiveSection] = useState(Object.keys(desayunosSections)[0]);
  const { addToCart, cartItems } = useContext(CartContext);

  const switchMenu = (type) => {
    if (cartItems.length > 0 && cartItems[0].menuType !== type) {
      alert("No puedes mezclar productos de diferentes menús. Finaliza tu compra antes de cambiar.");
      return;
    }
    setMenuType(type);
    setActiveSection(Object.keys(type === "desayunos" ? desayunosSections : comidaCenaSections)[0]);
  };

  const currentMenu = menuType === "desayunos" ? desayunosSections : comidaCenaSections;
  const currentImages = sectionImages[menuType];

  return (
    <div className="menu-container">
      <div className="menu-header" style={{ backgroundImage: `url(${menuHeaderImage})` }}>
        <h1>{menuType === "desayunos" ? "DESAYUNOS" : "COMIDA / CENA"}</h1>
        <p>{menuType === "desayunos" ? "Horario: 7:45 AM - 1:00 PM" : "Horario: 1:00 PM - 10:30 PM"}</p>
      </div>

      <div className="menu-content-container">
        <div className="menu-type-selector">
          <button
            className={`menu-type-button ${menuType === "desayunos" ? "active" : ""}`}
            onClick={() => switchMenu("desayunos")}
          >
            Desayunos
            <span>7:45 AM - 1:00 PM</span>
          </button>
          <button
            className={`menu-type-button ${menuType === "comidaCena" ? "active" : ""}`}
            onClick={() => switchMenu("comidaCena")}
          >
            Comida / Cena
            <span>1:00 PM - 10:30 PM</span>
          </button>
        </div>

        <div className="menu-sidebar">
          <h2>{menuType === "desayunos" ? "DESAYUNOS" : "COMIDA / CENA"}</h2>
          {Object.keys(currentMenu).map((section) => (
            <div
              key={section}
              className={`menu-section ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </div>
          ))}
        </div>

        <div className="menu-content">
          <h3>{activeSection}</h3>
          <div className="menu-items">
            {currentMenu[activeSection].map((item) => (
              <div className="menu-item" key={item.name}>
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-description">{item.description}</div>
                <div className="menu-item-price">${item.price}</div>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart({ ...item, menuType })}
                >
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>

          <div className="menu-images">
            {currentImages[activeSection]?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${activeSection} platillo ${index + 1}`}
                className="menu-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;