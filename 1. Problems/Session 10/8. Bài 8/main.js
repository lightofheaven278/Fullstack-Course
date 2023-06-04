let n = Number(prompt('Please input a number'));
let sum = 0;
let number = 0;
for (number=0; number < n; number++) {
    if (number%2 == 0) {
        console.log(number);
        sum += number;
    }
}

console.log(sum);

