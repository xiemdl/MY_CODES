// my code pract1
// let num = parseInt(prompt("Enter a number:")); 

// for (let s = 1; s<= 10; s++){
//  if (s % 2 === 0) 
//         continue;
//         console.log(s);
// }

// correcte version
let num = parseInt(prompt("Enter a number:"));  

for (let s = 1; s<= num; s++){
 if (s % 2 === 0) 
        continue;
 if (s > 10)
    break;
        console.log(s);
}

// ( Practice Task for You:
// Write a program that:

// Asks the user for a number.

// Uses a loop to count from 1 to that number.

// Skips even numbers using continue.

// Stops if the number goes above 10 using break.)

// my code pract2 -- generate randum number

// Generate a random number between 1 and 10.

// Ask the user to guess the number (3 attempts only).

// If the guess is correct → show "Correct! You win!" and break.

// If not → show "Wrong! Try again."

// After 3 failed attempts → show "Game Over. The number was X."



// let randomNumber = Math.floor(Math.random()* 10);
// let attempts = 3;

// for (let c = 1; c <= attempts; c++) {
//     let guess = parseInt(prompt(`Attempt ${c}: Guess the number (1-10)`));
//     if (guess === randomNumber){
//         alert("Correct!! Nakuha mo ateq!");
//         break;
//     } else{
//         if (c < attempts){
//         alert("Ooops you got it mali hahaha");    
//         }else{
//         alert("ayy last na yun hahaha" + "  " + randomNumber);      
//     }

//     }
// }


// Task: FizzBuzz Game

// Goal: Print numbers from 1 to a user-specified number. But...

// If the number is divisible by 3, print "Fizz" instead.

// If it's divisible by 5, print "Buzz" instead.

// If it's divisible by both 3 and 5, print "FizzBuzz".

// Otherwise, just print the number.

// let number = parseInt(prompt("Enter a number"));
// for ( let b = 1; b <= number; b++){
//     if ( b % 3 === 0 && b % 5 === 0){
//         console.log(b + "  " + "FizzBuzz");
//     }else if ( b % 3 === 0){
//         console.log(b + "  " + "Fizz");
//     }else if ( b % 5 === 0 ){
//         console.log(b + "  " + "Buzz");
//     }else{
//         console.log(b);
//     }
// }
