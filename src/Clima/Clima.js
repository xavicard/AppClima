import React, { useState } from 'react'
import {useSelector} from 'react-redux'
const Clima =() => {
    const resultado = useSelector(respuestaClima => respuestaClima)
    console.log(resultado)
    if(resultado.respuestaClima.message)
        return (
            <div className="card-panel red darken-4 error">
                {resultado.respuestaClima.message}
            </div>
        )
    if(!resultado.respuestaClima.main)
        return null;
    return(
        <div className="card grey lighten-4">
            <h2>{ resultado.respuestaClima.name }</h2>
            Temperatura: { resultado.respuestaClima.main.temp } ºC<br />
            Máxima: { resultado.respuestaClima.main.temp_max } ºC<br />
            Mínima: { resultado.respuestaClima.main.temp_min } ºC<br />
            Velocidad del Viento: { resultado.respuestaClima.wind.speed } Km/h<br />
        </div>
    )
}
export default Clima