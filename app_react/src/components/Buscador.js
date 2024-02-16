import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Llamar a la función de búsqueda pasando la consulta como argumento
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;
