// const tinderUser = new Object()
const tinderUser={}

tinderUser.id ="1223asd"
tinderUser.name = "Piyush"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "hello@gmail.com",
    fullname: {
        firstname: "Piyush",
        lastname: "burnewal"
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.firstname)


const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "c", 4:"d"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);


// Destructuring

const course ={
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

const{courseInstructor}= course

console.log(courseInstructor)



