import { createStore, combineReducers } from "redux";

import TurnosReducer from "./reducers/turnos.reducer";

const RootReducer = combineReducers({
    turnos: TurnosReducer,
})

export default createStore(RootReducer);