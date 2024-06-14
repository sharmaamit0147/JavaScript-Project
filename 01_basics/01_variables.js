const accountId = 144553
let accountEmail = "amit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity = "Neemuch"

console.log(accountId);

/*
Perfer not to use Var
because of issue in block scope and functional scope
*/
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);