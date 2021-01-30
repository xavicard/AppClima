import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actionClima} from '../Action/Action'
import {actionNoticia} from '../Action/NoticiaAction'
/* API : http://api.openweathermap.org/data/2.5/weather?q=CIUDAD,PAIS&units=metric&appid=678607c8dc07aee05abe6e00335b09da*/ 
const Form = () =>{
    const [busca,ingresaBusca] = useState({
        ciudad:'',
        pais:''
    })
    const actualiza = e =>{
        ingresaBusca({
            ...busca,
            [e.target.name]:e.target.value
        })
    }
    const [err,cambiaError] = useState(false)
    const buscaClima = e =>{
        e.preventDefault();
        if(busca.ciudad.trim()==='' || busca.pais.trim==='')
            cambiaError(true)
        //let r=busquedaClima(busca) 
        dispatch(actionClima(busca))
        dispatch(actionNoticia(busca))
    }
    const dispatch = useDispatch();
    return(
        <form onSubmit={buscaClima}>
              {err ? <div className="card-panel red darken-4 error">Se debe llenar todos los campos</div> : null }
            <div className="input-field col s12">
              <input name="ciudad" id="ciudad" type="text" className="validate" value={busca.ciudad} onChange={actualiza} />
              <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={busca.pais} onChange={actualiza}>
                    <option value="" >Elija el Pais</option>
                    <option value="BO">Bolivia</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                </select>
                <label htmlFor="pais">País</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit">Enviar 
                <i className="material-icons right">cloud</i>
            </button>
        </form>
    )
}

export default Form;