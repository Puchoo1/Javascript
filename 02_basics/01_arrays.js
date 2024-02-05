// -----------------    ARRAY   ----------------

const myArr =[0,1,2,3,4,5]
const myHeros= ["Ironman","Captain America"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr);
// console.log(myArr2);

myArr.push(6)
myArr.pop();
console.log(myArr);

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(array)
const another_array = array.flat(3);
console.log(another_array);
console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));