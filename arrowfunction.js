// Benefits of arrow function

let fun = () => { console.log("Hello")}
fun()

// If we are using one line in a function we can use it without {}

let func = () => console.log("Heloo without {}")
func()

// Also we can write one parameter without ()

let funct = name => console.log(`hello ${name}`);

funct("Rohit")

// Use of this with arrow function

const x = {
    name: "Rohit",
    expr: 2,
    show: function test(){
        console.log(`Namee is ${this.name}`) 
      setTimeout(function(){
        console.log(`Namee is ${this.name}`)
      },3000)
    }
}

x.show()

// In the above example when we want to print this.name it does not print name as every this taking value from parent 
// as above is function test which does not have name so didn't get any value

// To get rid of this problem we have to use arrow function because arrow function calls parent to parent until it does not found
// a value

const y = {
    name: "Rohit",
    expr: 2,
    show: function test(){
        console.log(`Namee is ${this.name}`) 
      setTimeout(()=>{
        console.log(`Namee is ${this.name}`)
      },3000)
    }
}

y.show()