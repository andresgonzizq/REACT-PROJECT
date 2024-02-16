import React from 'react';
import { useParams } from 'react-router-dom';
import './DetalleNota.css';

const DetalleNota = ({ notas, setNotas }) => {
  const { id } = useParams();

  // Buscar la nota correspondiente por su ID
  const notaSeleccionada = notas.find(nota => nota.id === parseInt(id));

  // Función para eliminar la nota
  const eliminarNota = () => {
    const notasActualizadas = notas.filter(nota => nota.id !== parseInt(id));
    setNotas(notasActualizadas);
    localStorage.setItem('notas', JSON.stringify(notasActualizadas));
    // Redirigir a la lista de notas después de eliminar la nota
    window.location.href = '/';
  };

  return (
    <div className="nota-card transition">
      <h2 className="nota-titulo transition">{notaSeleccionada ? notaSeleccionada.titulo : 'Nota no encontrada'}</h2>
      <p>{notaSeleccionada ? notaSeleccionada.contenido : ''}</p>
      <div className="nota-cta-container transition">
        <button onClick={eliminarNota} className="nota-cta mb-0">Eliminar Nota</button>
        <a href="/" className="nota-cta mb-0">Volver a la lista</a>
      </div>
      <div className="nota-card_circle transition"></div>
    </div>
  );
};

export default DetalleNota;
