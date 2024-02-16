import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaNotas from './components/ListaNotas';
import Formulario from './components/Formulario';
import DetalleNota from './components/DetalleNota';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
const App = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    // Recuperar las notas de localStorage al cargar la aplicación
    const notasLocalStorage = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(notasLocalStorage);
  }, []);

  const agregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/nueva-nota">
          <Formulario onAgregarNota={agregarNota} />
        </Route>
        <Route path="/nota/:id">
          <DetalleNota notas={notas} setNotas={setNotas} />
        </Route>
        <Route path="/">
        <ListaNotas notas={notas} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
