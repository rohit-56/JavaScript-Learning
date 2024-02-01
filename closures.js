/*
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function
*/

//let take an example we define one function inside second function
let val = "Good morning"

function fun(){
  let val = "Good afternoon Rohit!!"
  console.log(val);
  let b = () =>{
    console.log(val);
  }
  val = "Good evening Rohit!!!!!"
  return b;
}

var result = fun();
result();

// As you know the closures return the function b with the lexical environment reference so we will get the last updated value reference by val variable

// let's take another example of closures

function test(){
    let a = 24
    const x = () =>{
       
        let a = 26
        console.log(a);
        const y = () =>{
            
            let a = 27
            console.log(a);
            const z = () =>{
                console.log(a);
            }
            z();
        }
        y()
    }
    return x;
}

let ans = test();
ans();