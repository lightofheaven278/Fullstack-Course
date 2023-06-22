var arrInt = [];
arrInt.length = 5;
let i;
var sumEven = 0;
var sumOdd = 0;

console.log("Here is arrayInt 's elements:");
for (i = 0; i < arrInt.length; i++) {
  arrInt[i] = parseInt(prompt("Please input an integer"));
  console.log(arrInt[i]);
}

console.log("Here is even elements:");
for (i = 0; i < arrInt.length; i++) {
  if (arrInt[i] % 2 == 0) {
    console.log(arrInt[i]);
    sumEven += arrInt[i];
  }
}
console.log("Sum of the even elements is : " + sumEven);

console.log("Here is odd elements:");
for (i = 0; i < arrInt.length; i++) {
  if (arrInt[i] % 2 != 0) {
    console.log(arrInt[i]);
    sumOdd += arrInt[i];
  }
}
console.log("Sum of the odd elements is : " + sumOdd);

console.log("Here is primes:");
for (i = 0; i < 5; i++) {
  let checkPrime = true;
  if (arrInt[i] >= 2) {
    for (let j = 2; j <= Math.sqrt(arrInt[i]); j++) {
      if (arrInt[i] % j == 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log(arrInt[i]);
    }
  }
}

//Arrange the elements of array while value of elements is gradually decrease
arrInt.sort(function(a, b){return b-a});
console.log(arrInt);

let number = parseInt(prompt('Please input an integer'));
let newArray = arrInt.filter(num => num == number);
let result = newArray.length

console.log("Here is the number of " + number + " in arrInt: " + result);
