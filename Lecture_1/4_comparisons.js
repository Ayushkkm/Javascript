console.log("**** Comparison ****")

// console.log(2 > 1) // true
// console.log(2 >= 1) // true
// console.log(2 < 1) // false
// console.log(2 == 1) // false
// console.log(2 != 1) // true

// console.log("2" > 1) // true
// console.log("02" > 1) // true

// == equality check and <,>,<= , >= comparison work differently

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true -> >= convert null to 0

// undefined give false -> in all case -> write simple and avoid using 
// -> above comparison

// === -> check equality + dataType

console.log(2 === 2) // true
console.log("2" === 2) // false