// 0-1 anlamak

let isActive = false//0
isActive = true //1
console.log(isActive)


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("222")
Boolean("0")
Boolean("")

userName = "user"
console.log(Boolean(userName), "true gelir")


//0, -0, null ,false, NaN, undefined, ("")

Boolean(0)//false
Boolean(-0)//false
Boolean(-0.1)//true 
Boolean(0===0)//true

Boolean(userName.length>0)//true
let a; 
console.log(Boolean(a))
