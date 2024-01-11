//Learn the difference between == and ===

var a = 45;
var b = 45;
var c = '45';

if(a==b){
    console.log("a value equals to b");
}
else{
    console.log("a value does not equal to b");
}

if(a===c){
   console.log("a datatype and value equals to c");
}
else{
   console.log("Either datatype of a not equal to c or value not equals")
}