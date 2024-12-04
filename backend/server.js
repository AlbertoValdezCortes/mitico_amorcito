const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios"); // Necesario para hacer la validación de reCAPTCHA

const app = express();
const port = 5000; // Puerto del servidor

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: ["https://miticoamorcito.com", "https://www.miticoamorcito.com"] }));

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Por ejemplo, Gmail
  auth: {
    user: "administracion@miticoamorcito.com", // Reemplaza con tu correo
    pass: "aS2)6YjX7BZ39m", // Reemplaza con tu contraseña o App Password
  },
});

// Ruta para enviar correos con validación de reCAPTCHA
app.post("/send-email", async (req, res) => {
  const { nombre, telefono, email, mensaje, recaptchaToken } = req.body;

  // Verificar el token de reCAPTCHA
  try {
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: "6Le_mZEqAAAAAOi2vkhJLGpdmhlXjvZwwsgyAxKj", // Reemplaza con tu clave secreta de reCAPTCHA
          response: recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).send("Error en la validación de reCAPTCHA");
    }

    // Configuración del correo
    const mailOptions = {
      from: email,
      to: "administracion@miticoamorcito.com", // Reemplaza con tu correo de destino
      subject: "Nuevo Mensaje de Contacto",
      text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Error al enviar el correo");
      } else {
        console.log("Correo enviado: " + info.response);
        return res.status(200).send("Correo enviado exitosamente");
      }
    });
  } catch (error) {
    console.error("Error al validar reCAPTCHA:", error);
    return res.status(500).send("Error al validar reCAPTCHA");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});