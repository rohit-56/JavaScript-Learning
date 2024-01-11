//Create a Simple Function to Sum and print the sum

function sumOfTwoNumber(a, b){
    c = a+b;
    console.log(`Sum of Two Numbers ${a} and ${b} is :`,c);
}

//call the above function to sum 30 and 60
sumOfTwoNumber(30,60)



//Now We Will create a array function

const result = (a,b) =>{
    c = a*b;
    console.log(`Product of two numbers ${a} and ${b} is :`,c);
    return c;
}

// Now call the array function using result
let ans = result(30,60);

console.log("Product is ",ans);
