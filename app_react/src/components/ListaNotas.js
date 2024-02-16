import React, { useState, useEffect } from 'react';
import './ListaNotas.css';
import Buscador from './Buscador'; // Importamos el componente Buscador

const IraAgrearNuevaNota = () => {
    window.location.href = '/nueva-nota'; // Redirige a la vista de agregar una nuva nota
};

const ListaNotas = ({ notas }) => {
    const [filteredNotas, setFilteredNotas] = useState(notas);

    // Función para manejar la búsqueda de notas
    const handleSearch = (query) => {
        console.log("Consulta de búsqueda:", query); // Agregar este log para depurar
    
        // Filtrar las notas según la consulta de búsqueda
        const filtered = notas.filter(nota =>
            nota.titulo.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Notas filtradas:", filtered); // Agregar este log para depurar
    
        setFilteredNotas(filtered);
    };

    useEffect(() => {
        // Inicializar filteredNotas con todas las notas cuando se monta el componente
        setFilteredNotas(notas);
    }, [notas]); // Ejecutar este efecto cada vez que cambien las notas

    return (
        <div className="container">
            {/* Renderizamos el componente Buscador */}
            <Buscador onSearch={handleSearch} />
            <h1 className="titulo">Listado de Notas</h1>
            <section className="section">
                <div className="list">
                    <ul className="list-group">
                        {/* Renderizamos la lista de notas filtradas o todas las notas */}
                        {filteredNotas.map((nota) => (
                            <li key={nota.id} className="list-group-item">
                                <a href={`/nota/${nota.id}`}>{nota.titulo}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <div className="buttons-container">
                {/* Botón para agregar una nueva nota */}
                <button onClick={IraAgrearNuevaNota} className="button-arounder">Agregar Nueva Nota</button>
            </div>
        </div>
    );
};

export default ListaNotas;
