import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import videoReducer from './videoReducer'

export default combineReducers({categoryReducer, videoReducer})