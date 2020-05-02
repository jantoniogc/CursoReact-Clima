import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const appId = '0ce99c97e4fe1a22354d272a43c40232';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        if (resultado.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
        setResultado(resultado);
        setConsultar(false);
      }
    }
    consultarApi();
    // eslint-disable-next-line
  }, [consultar])

  let componente
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado}></Clima>
  }
  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      >

      </Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}></Formulario>
            </div>
            <div className="col l6 m6 s12">
              {componente}
            </div>
          </div>
        </div>

      </div>
    </Fragment>

  );
}

export default App;
