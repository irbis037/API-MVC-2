const connection = require('./db.model');

exports.crearAlerta = (fecha, atendida, descripcion, ciudadanos_ID, barrios_ID, tiposalerta_ID, callback) => {
    connection.query(`
    INSERT INTO neoalert.alertas
    (fecha, atendida, descripcion, ciudadanos_ID, barrios_ID, tiposalerta_ID)
    VALUES
    (${fecha}, ${atendida}, "${descripcion}", ${ciudadanos_ID}, ${tiposalerta_ID}, ${barrios_ID});
    `, callback)
}

exports.listarAlertas = (callback) => {
    connection.query(`
    SELECT * FROM neoalert.alertas;
    `, callback)
}

exports.modificarAlerta = (atendida, descripcion, ID, callback) => {
    connection.query(`
    UPDATE neoalert.alertas
    SET
    atendida = ${atendida},
    descripcion = ${descripcion}
    WHERE ID = ${ID};
    `, callback)
}

exports.eliminarAlerta = (ID, callback) => {
    connection.query(`
    DELETE FROM neoalert.alertas WHERE ID = ${ID};
    `, callback)
}