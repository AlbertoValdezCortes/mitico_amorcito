import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../imagenes/logo.png";
import "./styles/Inventario.css";

function Inventario() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [productos, setProductos] = useState([]);

    // Obtener categorías desde Firebase
    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                const categoriasSnapshot = await getDocs(collection(db, "Categorias"));
                let listaCategorias = categoriasSnapshot.docs.map(doc => doc.id);
                setCategorias(listaCategorias);
            } catch (error) {
                console.error("Error obteniendo categorías:", error);
            }
        };

        obtenerCategorias();
    }, []);

    // Obtener productos de la categoría seleccionada
    useEffect(() => {
        if (categoriaSeleccionada) {
            const obtenerProductos = async () => {
                try {
                    const productosSnapshot = await getDocs(collection(db, `Categorias/${categoriaSeleccionada}/productos`));
                    let productosArray = productosSnapshot.docs.map(docSnap => ({
                        id: docSnap.id,
                        ...docSnap.data()
                    }));
                    setProductos(productosArray);
                } catch (error) {
                    console.error("Error obteniendo productos:", error);
                }
            };

            obtenerProductos();
        }
    }, [categoriaSeleccionada]);

    // Función para manejar cambios en los campos editables
    const handleChange = (e, productoId, campo) => {
        const { value } = e.target;
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === productoId ? { ...producto, [campo]: Number(value) } : producto
            )
        );
    };

    // Función para guardar los cambios en Firebase
    const guardarCambios = async (producto) => {
        try {
            const productoRef = doc(db, `Categorias/${categoriaSeleccionada}/productos`, producto.id);
            await updateDoc(productoRef, {
                inventarioInicial: producto.inventarioInicial,
                inventarioFinal: producto.inventarioFinal
            });
            alert("Inventario actualizado correctamente");
        } catch (error) {
            console.error("Error al actualizar el inventario:", error);
            alert("Error al actualizar el inventario");
        }
    };

    // Función para eliminar un producto
    const eliminarProducto = async (productoId) => {
        const confirmacion = window.confirm("¿Estás seguro de eliminar este producto?");
        if (!confirmacion) return;

        try {
            await deleteDoc(doc(db, `Categorias/${categoriaSeleccionada}/productos`, productoId));
            setProductos(productos.filter(producto => producto.id !== productoId));
            alert("Producto eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("Hubo un error al eliminar el producto.");
        }
    };

    // Función para cerrar sesión
    const handleLogout = async () => {
        await signOut(auth);
        window.location.href = "/"; // Redirige al usuario a la página de login
    };

    return (
        <div className="inventario-container">
            {/* Botón Atrás */}
            <button className="back-button" onClick={() => navigate("/inventario-inicio")}>⬅ Atrás</button>

            {/* Encabezado con logo */}
            <div className="inventario-header">
                <h2>Inventario de Productos</h2>
                <img src={logo} alt="Logo" className="inventario-logo" />
            </div>

            {/* Lista desplegable de categorías */}
            <label>Selecciona una categoría:</label>
            <select onChange={(e) => setCategoriaSeleccionada(e.target.value)} value={categoriaSeleccionada}>
                <option value="">-- Selecciona una categoría --</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>{categoria}</option>
                ))}
            </select>

            {/* Tabla de productos */}
            <div className="table-container">
                {productos.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Inventario Inicial</th>
                                <th>Inventario Final</th>
                                <th>Consumido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.nombre || "Sin Nombre"}</td>
                                    <td><input type="number" value={producto.inventarioInicial} onChange={(e) => handleChange(e, producto.id, "inventarioInicial")} /></td>
                                    <td><input type="number" value={producto.inventarioFinal} onChange={(e) => handleChange(e, producto.id, "inventarioFinal")} /></td>
                                    <td>{producto.inventarioInicial - producto.inventarioFinal}</td>
                                    <td>
                                        <button onClick={() => guardarCambios(producto)}>Guardar</button>
                                        <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : categoriaSeleccionada && <p>No hay productos en esta categoría.</p>}
            </div>
        </div>
    );
}

export default Inventario;