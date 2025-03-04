import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Gallery from './components/Gallery.js';
import Reservations from './components/Reservations.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import Inventario from './components/Inventario';
import InventarioInicio from "./components/InventarioInicio";
import Recetario from "./components/Recetario";
import CrearProducto from "./components/CrearProducto";
import ShoppingCart from './components/ShoppingCart.js';
import Login from './components/Login';
import logo from './imagenes/logo.png';
import { CartProvider } from './contexts/CartContext.js';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

// Importamos Firebase Authentication
import { auth } from "./firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    window.location.href = "/";
  };

  return (
    <CartProvider>
      <Router>
        <div className={`App ${["/inventario", "/inventario-inicio"].includes(window.location.pathname) ? "hide-navbar" : ""}`}>

          {/* Mostrar la barra de navegación en todas las páginas excepto en Inventario e InventarioInicio */}
          {!["/inventario", "/inventario-inicio"].includes(window.location.pathname) && (
            <nav className={`navbar ${scrolled ? 'navbar-small' : ''}`}>
              <div className="logo-container">
                <Link to="/">
                  <img src={logo} alt="Logo" className="logo" />
                </Link>
              </div>

              <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/about" onClick={toggleMenu}>Nosotros</Link></li>
                <li><Link to="/gallery" onClick={toggleMenu}>Galería</Link></li>
                <li><Link to="/menu" onClick={toggleMenu}>Menú</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
                <li><Link to="/reservations" onClick={toggleMenu}>Reservar</Link></li>
              </ul>

              <div className="social-icons">
                <a href="https://www.facebook.com/mitico.amorcito" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/mitico_amorcito/?next=%2Falberto.valdez.9081%2F#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@miticoamorcito" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                <a href="https://wa.me/523312937187" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://maps.app.goo.gl/Jts5FRQAdde51YdD9" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /></a>
              </div>
            </nav>
          )}

          {/* Mostrar el botón de cerrar sesión solo en Inventario */}
          {user && window.location.pathname === "/inventario" && (
            <div className="logout-container">
              <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}

          {/* Rutas de la aplicación */}
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/inventario-inicio" element={<InventarioInicio />} />
                <Route path="/recetario" element={<Recetario />} />
                <Route path="/crear-producto" element={<CrearProducto />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
              </>
            ) : (
              <Route path="*" element={<Login setUser={setUser} />} />
            )}
          </Routes>

          {/* Mostrar el carrito de compras solo si NO está en Inventario o InventarioInicio */}
          {!["/inventario", "/inventario-inicio"].includes(window.location.pathname) && (
            <Link to="/shopping-cart" className="floating-cart-button">🛒</Link>
          )}

          <footer className="footer">© 2024 MÍTICO AMORCITO. Todos los derechos reservados.</footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;