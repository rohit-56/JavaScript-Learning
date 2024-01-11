// We can handle the errors using try-catch block but one important note try catch only handles the synchronization code

//Example
// function test(){
//     try{
//         setTimeout(()=>{
//           console.log(rohit);
//         },3000);
//     }catch(error){
//         console.log("rohit is not defined");
//     }
// }

// Above function unable to hanle the error as setTimeout is async process 

// To handle such problems either use try/catch inside async process or use await

// function test(){
//     try{
//         setTimeout(()=>{
            //  try{
            //     console.log(rohit);
            //  }catch(error){
            //     console.log(error);
            //  }
//         },3000);
//     }catch(error){
//         console.log("rohit is not defined");
//     }
// }
function test1(){
    setTimeout(()=>{
        console.log(rohot);
    },3000);

}   
   
async function test(){
     try {
     let p =  test1();
    }catch(error){
        console.log(error);
    }
}

test();