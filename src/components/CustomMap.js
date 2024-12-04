import React, { useEffect } from 'react';
import iconoUbicacion from '../imagenes/iconoUbicacion.png';

function CustomMap() {
  useEffect(() => {
    // Función que inicializa el mapa
    window.initMap = function () {
      const location = { lat: 20.722030104695214, lng: -103.37275350173954 };

      // Verificamos si el elemento del mapa está disponible en el DOM
      const mapElement = document.getElementById('map');
      if (!mapElement) {
        console.error('Elemento del mapa no está disponible.');
        return;
      }

      // Verificamos si 'google.maps' está disponible antes de inicializar el mapa
      if (typeof window.google === 'undefined' || typeof window.google.maps === 'undefined') {
        console.error('Google Maps API no está disponible');
        return;
      }

      // Inicializamos el mapa
      const map = new window.google.maps.Map(mapElement, {
        zoom: 18,
        center: location,
      });

      // Creamos el marcador
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Mítico Restaurant',
        icon: {
          url: iconoUbicacion,
          scaledSize: new window.google.maps.Size(200, 200), // Tamaño del ícono
        },
      });

      // Evento para abrir Google Maps al hacer clic en el ícono
      marker.addListener('click', () => {
        window.open('https://maps.app.goo.gl/fbbruPiKbw9A5u419', '_blank');
      });
    };

    // Comprobamos si el script de Google Maps ya está cargado
    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJKar21Ekeh-nT96foXuYrSFnriXU1XZw&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      // Si el script ya está cargado, ejecutamos directamente la inicialización del mapa
      window.initMap();
    }

    // Limpieza cuando el componente se desmonta
    return () => {
      delete window.initMap; // Eliminamos la función global para evitar conflictos
    };
  }, []);

  return <div id="map" style={{ height: '450px', width: '100%' }}></div>;
}

export default CustomMap;