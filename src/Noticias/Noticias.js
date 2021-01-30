import React, { useState } from 'react'
import {useSelector} from 'react-redux'
const Noticias =() => {
    const resultado = useSelector(respuestaNoticia => respuestaNoticia)
    console.log(resultado.respuestaNoticia.articles)
    if(resultado.respuestaNoticia.message)
        return (
            <div className="card-panel red darken-4 error">
                {resultado.respuestaNoticia.message}
            </div>
        )
    if(!resultado.respuestaNoticia.status)
        return null;
    if(resultado.respuestaNoticia.totalResults==0)
    return (
        <div className="card-panel red darken-4 error">
            No existen noticias a mostrar
        </div>
    )
    return(
        <div className="card grey lighten-4">
            <h2> Noticias destacadas </h2>
            <ul>
            {resultado.respuestaNoticia.articles.map( a => (
                <li>{a.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Noticias