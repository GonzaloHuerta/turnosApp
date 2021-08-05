import { agregarTurno as agregarTurnoDB } from "../../db";
import { leerTurnos as leerTurnosDB } from "../../db";

export const AGREGAR_TURNO = 'AGREGAR_TURNO';
export const CANCELAR_TURNO = 'CANCELAR_TURNO';
export const LEER_TURNOS = 'LEER_TURNOS';

export const agregarTurno = (hora, cliente, descripcion)=>{
    return async dispatch=>{
        try{
            const result = await agregarTurnoDB(hora, cliente, descripcion);
            dispatch({ 
                type: AGREGAR_TURNO, 
                payload: { id: result.insertId, hora, cliente, descripcion} 
            })
        }catch(err){
            throw err;
        }
    }
    
   /*  return(
        {
            type: AGREGAR_TURNO,
            id: result.insertId,
            hora: hora,
            cliente: cliente,
            descripcion: descripcion,
        }
        
    ) */
    
};

export const cancelarTurno = (id)=>({
    type: 'CANCELAR_TURNO',
    id: id,
});

export const leerTurnos = ()=>{
    return async dispatch=>{
        try{
            const result = await leerTurnosDB();
            dispatch({type: LEER_TURNOS, turnos: result.rows._array})
        }catch(error){
            throw error;
        }
    }
}