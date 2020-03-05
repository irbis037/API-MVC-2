
exports.checkBody = (res, body, arrayValores) => {
    for (valor of arrayValores) {
        if (body[valor] === undefined){
            res.status(400).send({"error": "revisa tu body"})
            throw new Error("Body mal formado")
        }
    }
}