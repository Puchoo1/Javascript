// singleton 

// object literals
const User = {
    name: "Rahul",
    "Full Name" : "Rahul Kumar",
    age : 23,
    location: "bhopal",
    email: "rahul@google.com"
}

console.log(User.email); // This can't access "Full Name"
console.log(User["Full Name"]);

User.email = "rahul@yahoo.com";
// Object.freeze(User);
console.log(User);

User.greeting = function(){
    console.log("hello User");
}
User.greetingtwo = function(){
    console.log(`hello User,${this.name}`);
}

console.log(User.greeting());
console.log(User.greetingtwo());