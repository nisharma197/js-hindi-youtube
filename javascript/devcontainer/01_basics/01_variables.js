const accountID = 1234
let accountName = "nisha sharma"
var accountPassword = "1234"
accountCity = "delhi"
let accountState;
// accountID = 5647 // not allowed

accountName = "nisha sharma"
accountPassword = "12345"
accountCity = "indore"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountID, accountName,  accountPassword, accountCity, accountState]);
