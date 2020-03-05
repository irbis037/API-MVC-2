const connection = require('./db.model');

// FUNCIONES CRUD

exports.crearUnBarrio = (nombre, ciudad, codigoPostal, callback) => {
    connection.query(`
    INSERT INTO neoalert.barrios
    (nombre, ciudad, codigopostal)
    VALUES 
    ("${nombre}", "${ciudad}", ${codigoPostal});
    `, callback)
}

exports.listarBarrios = (callback) => {
    connection.query(`
    SELECT * FROM neoalert.barrios;
    `, callback)
}

exports.modificarBarrio = (nombre, ciudad, codigoPostal, ID, callback) => {
    connection.query(`
    UPDATE neoalert.barrios
    SET 
    nombre = "${nombre}", ciudad = "${ciudad}", codigopostal=${codigoPostal}
    WHERE ID = ${ID};
    `, callback)
}

exports.eliminarBarrio = (ID, callback) => {
    connection.query(`
    DELETE FROM neoalert.barrios WHERE ID = ${ID};
    `, callback)
}
