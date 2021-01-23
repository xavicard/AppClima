import React, { useState } from 'react'
const Clima =({res}) => {
    if(!res.main)
        return null
    return(
        <div className="card grey lighten-4">
            <h2>{ res.name }</h2>
            Temperatura: { res.main.temp } ºC<br />
            Máxima: { res.main.temp_max } ºC<br />
            Mínima: { res.main.temp_min } ºC<br />
            Velocidad del Viento: { res.wind.speed } Km/h<br />
        </div>
    )
}
export default Clima