// This topic is very important 
// Best content here --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Here we learn about spread operator and how we can assign value from arrays and objects 

let arr = [1,2,3];

let [a,b] = arr;

console.log(`a is : ${a} and b is : ${b}`);

// This is something destructuring if we are not using this we have to assign values to a and b in this way
// a = arr[0]
// b = arr[1]

// We can all use spread operator as

let arr1 = [1,2,3,4,5,6,7,8];

let [c,,d,...res] = arr1;

console.log(c,d,res);

// Spread operator values will show in array

//Now we can also see this in objects as well

let { name, email } = {name:"Rohit",email:"rohit25@gmail.com"}
console.log(name,email);

//We can also make arrays to objects as key-value pair
let obj = {...arr1};

console.log(obj);

//We can also this inside function calling with parameters
function sum(v1,v2,v3){
    return v1+v2+v3;
}

console.log(sum(...arr1));


// We can also override some values while using obj with spread operator

//let take a function with three keys
let obj2 = {
    name:"John",
    company:"Company",
    email:"rohit.."
}
//this name - Rohit will override after loading John
console.log({...obj2,name:"Rohit"});

//Note if we define name first then ...obj2 what happen it will override with original name
console.log({name:"Rohit",...obj2});


