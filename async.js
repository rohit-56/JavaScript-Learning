// Basically We Use Async to declare a function as promise that this function can return resolve and reject value

async function testAsyncFunctionality(){
    console.log("We are testing async functionality");
    setTimeout(()=>{
     console.log("Testing Set Timeout inside Async Function");
    },3000);
   return 200;
}

testAsyncFunctionality().then((value)=>{
    console.log("Function works with Status Code ",value);
})

// We Can write the same async function as ==

let testAsync = async () => {
    console.log("Test Async Property in JavaScript");
}

testAsync().then(()=>{
    console.log("Happy!!");
})

// We can use await keyword to stop wait for the function complete then execute the next line of code
// **** IMP NOTE ****
// Use await inside async functions
async function testAwait(){
let weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Send Current Weather Updates...");
            resolve("20 C");
        },4000);
    });

    let degree = await weather;

console.log("Current Temperature is:",degree);
}   
testAwait();

