class TransportCard {
    constructor(name){
        this.name = name;
    }

    formCreated(){
        console.log("Generic Card is Created for user "+ this.name);
    }
}

class RailwayCard extends TransportCard{
    constructor(name,trainno){
        super(name);
        this.trainno = trainno;
    }

    BookSeats(coachnumber,seatnumber){
        this.coachnumber = coachnumber;
        this.seatnumber = seatnumber;
        console.log(`Hi ${this.name} your seat booked in Coach ${this.coachnumber} and your seat is ${this.seatnumber}`);
    }
}
class MetroCard extends TransportCard{
    constructor(name,city){
        super(name);
        this.city = city;
    }

    SetNearByStation(stationname){
        this.stationname = stationname;
        console.log(`Hi ${this.name} your nearest station confirmed as ${this.stationname}`);
    }
}

let rohitRailwayCard = new RailwayCard("Rohit",1220093);
rohitRailwayCard.BookSeats("A1",45);

let rohitMetroCard = new MetroCard("Rohit","Noida");
rohitMetroCard.SetNearByStation("Rajiv metro station")

// Prototypes - By Default there is always a prototype object with Object, also Prototype object is parent of object we can also 
//set our custom prototype of a project by defining its properties

let objectCheckItDefaultPrototype = {
    "name":"Rohit",
    "role":"Developer",
    "age":25
}
console.log(objectCheckItDefaultPrototype);

let a = {
    "test":"prototype"
}

a.__proto__ = {
    run : ()=>{
        console.log("This log is for prototype object of a object");
    }
}
a.run();


// Learn Static Methods and Getters, Setters

// When we required a method which we need to create inside class but don't give object to give it access it only use bt class name
// then we define method as static method inside class

class Employee{
    constructor(location){
        this.location = location;
        Employee.locationCode(this.location);
    }

    get getCode(){
        return this.code;
    }

    set setCode(code){
        this.code = code;
    }


    static locationCode(location){
        if(location=="NOIDA"){
            this.code = "EE";
        }else{
            this.code = "AE"
        }

        console.log("Location Code is "+this.code);
    }
}

let e1 = new Employee("NOIDA");
