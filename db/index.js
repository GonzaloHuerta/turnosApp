import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('turnos.db');

export const init = ()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS turnos (
                    id INTEGER PRIMARY KEY NOT NULL,
                    horaTurno TEXT NOT NULL,
                    nombreCliente TEXT NOT NULL,
                    descripcion TEXT NOT NULL
                )`,
                [],
                () =>{ resolve() },
                (_, err)=>{ reject(err) },
            )
        })
    });

    return promise;
}

export const agregarTurno = (horaTurno, nombreCliente, descripcion) =>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                `INSERT INTO turnos (horaTurno, nombreCliente, descripcion) VALUES (?, ?, ?)`,
                [horaTurno, nombreCliente, descripcion],
                (_, result)=>{ resolve(result) },
                (_, err)=>{ reject(err) },
            );
        });
    });
    return promise;
}

export const leerTurnos = ()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                `SELECT * FROM turnos;`,
                [],
                (_,result)=>{ resolve(result) },
                (_, err)=>{ reject(err) },
            );
        });
    });
    return promise;
}

export const cancelarTurno = (id)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                `DELETE FROM turnos WHERE id='${id}';`,
                [],
                (_,result)=>{ resolve(result) },
                (_, err)=>{ reject(err) },
            );
        })
    });
    return promise;
}