export const AGREGAR_TURNO = 'AGREGAR_TURNO';
export const CANCELAR_TURNO = 'CANCELAR_TURNO';

export const agregarTurno = (id, hora, cliente, descripcion)=>({
    type: AGREGAR_TURNO,
    id: id,
    hora: hora,
    cliente: cliente,
    descripcion: descripcion,
});

export const cancelarTurno = (id)=>({
    type: 'CANCELAR_TURNO',
    id: id,
})