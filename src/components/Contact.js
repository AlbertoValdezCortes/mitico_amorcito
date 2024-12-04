import React, { useState } from "react";
import "./Contact.css";
import fondoContacto from "../imagenes/fondoContacto.jpg";
import sobreNosotros from "../imagenes/sobreNosotros.jpg";
import terraza from "../imagenes/terraza.jpg";
import interior from "../imagenes/interior.jpg";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true); // Marcar como verificado si se completa reCAPTCHA
      setRecaptchaToken(value); // Guardar el token generado por reCAPTCHA
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (captchaVerified) {
      const formData = {
        nombre: event.target[0].value, // Captura el valor del input de Nombre
        telefono: event.target[1].value, // Captura el valor del input de Teléfono
        email: event.target[2].value, // Captura el valor del input de Email
        mensaje: event.target[3].value, // Captura el valor del textarea de Mensaje
        recaptchaToken: recaptchaToken, // Agrega el token de reCAPTCHA
      };

      try {
        const response = await fetch("https://miticoamorcito.com/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Formulario enviado con éxito.");
        } else {
          alert("Hubo un error al enviar el formulario.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el formulario.");
      }
    } else {
      alert("Por favor, completa el reCAPTCHA.");
    }
  };

  return (
    <div className="contact-container">
      <div
        className="contact-header"
        style={{ backgroundImage: `url(${fondoContacto})` }}
      >
        <h1>CONTACTO</h1>
        <p>
          Para nosotros, tu opinión es muy importante. ¡Contáctanos y cuéntanos
          tu experiencia!
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" placeholder="Escribe aquí" required />

          <label>Teléfono:</label>
          <input type="tel" placeholder="(00) 0000 0000" required />

          <label>Email:</label>
          <input type="email" placeholder="Escribe aquí" required />

          <label>Mensaje:</label>
          <textarea placeholder="Escribe aquí" required></textarea>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Le_mZEqAAAAADcptXR6YoB44Egr-wzLT1FGvnvb" // Reemplaza con tu clave del sitio
            onChange={handleCaptchaChange}
          />

          <button type="submit" disabled={!captchaVerified}>
            Enviar
          </button>
          <p className="contact-message">
            Para nosotros es muy importante tu opinión.
          </p>
        </form>

        <div className="contact-gallery">
          <div className="gallery-item">
            <img src={sobreNosotros} alt="Sobre Nosotros" />
          </div>
          <div className="gallery-item">
            <img src={terraza} alt="Terraza" />
          </div>
          <div className="gallery-item">
            <img src={interior} alt="Interior" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;