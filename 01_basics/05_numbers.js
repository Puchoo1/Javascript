const speed = 50 // by default its number
console.log(speed);

// But to confirm whether it is a number or not we use Number
const Balance = new Number(718250998)
console.log(Balance.toLocaleString('en-IN'));




// ++++++++++++++++   Math   +++++++++++++++++

console.log(Math);
console.log(Math.round(Math.random()*10)+1);


const min = 10
const max = 20
// This helps to find the random numbers between min and max
console.log(Math.floor(Math.random()*(max - min + 1))+min);