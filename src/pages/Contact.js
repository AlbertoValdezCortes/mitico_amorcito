import React, { useState } from "react";
import "../styles/Contact.css";
import fondoContacto from "../assets/images/ambienteInterior.jpg";
import terraza from "../assets/images/ambienteTerraza.jpg";
import barra from "../assets/images/barra.jpg";
import { FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzeddbl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSent(true);
        form.reset();
        setTimeout(() => setFormSent(false), 6000);
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div
        className="contact-header animated-header"
        style={{ backgroundImage: `url(${fondoContacto})` }}
      >
        <h1>MANTENTE EN CONTACTO</h1>
        <p>
          Para nosotros, tu opinión es muy importante. ¡Contáctanos y cuéntanos
          tu experiencia!
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form animated-form" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Escribe tu nombre"
          />

          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="(00) 0000 0000"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="correo@ejemplo.com"
          />

          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            required
            placeholder="Escribe aquí tu mensaje"
          ></textarea>

          <button type="submit">Enviar</button>

          {formSent && (
            <p className="contact-message success-message">
              <FaCheckCircle
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              ¡Gracias! Tu mensaje ha sido enviado con éxito.
            </p>
          )}
        </form>

        <div className="contact-gallery fade-in">
          {[terraza, barra, fondoContacto].map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img} loading="lazy" alt={`Vista ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
