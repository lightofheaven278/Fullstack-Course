/////// Function check odd-even //////////
function oddEvenCheck(number) {
    if (number % 2 == 0) {
        console.log(number + " is even number");
    } else {
        console.log(number + " is odd number");
    }
}

/////// Function check prime or not///////
function primeCheck(number) {
    if (number >= 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                console.log(number + " is not a prime number");
                break;
            }
        }
    }
    console.log(number + " is a prime number");
}

/////// Function check perfect number or not/////
function perfectNumCheck(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    if (number == sum) {
        console.log(number + " is a perfect number");
    } else {
        console.log(number + " is not a perfect number");
    }
}

let number = Number(prompt("Please input a number"));
oddEvenCheck(number);
primeCheck(number);
perfectNumCheck(number);