// src/pages/Reservations.js
import React, { useState } from "react";
import "../styles/Reservations.css";
import fondoReserva from "../assets/images/fondoReserva.jpg";
import croquis from "../assets/images/croquis.jpg";

const Reservations = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    personas: "",
    fecha: "",
    hora: "",
  });

  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mrbpaadg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          personas: "",
          fecha: "",
          hora: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo enviar la reserva.");
    }
  };

  return (
    <section className="reservations-section" id="reservas">
      <div
        className="reservations-hero"
        style={{ backgroundImage: `url(${fondoReserva})` }}
      >
        <div className="overlay">
          <h2>Reserva tu espacio</h2>
          <p>Completa el formulario para asegurar tu mesa.</p>
        </div>
      </div>

      <form className="reservations-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Teléfono</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Número de personas</label>
        <input
          type="number"
          name="personas"
          value={formData.personas}
          onChange={handleChange}
          required
          min="1"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          min={today}
          onChange={handleChange}
          required
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={formData.hora}
          min="08:00"
          max="22:00"
          onChange={handleChange}
          required
        />

        <button type="submit" className="button-reservar">
          Reservar
        </button>

        {success && (
          <p className="success-message">¡Tu reservación ha sido enviada!</p>
        )}
      </form>

      <div className="croquis-wrapper">
        <img src={croquis} alt="Croquis del restaurante" />
      </div>
    </section>
  );
};

export default Reservations;
