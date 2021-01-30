import React, {Fragment,useState,useEffect} from 'react';
import Header from './Cabecera/Cabecera'
import Form from './Formulario/Formulario'
import Clima from './Clima/Clima'
import Noticias from './Noticias/Noticias'

import store from './store'
import {Provider} from 'react-redux'

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
      return data
    })
  }
  const okclima = () =>{
    console.log('ok_clima')
  }
/*  useEffect(()=>{
    guardaRes(respuesta)
  })*/
//  const dispatch = useDispatch();
  return (
    <Fragment>
      <Provider store={store}>
      <Header />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s6">
              <Form
              />
            </div>
            <div className="col m6 s6">
              <Clima 
              />              
            </div>
            <div className="col m6 s6">
              <Noticias 
              />              
            </div>
          </div>
        </div>
      </div>
      </Provider>
    </Fragment>
  );
}

export default App;
