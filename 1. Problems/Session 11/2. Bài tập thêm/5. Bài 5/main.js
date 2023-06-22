let a = parseInt(prompt("Please input an integer a"));
let b = parseInt(prompt("Please input an integer b"));
let arrInt = [];


if (a < b) {
    for (let i = a + 1; i < b; i++) {
        arrInt.push(i);
    }
} else if (a > b) {
    for (let i = b + 1; i < a; i++) {
        arrInt.push(i);
    }
} else {
    console.log("There is no elements (integer) between a and b");
}

console.log("Here is arrInt: ", arrInt);

