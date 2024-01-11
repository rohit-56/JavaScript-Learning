// Promise is a promise of code of execution where resolve and reject two callbacks by default provided by javascript
// We will any value in resolve to get fulfillled message that our function complete its task

// Why we need Promised?

// To resolve problem of Callbacks Hell and Pyramid of DOM we need promises as it increases more readibility

console.log("Hello World !!")

let p1 = new Promise((resolve,reject)=>{
    console.log("We have just started !!")
    
    setTimeout(()=>{
        console.log("We are in Set Timeout");
       let num = 4/0;

       if(num==2){
        resolve("We resolve the state");
       }
       else{
        reject(new Error("We didn't get the expected value"));
       }
    },7000);



}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We can divide any number by zero");
})

//p2 promise which will catch an error

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("We can divide any number by zero"));
    },4000);
    
}).catch((error) => {
    console.log(error);
})

// Another Example of Promise to loadScript in document

const loadScript = (src) =>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload= ()=>{
          console.log("Script is Working !!");
          resolve("Script is loaded :: ",src);
        };

        script.onerror=()=>{
          reject(new Error("Unable to load the script"));
        };
        document.body.appendChild(script);
    }).then((value)=>{
        setTimeout(console.log(value),3000);
    }).catch((error)=>{
        console.log(error);
    })
}

setTimeout(()=>{
   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
},3000);


// When we return any value inside a Promise it create another Promise as value the return value i.e. Promise Chaining

let p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve("Testing Done Of Promise Chaining"),2000);
      
      
}).then((value)=>{
    console.log("First Promise",value);
    return new Promise((resolve,reject)=>{
        resolve([1,"A","2#45",{"name":"Rohit"}]);
      });
}).then((value)=>{
    console.log("This is second promise to take return value of first promise",value);
})

// We can use Promise API like 

let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value P4")
    },11000);
})
let p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value P5")
    },10000);
})
let p6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value P6")
    },6000);
})

// 1. Promise.all() here we can pass all promises as arguement and it will return all promises value after completion of all promises

let promise1 = Promise.all([p4,p5,p6]);
promise1.then((value)=>{
    console.log(value);
})
// 2. Promise.allSettled()  here we pass all promises and it will handle if one of the promise is failed

let promise2 = Promise.allSettled([p4,p5,p6]);
promise2.then((value)=>{
    console.log(value);
})

// 3. Promise.race()  it will return the promise which we complete first

let promise3 = Promise.race([p4,p6]);
promise3.then((value)=>{
    console.log(value);
})

// 4. Promise.any()  it will return the promise which we complete first and not throwning an error , also if all promises fail it will return Aggregate Error


let promise4 = Promise.any([p4,p6]);
promise4.then((value)=>{
    console.log(value);
})

// 5. Promise.resolve(value) it will return a value after resolve fulfilled

// 6. Promise.reject(error)