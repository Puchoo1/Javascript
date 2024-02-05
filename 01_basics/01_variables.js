const number = 2345598
// This const value in immutable it can't be changed....
let accountEmail = "rahul@gmail.com"
// It is mostly used to storing a variables..
var accountPassword = "0987"
// It's a global variable
accountCity ="bhopal"

// number = 34
// console.log(number);

accountEmail = "hdfc@gmail.com"
accountPassword= '12345'
accountCity = "Delhi"

console.log(accountEmail);  // AAM jindigi

/*
 We must not use var because of issue in block scope and functional scope..
*/
console.table([number,accountEmail,accountPassword,accountCity])