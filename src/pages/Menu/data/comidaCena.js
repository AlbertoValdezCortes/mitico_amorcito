import bistec from "../../../assets/images/bistec.jpg";
import crepa_dulce from "../../../assets/images/crepa_dulce.jpg";
import crepa_salada from "../../../assets/images/crepa_salada.jpg";
import dogos from "../../../assets/images/dogos.jpg";
import chopSalad from "../../../assets/images/chopSalad.jpg";
import papasMiticas from "../../../assets/images/papasMiticas.jpg";
import hamburguesaAtun from "../../../assets/images/hamburguesaAtun.jpg";
import paninis from "../../../assets/images/paninis.jpg";
import pitaGarbanzo from "../../../assets/images/pitaGarbanzo.png";
import sandwichRoastBeef from "../../../assets/images/sandwichRoastBeef.png";
import sopa_tortilla from "../../../assets/images/sopa_tortilla.jpg";

const comidaCena = [
  {
    categoria: "A la Plancha",
    imagen: bistec,
    platillos: [
      {
        nombre: "Salmón",
        descripcion:
          "A la mantequilla y hierbas finas, con ensalada y arroz blanco.",
        precio: "$255",
      },
      {
        nombre: "Pechuga de Pollo",
        descripcion:
          "Asada a la plancha acompañada de ensalada y arroz blanco.",
        precio: "$140",
      },
    ],
  },
  {
    categoria: "Crepas Dulces",
    imagen: crepa_dulce,
    platillos: [
      {
        nombre: "Toulouse",
        descripcion:
          "Plátano macho caramelizado, crema de vainilla, rompope, nuez y helado de vainilla.",
        precio: "$119",
      },
      {
        nombre: "Marsella",
        descripcion:
          "Manzana caramelizada, crema de manzana con canela, almendra tostada y helado de vainilla.",
        precio: "$119",
      },
      {
        nombre: "Brujas",
        descripcion:
          "Frutos rojos, queso de cabra, almendra tostada y helado de vainilla.",
        precio: "$119",
      },
    ],
  },
  {
    categoria: "Crepas Saladas",
    imagen: crepa_salada,
    platillos: [
      {
        nombre: "Petra",
        descripcion:
          "Pollo guisado en chipotle tatemado y champiñón, queso manchego, acompañada de ensalada.",
        precio: "$129",
      },
      {
        nombre: "Viena",
        descripcion:
          "Jamón de pavo, queso manchego, fresa, aderezo de chipotle tatemado, acompañada de ensalada.",
        precio: "$129",
      },
      {
        nombre: "Sevilla",
        descripcion:
          "Queso manchego, queso philadelphia, queso de cabra, acompañada de ensalada.",
        precio: "$129",
      },
    ],
  },
  {
    categoria: "Dogos",
    imagen: dogos,
    platillos: [
      {
        nombre: "Dogo Mítico",
        descripcion:
          "Salchicha ahumada de res, mayonesa, guacamole, tocino, panela, coronado con pico de gallo.",
        precio: "$119",
      },
      {
        nombre: "Dogo Especial",
        descripcion:
          "Salchicha ahumada de res, aderezo de chiles encurtidos y papa paja.",
        precio: "$99",
      },
    ],
  },
  {
    categoria: "Ensaladas",
    imagen: chopSalad,
    platillos: [
      {
        nombre: "Mythical Salad",
        descripcion:
          "Lechuga, zanahoria, arándano, fresa, nuez caramelizada, manzana, queso de cabra y vinagreta de miel con mostaza.",
        precio: "$159",
      },
      {
        nombre: "Chop Salad",
        descripcion:
          "Lechuga, pollo empanizado, tocino, jitomate, tortilla crocante, parmesano, aguacate y aderezo César.",
        precio: "$159",
      },
    ],
  },
  {
    categoria: "Entradas",
    imagen: papasMiticas,
    platillos: [
      {
        nombre: "Fundido Amorcito",
        descripcion:
          "Papas a la francesa, bechamel de manchego, chile poblano, chorizo y aderezo de chipotle.",
        precio: "$139",
      },
      {
        nombre: "Papas Míticas",
        descripcion:
          "Papas a la francesa bañadas en vinagreta de aliolí, parmesano, tocino y perejil.",
        precio: "$139",
      },
      {
        nombre: "Tequeños",
        descripcion: "6 dedos de mozzarella en hojaldre con salsa pomodoro.",
        precio: "$119",
      },
      {
        nombre: "Elotitos con Chipotle",
        descripcion:
          "6 trozos de elote, aderezo de chipotle, queso fresco y chile en polvo.",
        precio: "$89",
      },
      {
        nombre: "Guacamole",
        descripcion: "Con jitomate, cebolla, cilantro y cuaresmeño.",
        precio: "$79",
      },
      {
        nombre: "Chiles Tequeños",
        descripcion: "2 chiles cuaresmeños con hojaldre, jamón y queso gouda.",
        precio: "$89",
      },
    ],
  },
  {
    categoria: "Guisos",
    imagen: bistec,
    platillos: [
      {
        nombre: "Chicharrón en Salsa Verde",
        descripcion: "Chicharrón prensado en salsa verde con frijoles negros.",
        precio: "$135",
      },
      {
        nombre: "Bistec a la Mexicana",
        descripcion:
          "Carne de res en salsa de tomate, cebolla, cilantro y cuaresmeño, con frijoles negros.",
        precio: "$135",
      },
    ],
  },
  {
    categoria: "Hamburguesas",
    imagen: hamburguesaAtun,
    platillos: [
      {
        nombre: "Clásica",
        descripcion:
          "Carne de res, mayonesa, cheddar, lechuga, jitomate, cebolla y tocino.",
        precio: "$149",
      },
      {
        nombre: "Mendiola Special",
        descripcion:
          "Milanesa de cerdo empanizada con panko, lechuga, pepino, col morada y aderezo de chipotle.",
        precio: "$149",
      },
      {
        nombre: "Cheese",
        descripcion:
          "Carne de res, queso cheddar, cebolla caramelizada, pepinillos, lechuga y aderezo de chipotle.",
        precio: "$149",
      },
      {
        nombre: "Texas",
        descripcion:
          "Carne de res, cheddar, chipotle, tocino, aros de cebolla, BBQ, lechuga.",
        precio: "$189",
      },
      {
        nombre: "Guacamole",
        descripcion:
          "Carne de res, cheddar, chipotle, cebolla caramelizada, guacamole, jitomate y lechuga.",
        precio: "$189",
      },
      {
        nombre: "Norteña",
        descripcion:
          "Carne de res, chipotle, guacamole, pimientos confitados, costra de queso, cebolla caramelizada, bechamel de manchego y chorizo.",
        precio: "$199",
      },
      {
        nombre: "Honolulu",
        descripcion:
          "Carne de res, bechamel de manchego, piña caramelizada, aderezo de piña con habanero, tocino, cebolla, jitomate y lechuga.",
        precio: "$189",
      },
      {
        nombre: "Pastor",
        descripcion:
          "Carne de res, chipotle, costra de queso, piña caramelizada, adobo al pastor, cilantro y cebolla morada.",
        precio: "$189",
      },
      {
        nombre: "Chicken Chipotle",
        descripcion:
          "Pollo empanizado en chipotle, bechamel de manchego, guacamole, tocino, jitomate y lechuga.",
        precio: "$189",
      },
      {
        nombre: "Chicken Buffalo",
        descripcion:
          "Pollo empanizado en buffalo, ranch, bechamel de manchego, jitomate y lechuga.",
        precio: "$189",
      },
      {
        nombre: "Portobello",
        descripcion:
          "Carne de res, portobello en pesto, pimiento rostizado, queso de cabra y jitomate asado.",
        precio: "$189",
      },
      {
        nombre: "Camarón",
        descripcion:
          "Camarón en mantequilla y chipotle, costra de queso, guacamole, tocino, chipotle, jitomate y lechuga.",
        precio: "$199",
      },
    ],
  },
  {
    categoria: "Paninis",
    imagen: paninis,
    platillos: [
      {
        nombre: "Pollo a la Parmesana",
        descripcion:
          "Baguette con pollo empanizado, pomodoro, parmesano, lechuga y aguacate.",
        precio: "$169",
      },
      {
        nombre: "Pollo al Chipotle",
        descripcion:
          "Baguette con pollo empanizado, chipotle, manchego, lechuga, jitomate y aguacate.",
        precio: "$169",
      },
      {
        nombre: "Portobello",
        descripcion:
          "Baguette con portobello en pesto, pimiento confitado, lechuga, jitomate y queso de cabra.",
        precio: "$169",
      },
      {
        nombre: "Chorizo Español",
        descripcion:
          "Baguette con frijoles negros, manchego, chipotle, lechuga y aguacate.",
        precio: "$169",
      },
    ],
  },
  {
    categoria: "Postres",
    imagen: pitaGarbanzo,
    platillos: [
      {
        nombre: "Postre del día",
        descripcion: "Verificar existencias del día.",
        precio: "$85",
      },
      {
        nombre: "Jericalla",
        descripcion: "Jericalla tradicional.",
        precio: "$45",
      },
    ],
  },
  {
    categoria: "Sandwich",
    imagen: sandwichRoastBeef,
    platillos: [
      {
        nombre: "Sandwich Roast Beef",
        descripcion:
          "Mostaneza, col morada, pepinillo, jalapeños, queso y aderezo de chiles encurtidos.",
        precio: "$180",
      },
    ],
  },
  {
    categoria: "Snacks",
    imagen: papasMiticas,
    platillos: [
      {
        nombre: "Papas a la Francesa",
        descripcion: "300 grs de papas fritas.",
        precio: "$79",
      },
      {
        nombre: "Papas Gajo",
        descripcion: "300 grs de papas cortadas en gajos con paprika.",
        precio: "$79",
      },
      {
        nombre: "Aros de Cebolla",
        descripcion: "10 piezas empanizadas y fritas.",
        precio: "$79",
      },
      {
        nombre: "Dedos de Queso",
        descripcion: "Orden de 8 piezas.",
        precio: "$129",
      },
      {
        nombre: "Boneless",
        descripcion: "Orden de 320 grs. Elige tu salsa.",
        precio: "$149",
      },
      {
        nombre: "Tenders",
        descripcion: "Orden de 320 grs. Elige tu salsa.",
        precio: "$149",
      },
      {
        nombre: "Alitas",
        descripcion:
          "Elige cantidad y salsa favorita. 5 piezas $89, 10 piezas $149, 20 piezas $249.",
        precio: "",
      },
      {
        nombre: "Salsas",
        descripcion: "Buffalo, Cajún, BBQ Hot, Mango Habanero, Ajo Parmesano.",
        precio: "",
      },
    ],
  },
  {
    categoria: "Sopas",
    imagen: sopa_tortilla,
    platillos: [
      {
        nombre: "Sopa del Día",
        descripcion: "Verificar existencias del día.",
        precio: "$79",
      },
    ],
  },
];

export default comidaCena;
