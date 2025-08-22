// "Lucky Draw" Game
let name = prompt("Enter your name:");
let randomNumber = parseInt (prompt("Enter a number between 1 and 10:"));
let number = Math.floor(Math.random() * 10) + 1;

if (randomNumber == number) {
    console.log(`Congrats ${name}, you won!`)
} else {
    console.log(`Sorry ${name}, try again. Your lucky number was ${number}`)
}

// Find the Largest Number in an Array
let numbers = [];
let count = parseInt(prompt("How many numbers do you want to enter?"));

for (let i = 0; i < count; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}

let largest = Math.max(...numbers);
console.log(`The largest number is: ${largest}`);
console.log(`The numbers you entered are: ${numbers}`);

// Random Birthday Fun
let names = [];
let birthDates = [];

for (let c = 0; c < 2; c++) {
  let name = prompt(`Enter name for person ${c + 1}:`);
  let birthYear = parseInt(prompt("Enter your birth year:"));
  let birthMonth = parseInt(prompt("Enter your birth month (1-12):")) - 1; // months start at 0
  let birthDay = parseInt(prompt("Enter your birth day:"));

  names.push(name);
  birthDates.push(new Date(birthYear, birthMonth, birthDay));
}

// Loop through each person
for (let i = 0; i < names.length; i++) {
  let today = new Date();
  let age = today.getFullYear() - birthDates[i].getFullYear();

  // Adjust if birthday hasn’t happened yet this year
  let hasHadBirthday =
    today.getMonth() > birthDates[i].getMonth() ||
    (today.getMonth() === birthDates[i].getMonth() &&
     today.getDate() >= birthDates[i].getDate());
  if (!hasHadBirthday) {
    age--;
  }

  let luckyNumber = Math.floor(Math.random() * 100) + 1; // random 1-100

  console.log(`HELLO ${names[i].toUpperCase()}!`);
  console.log(`You are ${age} years old.`);
  console.log(`Your lucky number today is: ${luckyNumber}`);
  console.log("----------------------------");
}

