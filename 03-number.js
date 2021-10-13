//number veri türü tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = priceTax + price

console. log("Fiyat",price,
         "kdv oranı", tax, 
         "tutar",priceTax,
         "Fiyat", total
         )
         
// arttırma ve azaltma işlemleri:
let counter = 440
counter ++;
console.log(counter)
counter -= 1
console.log(counter)
counter *=3
console.log(counter)

//mod alma
//sayı tek mi çift mi ?
console.log(373 % 2)

// 8 ürün alan koliye tüm ürünler sığar mı ?
console.log("kolan koli örneği: ", 18 % 8)

// üs alma
console.log(2 ** 4)

// aşağı yuvarlama
console.log( Math.floor(3.7) )

// yukarı yuvarlama
console.log(Math.ceil(3.1))

//yakına yuvarlama
console.log(Math. round(143.988))

//string yapıda number
let stringNumber = "14"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("String numara gönderildi", Number("144"))