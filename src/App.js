import React, {Fragment,useState,useEffect} from 'react';
import Header from './Cabecera/Cabecera'
import Form from './Formulario/Formulario'
import Clima from './Clima/Clima'

function App() {
  const [busca,ingresaBusca] = useState({
    ciudad:'',
    pais:''
  })
  const [respuesta,guardaRespuesta]=useState({})
  const [res,guardaRes]=useState({})
  const clima = (busca) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+busca.ciudad+','+busca.pais+'&units=metric&appid=678607c8dc07aee05abe6e00335b09da')
    .then(res=>res.json())
    .then(data=>{
      guardaRespuesta(data)
      //console.log(respuesta)
    })
  }
  useEffect(()=>{
    guardaRes(respuesta)
  })
  return (
    <Fragment>
      <Header />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s6">
              <Form
                busquedaClima={clima}
                guardaRespuesta={guardaRespuesta}
                respuesta={respuesta}
              />
            </div>
            <div className="col m6 s6">
              <Clima 
                res={res}
              />              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
