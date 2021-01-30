import { combineReducers } from 'redux'
import climaReducer from './climaReducer'
import noticiaReducer from './noticiaReducer'

export default combineReducers({
    respuestaClima: climaReducer,
    respuestaNoticia: noticiaReducer
})