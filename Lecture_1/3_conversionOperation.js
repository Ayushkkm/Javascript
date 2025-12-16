console.log("********** Conversion ***********")

let score = 33

console.log(typeof score);

score = "33"
console.log(typeof(score)); // second method

let ValueInNumber = Number(score) // conversion

console.log(typeof ValueInNumber);

score = "33abc"

ValueInNumber = Number(score)

console.log(typeof ValueInNumber); // it will show number
console.log(ValueInNumber) // NaN -> not a number -> type show number -> bug in JS

// Conversion to Number

console.log("null->", Number(null)) // 0
console.log("undefined->" , Number(undefined)) // NaN
console.log("String No Integer ->" , Number("Ayush")) // NaN
console.log("String -> ", Number("36")) // Number
// true/false => 1/0

// Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("1 -> bool -> ",booleanIsLoggedIn) // true
// "" -> false
// "Ayush" -> true

// String

let someNumber = 33
let stringNumber = String(someNumber)

console.log("33 -> string -> ", someNumber)
console.log("type -> 33 -> ", typeof stringNumber)

console.log("******* Operation *********")

let value = 3
let negValue = -value
console.log("negative -> ", negValue)

// console.log(2+2) // add
// console.log(2-2) // sub
// console.log(2*2) // mul
// console.log(2**3) // power
// console.log(2/3) // divide
// console.log(3%2) // rem

// console.log("1" + 2) // 12 of string
// console.log(1 + "2") // 12 of string
// console.log("1" + 2 + 2) // 122 of string
// console.log(1 + 2 + "2") // 32 of string -> left to right operation

// console.log((3+4)*5 % 3) // use bracket -> make simple

console.log("+true -> ", +true) // give 1 -> true = 0 +1 -> don't use it

// In con.log(, +) -> both use as seperator

console.log('+"" -> ', +"") // give 0 -> true+  , ""+ -> give error

let num1 , num2 , num3

num1 = num2 = num3 = 2+2 

// don't use aboves code -> use simple codes in life and industry

let gameCounter = 100
console.log(gameCounter++) // give 100 -> first use then -> increase

let newCounter = 100
newCounter++  // it first return value -> then increase
console.log(newCounter) // 101