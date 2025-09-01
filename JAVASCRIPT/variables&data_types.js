console.log("jjajaja");
console.log("HAHHAHAHH");

//array
//array literal
let fruits = ["banana", "apple", "strawberry", "mango"];
console.log(fruits[0]); // Output: banana
console.log(fruits[1]); // Output: apple

// array(CONSTRUCTOR)
let haha = new Array(0, 30,100, 50, 60);
console.log(haha.length[4]);

let hh = new Array(1000, 20, 30);
console.log(hh[0]); // Output: 10

//initializing variables
let name = "shie";
console.log(name);

let firstname = "SHIELA";
firstname = "MADEL";
console.log(firstname);

let n = 10;
{
    let n = 2; // Block-scoped variable
    console.log(n);
}
console.log(n);

var num = 10;
num = 20;
console.log(num);


// var
var x = 10;
if (true) {
    var x = 20;
}
console.log(x); // Output: 20

// let
let y = 10;
if (true) {
    let y = 50;
}
console.log(y); // Output: 10

// const
const z = 10;

//Creation Using Object Literal
// let obj = {
//     name: "Sourav",
//     age: 23,
//     job: "Developer"
// };
// console.log(obj);

//Creation Using new Object() Constructor
let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "";

console.log(obj)

let nam = { name: "Sourav", age: 230 };
console.log(Object.keys(obj).length);

//primitive data types

let name1 = "shiela"; // String literal
let age = 25; // Number literal
let isStudent = true; // Boolean literal
let lastName = undefined; // Undefined
let address = null; // Null value

//function
let babe = "shiela";
let babe2 ="hehe";
function love(){
    console.log("I love you");
} function me (love){
    console.log("I love you too"+ " " + babe);
}
 love();
 me(love);

 function message (babe, babe2){
    console.log("I love you " + babe + " " +babe2);
 }

 message("shiela", "hehe");

//arrow function
const greet = (name) => {
    console.log("Hello, " + name + "!");
}
greet("Shiela");

 //calculation
// let amount = 30;
 function add (amount){
    return amount + amount;
 }

 console.log(add(100)); 

 function multiply(amount){
    return amount * amount;
 }
console.log(multiply(100));

 function remainder(amount){
    return amount % amount;
 }
console.log(remainder(5550));

function sum(x, y) { 
    return x + y; 
}
console.log(sum(100, 9)); 

function numb(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(numb(5, double));

//Anonymous Functions
setTimeout(function () {
    console.log("purple!");
}, 1000);

//Nested Functions
function outer(a) {
    function inner(b) {
        return a + b;
    }
    return inner;
}

let inner = outer(10);
console.log(inner(5));

//operators
let c = 5;
let s = 3;

// Addition
console.log("c + s = ", c); // 8

// Subtraction
console.log("c - s = ", c - s); // 2

// Multiplication
console.log("c * s = ", c * s); // 15

// Division
console.log("c / s = ", c / s);

// Remainder
console.log("c % s = ", (c % s)); // 2

// Increment
console.log("++x = ", ++c); // x is now 6
console.log("x++ = ", c++);
console.log("x = ", c); // 7

// Decrement
console.log("--x = ", --c); // x is now 6
console.log("x-- = ", c--);
console.log("x = ", c); // 5

// Exponentiation
console.log("x ** y =", c ** s);

// Comparison
console.log(c > s); // true

// Equal operator
console.log((2 == 2)); // true

// Not equal operator
console.log((3 != 2)); // true

// Strict equal operator
console.log((2 === 2)); // true

// Strict not equal operator
console.log((2 !== 2)); // false

// Logical Operator

// Logical AND
console.log((c < 6 && s< 5)); // true

// Logical OR
console.log((c < 6 || s > 6)); // true

// Logical NOT
console.log(!(c < 6)); // false

console.log(!(c > 6)); // true

//condition
if (num < 50){
    console.log("there's a lot of room for improvement");
}else {
    console.log("not adult");
}

//loops 
for (a = 0; a<5; a+-10){
    console.log(a);
}

while (a < 5) {
    console.log(a);
    a++;
}

//OOP
class bbh {
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    info(){
        console.log("Name:" + this.name + "Location:" + this.location);
    }

}
let person = new bbh("haha", "QC");
person.info();


//inheritance
class record extends bbh {
    constructor (age){
        this.age = age;
    }

    final(){
        console.log("Age:" + age);
    }
}

const person2 = new record (21);
person2.final();
