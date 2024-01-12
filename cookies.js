// Cookies are the data in key-value pair stored in our browser and maximum cookies we can store 20 but also it depends upon the browser
// When we write in document.cookie it always append the new cookie in existing cookie 
// Cookies are separated by delimiter semi-colon and we can add only one cookie at a time

//Example to add cookie as name:rohit

document.cookie = "Captain=Rohit2510"

let key = prompt("Enter the key");
let value = prompt("Enter the value");

document.cookie = `${key}=${value}`;

// If we are taking any specail characteer as key or value then we should use encodeURIComponent

setTimeout(()=>{
    let key = prompt("Enter the key");
    let value = prompt("Enter the value");
    
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    
},10000);



// local storage is also data storage in our browser we can store data in key-value pair 
// difference between local storage and session storage is when we close the tab or open new tab then session storage is clear but local storage exists same