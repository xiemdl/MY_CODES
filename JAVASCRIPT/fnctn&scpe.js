// Calculator Function
// function that has 3 parameters: num1, num2, operate
// perform the operation based on the operator provided
// return the result of the operation
// handle division by zero and invalid operators
function calculate( num1, num2, operate){
    if (operate === '+' ){
        return num1 + num2;
    }else if (operate === '-' ){
        return num1 - num2;
    }else if (operate === '*'){
        return num1 * num2;
    }else if (operate === '/'){
        if ( num2 !== 0 ){
            return num1 / num2;
        }else{
            console.log("CAN'T DIVIDE BY 0")
        }
    }else if (operate === '%'){
           if(num2 !== 0){
            return num1 % num2;
           }else{
            console.log("CAN'T DIVIDE BY 0")
           }
        }else{
        console.log("ERROR!! CANNOT CALCULATE!");
    }
}
console.log(calculate(50,100 , '%'));
console.log(calculate(50,100 , '-'));
console.log(calculate(50,100 , '+'));
console.log(calculate(50,100 , '/'));
console.log(calculate(50,100 , '*'));

// switch version
function solve(num_1, num_2, compute){
    switch (compute){
        case '+':
            return num_1 + num_2;
        case '-':
            return num_1 - num_2;
        case '*':
            return num_1 * num_2;
        case '/':
            // Ternary Operator
            return num_2 !== 0 ? num_1 / num_2 : 'Cannot divide by zero';
        case '%':
             return num_2 !== 0 ? num_1 / num_2 : 'Cannot divide by zero';
        
        default:
            return 'Cannot Compute';
     }
}

console.log(solve(50,100 , '%'));
console.log(solve(50,100 , '-'));
console.log(solve(50,100 , '+'));
console.log(solve(50,100 , '/'));
console.log(solve(50,100 , '*'));

// Palindrome Checker
let word = prompt("Enter a word:");
let lower = word.toLowerCase();
let reversed = word.split("").reverse().join("");

function isPalindrome(){
    if( lower === reversed){
        return word + " _ " + "Yes, it's a palindrome!";
    } else{
        return word + " _ " + "No, it's not a palindrome.";
    }  
}

let change = isPalindrome();
console.log(change);


