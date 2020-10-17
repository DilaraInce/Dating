const Match = require('./Model/Match')
const users = require('./HardUser')

let matchOne = new Match(users[0], users[1])

module.exports = matchOne;