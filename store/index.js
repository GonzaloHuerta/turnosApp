import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from'redux-thunk';

import TurnosReducer from "./reducers/turnos.reducer";

const RootReducer = combineReducers({
    turnos: TurnosReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));