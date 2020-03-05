
const barriosModel = require('../models/barrios.model');
const ciudadanosModel = require('../models/ciudadanos.model');
const alertasModel = require('../models/alertas.model');
const bodyController = require('./body.controller');


exports.getCiudadanos = (req, res) => {
    ciudadanosModel.listarCiudadanos( (error, rows) => {
        if (error) {
            res.status(500).send({"error": error})
            throw error
        } else {
            res.send(rows)
        }
    })
}

exports.nuevoCiudadano = (req, res) => {
    bodyController.checkBody(res, req.body, ["username", "password", "email"]);
    ciudadanosModel.crearCiudadano(
        req.body["username"],
        req.body["password"],
        req.body["email"],
        (error, result) => {
            if (error) {
                res.send(error);
                throw error;
            } else {
                res.send({
                    "message": "Ok usuario creado",
                    "id": result["insertId"]
                })
            }
        }
    )
}

exports.nuevaAlerta = (req, res) => {
    bodyController.checkBody(res, req.body, ["atendida", "descripcion", "ciudadanos_ID", "tiposalerta_ID", "barrios_ID"])
    const fecha = new Date().toJSON().slice(0,10).replace(/-/g,'');
    alertasModel.crearAlerta(
        fecha,
        req.body["atendida"], 
        req.body["descripcion"], 
        req.body["ciudadanos_ID"], 
        req.body["tiposalerta_ID"],
        req.body["barrios_ID"],
        (error, result) => {
            if (error) {
                res.send({"error": error});
                throw error;
            } else {
                res.send({
                    "message": "Ok alerta creada!",
                    "id": result["insertId"]
                })
            }
        }
    )
}

