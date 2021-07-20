import { TURNOS } from "../../data/turnos";
import { AGREGAR_TURNO, CANCELAR_TURNO } from "../actions/turnos.action";

const INITIAL_STATE = {
  listaDeTurnos: TURNOS,
  selected: null,
};

const TurnosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGREGAR_TURNO:
      return {
          listaDeTurnos:[
            ...state.listaDeTurnos,
            {
              id: action.id,
              hora: action.hora,
              cliente: action.cliente,
              descripcion: action.descripcion,
            },
          ]
      }
    case CANCELAR_TURNO:
      const listaDeTurnosFiltrada = state.listaDeTurnos.filter((item) => item.id !== action.id);
      return{
        listaDeTurnos: listaDeTurnosFiltrada,
      }
    default:
      return { ...state }  
  }
};

export default TurnosReducer;
