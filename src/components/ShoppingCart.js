import React from 'react';
import Cart from './Cart';  // Asegúrate de que Cart esté en la misma carpeta

function ShoppingCartPage() {  // Cambia el nombre del componente
  return (
    <div className="cart-container">
            <Cart />  {/* Aquí renderizamos el componente Cart */}
    </div>
  );
}

export default ShoppingCartPage;
