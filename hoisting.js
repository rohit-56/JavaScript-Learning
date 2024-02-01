/*
Hoisting is a concept or behavior in JavaScript where the declaration of a function, 
variable, or class goes to the top of the scope they were defined in
*/


// We can call any function before defining it

test()

function test(){
    console.log("Hello");
}

// Also it will not work for arrow function

greet()

let greet = () =>{
    console.log("Good evening")
}

//We can use var variable declaration but initialisation not

console.log(a)

 var a = 19

 // but decalaration will not work for let and const variable

 console.log(b)

 let b = 20