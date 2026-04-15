const accountId = 144553
let accountEmail = "manujsaxena123@gmail.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState;
// accountId = 256799 // not allowed

/*
Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "hchchc@gmail.com"
accountPassword = "23456"
accountcity = "Bengaluru"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountcity,accountState]);
