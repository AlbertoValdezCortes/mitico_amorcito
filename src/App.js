import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Gallery from './components/Gallery.js';
import Reservations from './components/Reservations.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import ShoppingCart from './components/ShoppingCart.js';import logo from './imagenes/logo.png';
import { CartProvider } from './contexts/CartContext.js';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <CartProvider>
      <Router>
        <div className="App">
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
              {/* Ruta oculta: el Menú Navideño no se muestra en el menú de navegación */}
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>

          <Link to="/shopping-cart" className="floating-cart-button">🛒</Link>
          <footer className="footer">© 2024 MÍTICO AMORCITO. Todos los derechos reservados.</footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;