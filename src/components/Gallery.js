import React from 'react';
import './Gallery.css';
import galleryHeaderImage from '../imagenes/interior.jpg';

// Importación de las imágenes de los platillos
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

const images = [
  bowlDeAvena, ambos, panFrances, waffles, panaderia, tartaleta, molletes1, molletes2,
  chilaMole, chilaVerdes, huevosRevueltos, omellet, enchiladasSuizas, enmoladas,
  cheeseSandwich, mila, chispas, galletas, toast, toastMitico, quesadillasFritas,
  quesadillas, bistec, bistecMexicana
];

function Gallery() {
  return (
    <div className="gallery-container">
      {/* Encabezado de la galería con imagen de fondo */}
      <div className="gallery-header" style={{ backgroundImage: `url(${galleryHeaderImage})` }}>
        <h1>GALERÍA</h1>
        <p>De la vista nace el amor. Explora nuestra colección visual y déjate enamorar por cada detalle.</p>
      </div>

      {/* Cuadrícula de imágenes */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Galería ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;