import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import logo from "../imagenes/logo.png";
import "./styles/InventarioInicio.css";

function InventarioInicio() {
    const navigate = useNavigate();
    const [productosBajoStock, setProductosBajoStock] = useState([]);

    useEffect(() => {
        const obtenerProductosBajoStock = async () => {
            let productosAlert = [];
            const categoriasSnapshot = await getDocs(collection(db, "Categorias"));

            for (let categoriaDoc of categoriasSnapshot.docs) {
                const productosSnapshot = await getDocs(collection(db, `Categorias/${categoriaDoc.id}/productos`));
                
                productosSnapshot.forEach((docSnap) => {
                    const producto = docSnap.data();
                    if (producto.inventarioFinal < producto.stockMinimo) {
                        productosAlert.push({
                            id: docSnap.id,
                            nombre: producto.nombre,
                            categoria: categoriaDoc.id,
                            inventarioFinal: producto.inventarioFinal,
                            stockMinimo: producto.stockMinimo
                        });
                    }
                });
            }

            setProductosBajoStock(productosAlert);
        };

        obtenerProductosBajoStock();
    }, []);

    return (
        <div className="inventario-inicio-container">
            {/* Mostrar alerta si hay productos con stock bajo */}
            {productosBajoStock.length > 0 && (
                <div className="alerta-stock">
                    <h3>⚠ Productos con stock bajo ⚠</h3>
                    <ul>
                        {productosBajoStock.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} ({producto.categoria}): {producto.inventarioFinal} unidades (mínimo {producto.stockMinimo})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <img src={logo} alt="Logo" className="inventario-logo" />
            <h2>INVENTARIOS BARRA</h2>
            <button onClick={() => navigate("/inventario")}>Capturar Inventario</button>
            <button onClick={() => navigate("/crear-producto")}>Crear Nuevo Producto</button>
            <button onClick={() => navigate("/recetario")}>Recetario</button>
        </div>
    );
}

export default InventarioInicio;