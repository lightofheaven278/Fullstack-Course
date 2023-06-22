//Declare a function to check if a number is prime
function checkPrimeNum(prime) {
    if (prime > 1) {
        for (let i = 2; i <= Math.sqrt(prime); i++) {
            if (prime % i == 0) {
                return false;
            }
        }
        return true;
    }
}

//Declare a function to print out prime numbers
function printOutPrime(n) {
    let arr = [];
    // let count = 0;
    while (arr.length < n) {
        if (checkPrimeNum(prime)) {
            console.log(prime);
            arr.push(prime);
            // count++;
        }
        prime++;
    }
}

let n = Number(prompt("Please input a number"));
let prime = 2;
printOutPrime(n);