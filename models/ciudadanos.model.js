const connection = require('./db.model');

//4 CRUD
exports.crearCiudadano = (username, password, email, callback) => {
    connection.query(`
    INSERT INTO neoalert.ciudadanos
    (username, password, email)
    VALUES
    ("${username}", "${password}", "${email}");
    `, callback)
}

exports.listarCiudadanos = (callback) => {
    connection.query(`
    SELECT * FROM neoalert.ciudadanos;
    `, callback)
}

exports.modificarCiudadano = (ID, username, password, email, callback) => {
    connection.query(`
    UPDATE neoalert.ciudadanos
    SET 
    username="${username}", password= "${password}", email="${email}"
    WHERE ID = ${ID};
    `, callback)
}

exports.eliminarCiudadano = (ID, callback) => {
    connection.query(`
    DELETE FROM neoalert.ciudadanos WHERE ID = ${ID};
    `, callback)
}