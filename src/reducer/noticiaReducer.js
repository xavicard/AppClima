const noticiaInicial = {

}
const NOTICIAS_EXITO='NOTICIAS_EXITO'
const NOTICIAS_ERROR='NOTICIAS_ERROR'

export default function(state = noticiaInicial, action){
    switch(action.type){
        case NOTICIAS_EXITO:{
            return action.payload
        } break;
        case NOTICIAS_ERROR:{
            return action.payload
        } break;
        default: return state
    }
}