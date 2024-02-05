let age = "67abx";
let empty ="";

console.log(typeof age);
console.log(typeof (age));

// conversion
let valueInNumber = Number(age);
console.log(typeof valueInNumber);
// *Note* : when we change string to number remember it also can be changed as NaN not a number;
console.log(valueInNumber);
let Newempty= Boolean(empty);
// console.log(Newempty);

// When we convert 
// empty"" => false
// "string" => true

const id = Symbol("0402")
const anotherId = Symbol("0402")

console.log(id === anotherId);