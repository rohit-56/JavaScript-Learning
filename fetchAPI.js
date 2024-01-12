// When we are using fetch to call POST , GET http methods then this fetch will work as promise and return two state resolev or reject

//Basic Syntax of Fetch is we need to then() first then() will convert response into JSON,text() 
//or any other format and in second then we used the response value

// let p = fetch(url, OPTIONS)
// p1.then((response)=>{
//     console.log(response.status);
//     console.log(response.headers);
//     console.log(response.ok);
//     return response.json();
// }).then((value)=>{
//    console.log(value);
// })

// We will Async/Await with fetch api using JSONPlaceholder Example

let options = {
    title: 'Rohit',
    body: 'We need to improve technical skills',
    userId: 1,
  };

async function createToDo(){
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
            'Content-type':'application/json; charset=UTF-8',
        },
    });

    let response = await p.json();

    console.log("Response we got from POST API is ",response);
}

async function getToDoTask(id){
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);

    let response = await p.json();
    
    console.log("Response we got from POST API is ",response);
}

const mainfunc = async () =>{
    await createToDo();

    console.log("POST Request Completed");

    await getToDoTask(1);

    console.log("GET Request Completed");
}

mainfunc();
