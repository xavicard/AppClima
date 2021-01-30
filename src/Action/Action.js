const DATOS_COMPLETOS='DATOS_COMPLETOS'
const DATOS_INEXISTENTES='DATOS_INEXISTENTES'
export function actionClima(dato) {
    return async (dispatch) =>{
        console.log(dato)
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+dato.ciudad+','+dato.pais+'&units=metric&appid=678607c8dc07aee05abe6e00335b09da')
        .then(res=>res.json())
        .then(data=>{
            if(data.cod!=200)
                dispatch(buscaError(data))
            else
                dispatch(busca(data))
            //guardaRespuesta(data)
          //console.log(respuesta)
          //return data
        })
    }
}
const busca=dato=>(
    {
        type:DATOS_COMPLETOS,
        payload:dato
    }
)
const buscaError=dato=>(
    {
        type:DATOS_INEXISTENTES,
        payload:dato
    }
)
