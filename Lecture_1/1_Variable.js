const accountID = 144553
let accountEmail = "ayush@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "12736t8"
accountCity = "New Delhi"   

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword , accountCity, accountState])
