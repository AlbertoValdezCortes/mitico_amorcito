import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Menu from "./pages/Menu/Menu"; // ← Ruta del Menú
import NovedadesDestacados from "./pages/NovedadesDestacados"; // ← Ruta de Novedades

function App() {
  const [vistaMenu, setVistaMenu] = useState("desayunos"); // Estado elevado

  return (
    <Router>
      <div className="App">
        {/* Fondo animado */}
        <div
          className={`app-background ${
            vistaMenu === "comida" ? "modo-noche" : "modo-dia"
          }`}
        ></div>

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="gallery">
                  <Gallery />
                </section>
                <section id="reservations">
                  <Reservations />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route
            path="/menu"
            element={<Menu setVistaGlobal={setVistaMenu} />}
          />
          <Route path="/novedades" element={<NovedadesDestacados />} />
        </Routes>

        {/* Botón Flotante del Menú */}
        <a href="/menu" className="menu-float-button">
          🍽 Ver Menú Completo
        </a>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
