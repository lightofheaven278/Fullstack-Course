let arrInt = [];
let sum = 0;

// Using do-while loop to let user input elements into array
do {
    let i;
    arrInt[i] = prompt("Please input a number");

    // Inputting data will be stop when an input is not a number
    if (isNaN(arrInt[i]) || arrInt[i] === null || arrInt[i] == "") {
        break;
    }
    arrInt.push(Number(arrInt[i]));
} while (true)
console.log(arrInt);

// Calculate sum of arrInt elements
for (let i = 0; i < arrInt.length; i++) {
    sum += arrInt[i];
}
console.log("Here is the sum of arrInt elements: " + sum);

// Find Min & Max of arrInt elements
let max = arrInt[0];
let min = arrInt[0];
for (let i = 1; i < arrInt.length; i++) {
    if (max < arrInt[i]) {
        max = arrInt[i];
    }
    if (min > arrInt[i]) {
        min = arrInt[i];
    }
}
console.log("Max elements is " + max);
console.log("Min elements is " + min);

// Using Math.max & Math.min (spread syntax) to find max & min element of arrInt
max = Math.max(...arrInt);
min = Math.min(...arrInt);

console.log("Max elements is " + max);
console.log("Min elements is " + min);

// Delete the undefined elements ("a")
// var result;
// for (let i = 0; i < arrInt.length; i++) {
//     result = arrInt.filter(item => item !== "a");
// }
// console.log(result);

