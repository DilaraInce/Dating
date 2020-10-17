const hardMatch = require('../HardMatch')


function matchController(req, res) {
    res.json(hardMatch)
    
}

module.exports = matchController
