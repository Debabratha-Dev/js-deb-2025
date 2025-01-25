const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "test2@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var beacause of issue in bloack scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])
