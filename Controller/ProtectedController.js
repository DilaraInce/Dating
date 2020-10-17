users = require('../HardUser')
var jwt = require('jsonwebtoken');

function loginController(req, res) {
    jwt.verify(req.token, 'my_secret', function(err, data){
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "Det her er beskyttet",
                data: data
            })
        }
    }) 
}

module.exports = loginController