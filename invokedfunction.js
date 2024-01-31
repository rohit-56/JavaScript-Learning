//IIFE -- Immediately invoked function expression
// This is most use in async/await case when we want to call a function immediatley after defining it

//Example problem


let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(4000);
        },4000);
    })
}

let fun = async ()=>{
    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);
}

//Now if we call fun() then it will execute only

fun();


// To Resolve this problem we have IIFE
//as you can see we have defined one function inside bracket and call it immediatly int this way we can use this fun one time without 
//calling externally and allow more spaces
(async ()=>{
    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);
})();








