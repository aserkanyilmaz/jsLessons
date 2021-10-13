/*
Genellikle let ve const kullanılıyor. Var artık pek kullanılmıyor.
lette bilgileri değiştirebiliriz. Constta değiştiremeyiz. 
*/
//let ile değişkeni boş tanımlamak:

let serverName
console.log(serverName)

//let ile değişkene bilgi atamak:

serverName = "iamseko.com"
console.log(serverName)

//let ile değişkene bilgi atarak tanımlamak:

let password = "123123";
console.log(password);

//değişken ataması yapmadan önce kullanmaya çalışma, önce tanımlayıp sonra kullanmalısın. Sıralı okuma mantığı...

//const ile değişkeni boş tanımlamaya çalışmak:

//const serverPassword; şeklinde kullanamayız. Const değişken dolu tanımanmalı.

//const ile değişken tanımlamak:

const SERVER_PASSWORD="asdfasdfasdf"
console.log(SERVER_PASSWORD)

// CONST tek seferde bir değişken tanıdıktan sonra değişmeyeceğiniz varsaymamız gerekiyor.
//asdfas