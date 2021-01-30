const ciudadInicial = {

}
const DATOS_COMPLETOS='DATOS_COMPLETOS'
const DATOS_INEXISTENTES='DATOS_INEXISTENTES'

export default function(state = ciudadInicial, action){
    switch(action.type){
        case DATOS_COMPLETOS:{
            return action.payload
        } break;
        case DATOS_INEXISTENTES:{
            return action.payload
        } break;
        default: return state
    }
}