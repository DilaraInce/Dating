const hardInterest = require('../HardInterest')


function interestController(req, res) {
    res.json(hardInterest)
    
}

module.exports = interestController

