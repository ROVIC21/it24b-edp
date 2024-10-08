 
// Arithmetic Operators
let x = 2;
let y = 4;

let sum = x + y;
console.log(sum);

let diff = x - y;
console.log(diff);

let prod = x * y;
console.log(prod);

let quotient = x / y;
console.log(quotient);


// C.Condation Statements
// Switch
function switchExample(value){
    switch (value){
        case 1:
            console.log('value is 1');
            break;
        case 2:
            console.log('value is 2');
            break;
        default:
            console.log('value is not 1 or 2');
    }
}


// Function Programming
// 1. Determine if a number is odd or even
function isOdd(number){
    return number % 2 !== 0;
}

function isEven(number){
    return number % 2 === 0;
}


// 2. Determine if a number prime
function isPrime(number){
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    return true;
}

// D.Loops
function isPalindrom(s){
    s = s.tolowerCase().replace(/\s+/g,'');
    return s === s.split('').reverse().join('');
}
