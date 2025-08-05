import bistec from "../../../assets/images/bistec.jpg";
import bowlDeAvena from "../../../assets/images/bowlDeAvena.jpg";
import cheeseSandwich from "../../../assets/images/cheeseSandwich.jpg";
import chilaquilesMole from "../../../assets/images/chilaquilesMole.jpg";
import chilaquilesVerdes from "../../../assets/images/chilaquilesVerdes.png";
import enchiladasSuizas from "../../../assets/images/enchiladasSuizas.jpg";
import huevosRevueltos from "../../../assets/images/huevosRevueltos.jpg";
import molletes from "../../../assets/images/molletes.jpg";
import panFrances from "../../../assets/images/panFrances.jpg";
import quesadillasFritas from "../../../assets/images/quesadillasFritas.jpg";
import toast from "../../../assets/images/toast.jpg";

const desayunos = [
  {
    subtitulo: "Chilaquiles",
    imagen: chilaquilesVerdes,
    platillos: [
      {
        nombre: "Chilaquiles Verdes/Rojos/Divorciados",
        descripcion:
          "Con crema, queso y cebolla morada. Acompañado de frijoles negros refritos.",
        precio: "$75",
      },
      {
        nombre: "Chilaquiles Míticos",
        descripcion:
          "Con crema, queso y cebolla morada. Acompañado de frijoles negros refritos. Morita, chipotle, poblanos o con mole.",
        precio: "$95",
      },
    ],
  },
  {
    subtitulo: "Delicias Dulces",
    imagen: panFrances,
    platillos: [
      {
        nombre: "Pan Francés",
        descripcion: "Con helado de vainilla y fruta.",
        precio: "$95",
      },
      {
        nombre: "Hot Cakes",
        descripcion: "Con lechera, miel maple o cajeta.",
        precio: "$95",
      },
      {
        nombre: "Waffles",
        descripcion: "Con fruta y helado de vainilla.",
        precio: "$95",
      },
    ],
  },
  {
    subtitulo: "Enchiladas",
    imagen: enchiladasSuizas,
    platillos: [
      {
        nombre: "Enmoladas",
        descripcion:
          "Orden de 3 piezas, rellenas de pollo, bañadas con mole almendrado, crema, queso y cebolla.",
        precio: "$135",
      },
      {
        nombre: "Enchiladas Suizas",
        descripcion: "Orden de 3 piezas, rellenas de pollo y gratinadas.",
        precio: "$135",
      },
    ],
  },
  {
    subtitulo: "Extras",
    imagen: chilaquilesMole,
    platillos: [
      {
        nombre: "Chilaquiles",
        descripcion: "Porción extra de chilaquiles.",
        precio: "$30",
      },
      {
        nombre: "Frijoles",
        descripcion: "Frijoles negros refritos.",
        precio: "$25",
      },
      { nombre: "Huevo", descripcion: "Huevo al gusto.", precio: "$25" },
      { nombre: "Pollo", descripcion: "Porción de pollo.", precio: "$30" },
      {
        nombre: "Chicharrón",
        descripcion: "Chicharrón prensado.",
        precio: "$35",
      },
      {
        nombre: "Aguacate",
        descripcion: "Rebanadas de aguacate fresco.",
        precio: "$30",
      },
      { nombre: "Chorizo", descripcion: "Porción de chorizo.", precio: "$30" },
      { nombre: "Tocino", descripcion: "Porción de tocino.", precio: "$45" },
    ],
  },
  {
    subtitulo: "Guisos",
    imagen: bistec,
    platillos: [
      {
        nombre: "Chicharrón en Salsa Verde",
        descripcion:
          "Chicharrón prensado en salsa verde acompañado con frijoles negros.",
        precio: "$130",
      },
      {
        nombre: "Bistec a la Mexicana",
        descripcion:
          "Carne de res en salsa de tomate, cebolla, cilantro y un toque de serrano. Acompañada de frijoles negros.",
        precio: "$130",
      },
    ],
  },
  {
    subtitulo: "Huevos",
    imagen: huevosRevueltos,
    platillos: [
      {
        nombre: "Machaca con Huevo",
        descripcion:
          "'Machaca sonorense' con jitomate, cebolla, chile cuaresmeño, acompañada con frijoles negros.",
        precio: "$120",
      },
      {
        nombre: "Huevos Revueltos",
        descripcion: "Elegir ingredientes. Acompañados de frijoles negros.",
        precio: "$80",
      },
      {
        nombre: "Huevos Estrellados",
        descripcion:
          "Naturales, rancheros o divorciados, acompañados con frijoles negros.",
        precio: "$80",
      },
      {
        nombre: "Omellet",
        descripcion:
          "Con queso e ingredientes a elegir. Acompañado de frijoles negros y ensalada de la casa.",
        precio: "$95",
      },
      {
        nombre: "Huevos Turcos",
        descripcion:
          "Pimientos y cebolla salteados, con tomate y queso. Acompañados con ensalada de la casa. Extras para huevos revueltos y omellet: mexicana, chorizo, champiñón, jamón, tocino, espinaca.",
        precio: "$105",
      },
    ],
  },
  {
    subtitulo: "Molletes",
    imagen: molletes,
    platillos: [
      {
        nombre: "Molletes Salados",
        descripcion: "Con frijoles negros, costra de queso y salsa mexicana.",
        precio: "$85",
      },
      {
        nombre: "Molletes con Chorizo o Chicharrón",
        descripcion: "Con frijoles negros, costra de queso y salsa mexicana.",
        precio: "$95",
      },
      {
        nombre: "Molletes Dulces",
        descripcion:
          "Con mantequilla. Elige tu ingrediente adicional: azúcar con canela, mermelada de frutos rojos, cajeta o lechera.",
        precio: "$75",
      },
    ],
  },
  {
    subtitulo: "Paquetes",
    imagen: bowlDeAvena,
    platillos: [
      {
        nombre: "Paquete Clásico",
        descripcion:
          "Chilaquiles rojos, verdes o divorciados, café de refill (americano o de olla) y jugo (naranja, toronja, zanahoria o betabel).",
        precio: "$155",
      },
      {
        nombre: "Paquete Mexicano",
        descripcion:
          "Bistec a la mexicana o chicharrón en salsa verde, café de refill (americano o de olla).",
        precio: "$155",
      },
      {
        nombre: "Paquete Infantil #1",
        descripcion:
          "Huevo con jamón. Incluye vaso con leche y chocomilk chico.",
        precio: "$65",
      },
      {
        nombre: "Paquete Infantil #2",
        descripcion:
          "2 piezas de hotcakes. Incluye vaso con leche y chocomilk chico.",
        precio: "$55",
      },
    ],
  },
  {
    subtitulo: "Quesadillas",
    imagen: quesadillasFritas,
    platillos: [
      {
        nombre: "Quesadillas a la Plancha",
        descripcion:
          "Orden de 3 piezas, con tortilla de maíz y queso, con frijoles negros.",
        precio: "$75",
      },
      {
        nombre: "Quesadillas Fritas",
        descripcion:
          "Orden de 3 piezas, rellenas de queso, naturales o con chicharrón prensado. Bañadas en salsa verde, con crema y queso.",
        precio: "$95",
      },
    ],
  },
  {
    subtitulo: "Sándwiches",
    imagen: cheeseSandwich,
    platillos: [
      {
        nombre: "Cheese Sandwich",
        descripcion:
          "Aderezo de mostaza, aderezo césar, jamón de pavo, pimientos y fondue de quesos.",
        precio: "$145",
      },
      {
        nombre: "Sandwich Roast Beef",
        descripcion:
          "Mostaneza, col morada, pepinillo, jalapeños, queso y aderezo de chiles.",
        precio: "$180",
      },
      {
        nombre: "Sandwich Milanesa Cerdo",
        descripcion:
          "Lechuga, pepino y col morada, sal y aderezo de chiles encurtidos.",
        precio: "$145",
      },
    ],
  },
  {
    subtitulo: "Toast",
    imagen: toast,
    platillos: [
      {
        nombre: "Portobello Capresse",
        descripcion:
          "Mozzarella fresco y tomate cherry con albahaca y balsámico sobre portobello.",
        precio: "$90",
      },
      {
        nombre: "Toast Mítico",
        descripcion:
          "Con tocino, miel con d'jon, reducción de balsámico y huevo pochado.",
        precio: "$140",
      },
      {
        nombre: "Toast Pesto",
        descripcion:
          "Jamón serrano, cherry, queso burrata, albahaca, ajo y pesto.",
        precio: "$160",
      },
      {
        nombre: "Toast Serrano",
        descripcion: "Con queso burrata, pera, jamón serrano y miel.",
        precio: "$155",
      },
    ],
  },
];

export default desayunos;
