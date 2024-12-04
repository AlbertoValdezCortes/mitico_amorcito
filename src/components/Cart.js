import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css';
import fondoCarrito from '../imagenes/fondoCarrito.jpg';

function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity, removeProduct, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-page">
      {/* Encabezado con la imagen de fondo */}
      <div className="cart-header" style={{ backgroundImage: `url(${fondoCarrito})` }}>
        <h1>Tu Carrito de Compras</h1>
        <p>Revisa los productos seleccionados y ajusta tus cantidades antes de finalizar tu compra.</p>
      </div>

      <div className="cart-container">
        <h2>Resumen del Carrito</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>{item.name} - ${item.price} x {item.quantity}</div>
              <button onClick={() => incrementQuantity(item.id)} className="increment-btn">+</button>
              <button onClick={() => decrementQuantity(item.id)} className="decrement-btn">-</button>
              <button onClick={() => removeProduct(item.id)} className="remove-btn">Eliminar</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default Cart;
