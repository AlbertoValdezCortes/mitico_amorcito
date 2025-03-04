import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importar icono de lupa
import "./styles/Recetario.css";

const recetarioURL = "/documentos/recetario.pdf";

function Recetario() {
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");
    const [mostrarInput, setMostrarInput] = useState(false);

    // Manejo de la búsqueda
    const handleSearch = (e) => {
        if (e.key === "Enter" && busqueda.trim() !== "") {
            window.open(`${recetarioURL}#search=${busqueda}`, "_blank");
            setBusqueda("");
            setMostrarInput(false); // Ocultar input después de la búsqueda
        }
    };

    return (
        <div className="recetario-container">
            <button className="back-button" onClick={() => navigate("/inventario-inicio")}>⬅ Atrás</button>
            <h2>Recetario</h2>

            {/* Botón de búsqueda */}
            <div className="search-container">
                <FaSearch className="search-icon" onClick={() => setMostrarInput(!mostrarInput)} />
                {mostrarInput && (
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar en el recetario..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        onKeyDown={handleSearch}
                        autoFocus
                    />
                )}
            </div>

            {/* Mostrar el PDF */}
            <div className="pdf-container">
                <embed 
                    src={recetarioURL + "#toolbar=0&navpanes=0&scrollbar=0"} 
                    type="application/pdf" 
                    className="pdf-viewer"
                />
            </div>
        </div>
    );
}

export default Recetario;