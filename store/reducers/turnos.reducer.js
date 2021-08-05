import { TURNOS } from "../../data/turnos";
import { AGREGAR_TURNO, CANCELAR_TURNO, LEER_TURNOS } from "../actions/turnos.action";

const INITIAL_STATE = {
  listaDeTurnos: [],
  selected: null,
};

const TurnosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGREGAR_TURNO:
      return {
          listaDeTurnos:[
            ...state.listaDeTurnos,
            {
              id: action.payload.id.toString(),
              hora: action.payload.hora,
              cliente: action.payload.cliente,
              descripcion: action.payload.descripcion,
            },
          ]
      }
    case CANCELAR_TURNO:
      const listaDeTurnosFiltrada = state.listaDeTurnos.filter((item) => item.id !== action.id);
      return{
        listaDeTurnos: listaDeTurnosFiltrada,
      }
    case LEER_TURNOS:
      return{
        ...state,

      }
    default:
      return { ...state }  
  }
};

export default TurnosReducer;
