const NOTICIAS_EXITO='NOTICIAS_EXITO'
const NOTICIAS_ERROR='NOTICIAS_ERROR'
export function actionNoticia(dato) {
    return async (dispatch) =>{
        console.log(dato)
        fetch('https://newsapi.org/v2/everything?q='+dato.ciudad+'&apiKey=c9eace47f6b545a68dc152c061ff0a94&language=es&pageSize=10')
        .then(res=>res.json())
        .then(data=>{
            if(data.status!="ok")
                dispatch(notiError(data))
            else
                dispatch(noti(data))
            //guardaRespuesta(data)
          //console.log(respuesta)
          //return data
        })
    }
}
const noti=dato=>(
    {
        type:NOTICIAS_EXITO,
        payload:dato
    }
)
const notiError=dato=>(
    {
        type:NOTICIAS_ERROR,
        payload:dato
    }
)
