// A callback is a function passed as an argument to another function , We can do so in asynchronous programming

// Let's understand a code with callbacks

//First we define a simple function hello 

function hello(){
    console.log("Hello World !!");
    alert("Hello World!!!");
}


//Now we define another function which take hello function as parameter and perform another task as well

function toDoTask(num,hello){
   console.log("We are working on task");
   setTimeout(() =>{
      console.log("Inside here");
   },6000);
   console.log("We have completed the task");
   hello();
}

console.log("Start testing Callbacks");

//Set timeout is best example for asynchronous programming in javascript 

//setTimeout(toDoTask(1,hello),3000);


// All we need callbacks to check one we call asynchronous function that is performed well on throw an error 
// Let take an example we call POST api and we get response from it we call another function which log the response so we get to know it is completed

//To Another example where we load one script in html tag  and callback hello function to know script is loaded

function loadScript(src,callback){
    var script = document.createElement("script");
     script.src = src;
     script.onload = function(){
        console.log("Script is loaded");
        callback();
     }

     script.onerror = function(){
        console.log("Script is not loaded error occured");
        callback();
     }
     document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello);