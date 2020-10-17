const User = require('./Model/user');
const CreditCard = require('./Model/CreditCard');
const Image = require('./Model/Image');
const Interest = require('./Model/Interest');
const PaymentUser = require('./Model/PaymentUser')


let CreditCard1 = new CreditCard("Jacob", 1078296729341054, 109, 07, 22)
let CreditCard2 = new CreditCard("Marie", 8378412074365943, 745, 11, 21)

let Image1 = new Image ("selfie.com/profilepicture")
let Image2 = new Image ("selfie.com/profilepicture")

let Interest1 = new Interest("fotball", 25, "Denmark")
let Interest2 = new Interest("swimming", 22, "Denmark")

let userArray = [] 
let User1 = new User('Jacob', 'Hansen', '25', '98', CreditCard1, Image1, Interest1)
let User2 = new User('Dilara', 'Jensen', '22', '11', CreditCard2, Image2, Interest2)

let paidUser1 = new PaymentUser(User1)
let paidUser2 = new PaymentUser(User2)

userArray = [paidUser1, paidUser2]

module.exports = userArray