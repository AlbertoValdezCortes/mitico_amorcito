import React, { useState } from 'react';
import './Reservations.css';
import fondoReserva from '../imagenes/fondoReserva.jpg';
import croquis from '../imagenes/croquis.jpg';

const initialTables = [
  { id: 1, reserved: false, label: 'Mesa 1' },
  { id: 2, reserved: false, label: 'Mesa 2' },
  { id: 3, reserved: false, label: 'Mesa 3' },
  { id: 4, reserved: false, label: 'Mesa 4' },
  { id: 5, reserved: false, label: 'Mesa 5' },
  { id: 11, reserved: false, label: 'Mesa 11' },
  { id: 12, reserved: false, label: 'Mesa 12' },
  { id: 14, reserved: false, label: 'Mesa 14' },
  { id: 15, reserved: false, label: 'Mesa 15' },
  { id: 21, reserved: false, label: 'Mesa 21' },
  { id: 22, reserved: false, label: 'Mesa 22' },
  { id: 23, reserved: false, label: 'Mesa 23' },
  { id: 24, reserved: false, label: 'Mesa 24' },
  { id: 25, reserved: false, label: 'Mesa 25' },
  { id: 26, reserved: false, label: 'Mesa 26' },
  { id: 27, reserved: false, label: 'Mesa 27' },
];

function Reservations() {
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState('');
  const [reviews, setReviews] = useState([]);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [tables, setTables] = useState(initialTables);
  const [selectedTable, setSelectedTable] = useState(null);

  // Validación de teléfono
  const [phone, setPhone] = useState('');
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo números
    setPhone(value.slice(0, 10)); // Límite de 10 dígitos
  };

  // Validación de fecha
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reservationTime || reservationTime < '08:00' || reservationTime > '11:30') {
      alert('El horario de reservación es de 8:00am a 11:30am');
      return;
    }
    if (!reservationDate || !peopleCount || !phone || !selectedTable) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    alert(`Reserva confirmada para la ${selectedTable}.`);

    setTables((prevTables) =>
      prevTables.map((table) =>
        table.label === selectedTable ? { ...table, reserved: true } : table
      )
    );

    setReservationDate('');
    setReservationTime('');
    setPeopleCount('');
    setSelectedTable(null);
    setPhone('');
  };

  return (
    <div className="reservations-container">
      <div className="reservations-header" style={{ backgroundImage: `url(${fondoReserva})` }}>
        <h1>RESERVA TU ESPACIO</h1>
        <p>Selecciona una mesa y reserva tu lugar para disfrutar de una experiencia inolvidable con nosotros.</p>
      </div>

      <div className="reservations-content">
        {/* Formulario de Reservas */}
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" placeholder="Escribe aquí tu nombre" required />

          <label>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="10 dígitos"
            required
          />

          <label>Email:</label>
          <input type="email" placeholder="Escribe aquí tu correo" required />

          <label>Número de Personas:</label>
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            placeholder="Número de personas"
            min="1"
            required
          />

          <label>Fecha de la Reserva:</label>
          <input
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            min={today}
            required
          />

          <label>Hora de la Reserva:</label>
          <input
            type="time"
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
            min="08:00"
            max="11:30"
            required
          />
          
          {/* Listado de mesas con subtítulos */}
          <div className="table-section">
            <h3>Terraza</h3>
            <div className="table-row">
              {initialTables.slice(0, 5).map((table) => (
                <button
                  key={table.id}
                  className={`table-button ${table.reserved ? 'reserved' : ''} ${
                    selectedTable === table.label ? 'selected' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!table.reserved) setSelectedTable(table.label);
                  }}
                >
                  {table.reserved ? 'Reservada' : table.label}
                </button>
              ))}
            </div>

            <h3>Interior</h3>
            <div className="table-row">
              {initialTables.slice(5, 9).map((table) => (
                <button
                  key={table.id}
                  className={`table-button ${table.reserved ? 'reserved' : ''} ${
                    selectedTable === table.label ? 'selected' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!table.reserved) setSelectedTable(table.label);
                  }}
                >
                  {table.reserved ? 'Reservada' : table.label}
                </button>
              ))}
            </div>

            <h3>En la arena</h3>
            <div className="table-row">
              {initialTables.slice(9).map((table) => (
                <button
                  key={table.id}
                  className={`table-button ${table.reserved ? 'reserved' : ''} ${
                    selectedTable === table.label ? 'selected' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!table.reserved) setSelectedTable(table.label);
                  }}
                >
                  {table.reserved ? 'Reservada' : table.label}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="main-button">Reservar</button>
        </form>

        {/* Croquis de Mesas */}
        <div className="croquis-container">
          <img src={croquis} alt="Croquis del restaurante" className="croquis-image" />
        </div>

        {/* Sección de Opiniones */}
        <div className="reviews-section">
          <label>Opinión:</label>
          <textarea
            placeholder="Escribe aquí tu opinión sobre nuestra experiencia"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            required
          ></textarea>
          
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              if (!opinion || rating === 0) {
                alert('Por favor, ingresa tu opinión y calificación.');
                return;
              }
              setReviews([...reviews, { rating, opinion }]);
              setOpinion('');
              setRating(0);
            }}
            className="main-button"
          >
            Enviar Opinión
          </button>

          <h2>Opiniones de los Clientes</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-rating">
                  {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                </div>
                <p>{review.opinion}</p>
              </div>
            ))
          ) : (
            <p>No hay opiniones aún. Sé el primero en dejar una reseña.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservations;