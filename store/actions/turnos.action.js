import { agregarTurno as agregarTurnoDB } from "../../db";
import { leerTurnos as leerTurnosDB } from "../../db";
import { cancelarTurno as cancelarTurnoDB } from "../../db";

export const AGREGAR_TURNO = 'AGREGAR_TURNO';
export const CANCELAR_TURNO = 'CANCELAR_TURNO';
export const LEER_TURNOS = 'LEER_TURNOS';

export const agregarTurno = (fechaYHora, nombreCliente, descripcion)=>{
    
    return async dispatch=>{
        
        try{
            const result = await agregarTurnoDB(fechaYHora, nombreCliente, descripcion);
            dispatch({ 
                type: AGREGAR_TURNO, 
                payload: { id: result.insertId.toString(), fechaYHora, nombreCliente, descripcion} 
            })
        }catch(err){
            throw err;
        }
    } 
};

export const cancelarTurno = (id)=>{
    return async dispatch=>{
        try{
            const result = await cancelarTurnoDB(id);
            dispatch({ 
                type: CANCELAR_TURNO, 
                payload: { id: result.insertId }
            })
        }catch(error){
            throw error;
        }
    }
};

export const leerTurnos = ()=>{
    return async dispatch=>{
        try{
            const result = await leerTurnosDB();
            
            dispatch({
                type: LEER_TURNOS, 
                payload: { turnos: result.rows._array }
                
            })
            
        }catch(error){
            throw error;
        }
    }
}