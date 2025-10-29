// Let, const and var
const accountId = 1233; // cannot be reassigned
let accountEmail = "demo@gmail.com"
var accountPassword = "cupertino"; // avoid using var
accountCity = "Sirsa" // This is also valid but not recommended
let accountState; // declaration

// accountId = 1234  // Not allowed
// console.log(accountId);

accountEmail = "changed@gmail.com"
accountPassword = "newpassword"
accountCity = "New York"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// to declare const, there is only one way. const <name> = <value>
// to declare variable, there are two ways. let <name> = <value> or var <name> = <value>

/*
Prefer not to use var.
Because of issue in block scope and functional scope.
*/
