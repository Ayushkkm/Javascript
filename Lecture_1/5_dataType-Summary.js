// Primitive

// call by value

// 7 types : String , Number, Boolean, null (empty not 0),
// undefined (variable not defined) , BigInt

// primitive -> store single value -> immutable (change make new value)

const score = 100
const scoreValue = 100.3 // number -> no int , float here

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log('isequal -> ', id === anotherId) // Symbol make unique

// 3333333333n -> n is end of number -> tell it is bigInt -> not normal number


/* call by value 

let a = 10;
let b = a;   // value is copied 

b = 20; 

console.log(a); // 10 -> if reference use -> a = 20
console.log(b); // 20

///////////////

function update(x) {
  x = 50;
}

let num = 10;
update(num);

console.log(num); // 10

value of num pass in func -> not num itself

*/

// Javascript is dynamically typed language -> we don't give data type -> int , string etc


// ********************* Non Primitive ************************


// Call by Reference  

// Array , Objects , Functions

const heros = ['shaktiman', 'naagraj', 'doga']

const myobj = {
    'name': 'Ayush',
    age: 24
}

const func = function(){
    console.log("Hello World")
}

// typeOf of null -> object
// typeOf of undefined -> undefined
// typeOf of symbol -> symbol

// typeOf of array , object -> object 
// typeOf of function -> function

// ****************** Memory **************************

// Stack (primitive) and Heap (Non - primitive)

// Primitive -> call by value

let penOne = "red" // use stack -> variable store in stack
let penTwo = penOne // provide copy -> of penOne
penTwo = "blue"

console.log("penOne -> ", penOne)
console.log("penTwo -> ", penTwo)

// Non - primitive -> call by reference

let userOne = { // variable store in -> stack -> make value in heap -> and variable point to heap
    'email' : 'good@email.com',
    'upi' : 'good@ybl'
}

let userTwo = userOne // point to -> userOne

userTwo.email = 'veryGood@gmail.com'

console.log("userOne -> ", userOne.email)
console.log("userTwo -> ", userTwo.email)




