function ensureToken(req, res, next){
    const header = req.headers["authorization"]
    console.log(header)
    if (header == undefined){
        res.sendStatus(403)
    } else{
        const bearer = header.split(" ")
        const headerToken = bearer[1]
        req.token = headerToken
        next()
        
    }
}

module.exports = ensureToken