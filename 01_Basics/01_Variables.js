const accountId = 144553
let accountEmail = "gayu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "abc@cd.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
