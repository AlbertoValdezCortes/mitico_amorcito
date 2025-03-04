import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./styles/CrearProducto.css";

function CrearProducto() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nombreProducto, setNombreProducto] = useState("");
    const [inventarioInicial, setInventarioInicial] = useState("");
    const [stockMinimo, setStockMinimo] = useState(""); 

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

    const agregarProducto = async (e) => {
        e.preventDefault();
        if (!nombreProducto.trim() || !inventarioInicial.trim() || !stockMinimo.trim()) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            let categoriaFinal = categoriaSeleccionada;
            if (nuevaCategoria.trim()) {
                categoriaFinal = nuevaCategoria.trim();
                const categoriaRef = doc(db, "Categorias", categoriaFinal);
                await setDoc(categoriaRef, {});
            }

            const productosRef = collection(db, `Categorias/${categoriaFinal}/productos`);
            await addDoc(productosRef, {
                nombre: nombreProducto,
                inventarioInicial: Number(inventarioInicial),
                inventarioFinal: Number(inventarioInicial),
                stockMinimo: Number(stockMinimo) 
            });

            alert("Producto agregado con éxito.");
            setNombreProducto("");
            setInventarioInicial("");
            setStockMinimo("");
            setNuevaCategoria("");
            setCategoriaSeleccionada("");

        } catch (error) {
            console.error("Error al agregar el producto:", error);
            alert("Hubo un error al guardar el producto.");
        }
    };

    return (
        <div className="crear-producto-container">
            <button className="back-button" onClick={() => navigate("/inventario-inicio")}>⬅ Atrás</button>
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={agregarProducto}>
                <label>Seleccionar Categoría:</label>
                <select
                    value={categoriaSeleccionada}
                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    disabled={nuevaCategoria.trim() !== ""}
                >
                    <option value="">-- Seleccionar Categoría --</option>
                    {categorias.map((categoria, index) => (
                        <option key={index} value={categoria}>{categoria}</option>
                    ))}
                </select>

                <label>O crear nueva categoría:</label>
                <input
                    type="text"
                    placeholder="Nombre de la nueva categoría"
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                    disabled={categoriaSeleccionada !== ""}
                />

                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ejemplo: Cerveza Artesanal"
                    value={nombreProducto}
                    onChange={(e) => setNombreProducto(e.target.value)}
                />

                <label>Inventario Inicial:</label>
                <input
                    type="number"
                    placeholder="Cantidad inicial"
                    value={inventarioInicial}
                    onChange={(e) => setInventarioInicial(e.target.value)}
                />

                <label>Stock Mínimo:</label>
                <input
                    type="number"
                    placeholder="Cantidad mínima antes de reponer"
                    value={stockMinimo}
                    onChange={(e) => setStockMinimo(e.target.value)}
                />

                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
}

export default CrearProducto;