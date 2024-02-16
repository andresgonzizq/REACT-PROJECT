// Formulario.js
import React, { useState } from 'react';
import './Formulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ onAgregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !contenido.trim()) return;

    const nuevaNota = {
      id: Date.now(),
      titulo,
      contenido
    };

    onAgregarNota(nuevaNota);
    setTitulo('');
    setContenido('');

    // Guardar la nueva nota en localStorage
    const notasLocalStorage = JSON.parse(localStorage.getItem('notas')) || [];
    localStorage.setItem('notas', JSON.stringify([...notasLocalStorage, nuevaNota]));

    // Redirigir al usuario de nuevo a la lista de notas
    window.location.href = '/';
  };

  return (
    <form onSubmit={manejarEnvio} className="container mt-5">
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="form-control"
          placeholder="Ingrese el título de la nota"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contenido">Contenido:</label>
        <textarea
          id="contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="form-control"
          placeholder="Ingrese el contenido de la nota"
          rows="5"
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Agregar Nota
        </button>
        <a href="/" className="btn btn-secondary">Volver a la lista</a>
      </div>
    </form>
  );
};

export default Formulario;
