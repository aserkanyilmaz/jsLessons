//veri türünü öğrenmek için typeof

let price = 14
let stringPrice = "144"
let hasPassword = true

console.log(
    "price :",
    typeof(price)
)
console.log(
    "stringPrice :",
    typeof(stringPrice)
)
console.log(
    "hasPassword :",
    typeof(hasPassword)
)

//stringi int ve floata dönüştürmek

let number1 = "14"
number1 = parseInt(number1)
console.log(
    "number1: ",number1,typeof(number1)
)

let number2 = "14px"
number2 = parseInt(number2)
console.log(
    "number2: ",number2,typeof(number2)
)

let number3 = "14.2"
number3 = Number(number3)
console.log(
    "number3: ",number3,typeof(number3)
)

let number4 = "14.4"
number4 = parseFloat(number4)
console.log(
    "number4: ",number4,typeof(number4)
)
// numberdan string dönüştürmek.

let number5 = 55
number5 = number5.toString()
console.log(number5,typeof(number5))