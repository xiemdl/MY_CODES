
// Base class
class UserProfile {
    #personalInfo;
    constructor(name, age, location, hobbies){
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies.split(",").map(hobby => hobby.trim());

        this.#personalInfo = {
            name: this.name,
            age: this.age,
            location: this.location,
            hobbies: this.hobbies
        };
    }       

    greet(){
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I live in ${this.location}.`);
    }

    listHobbies(){
        console.log("HOBBIES:");
        this.hobbies.forEach((hobby, index) => {
            console.log(`${index + 1}. ${hobby}`);
        });
    }
}

// Subclass with polymorphism
class AgeChecker extends UserProfile {
    constructor(name, age, location, hobbies){
        super(name, age, location, hobbies);
    }

    checkAge(){
        if (this.age >= 25){
            console.log("You are an adult.");
        } else {
            console.log("You are not an adult.");
        }
    }
}

// let name = prompt("Enter your name:");
// let age = parseInt(prompt("Enter your age:"));  
// let location = prompt("Enter your location:");
// let hobbies = prompt("Enter your hobbies (comma separated):");


// ✅ Create objects with actual values
let user = new UserProfile("shie", 21, "Gogon", "Reading, Foodtrip, Gaming");
let person = new AgeChecker("shie", 21, "Gogon", "Reading, Foodtrip, Gaming");

// Call methods
user.greet();
user.listHobbies();
person.checkAge();


function myFunction(){
    document.getElementById("demo").innerHTML = "OFC!"

}   

