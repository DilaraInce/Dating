const users = require('../HardUser')
var jwt = require('jsonwebtoken');

function loginController(req, res) {
    var user = users[0]

    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController