// while (true) {
//     let number = Number(prompt('Please input the number which has 3 characters'));
//     var numberArr = Array.from(String(number), Number);
//     let result = Math.pow(Number(numberArr[0]), 3) + Math.pow(Number(numberArr[1]), 3) + Math.pow(Number(numberArr[2]), 3);
//     if (number == result) {
//         console.log('Here is the Armstrong number: ' + number);
//         break;
//     }
// }

// chat GPT result

// function isArmstrongNumber(number) {
//     var sum = 0;
//     var temp = number;
//     var numDigits = number.toString().length;

//     while (temp > 0) {
//       var digit = temp % 10;
//       sum += Math.pow(digit, numDigits);
//       temp = Math.floor(temp / 10);
//     }

//     return number === sum;
//   }

//   function findArmstrongNumbers() {
//     var armstrongNumbers = [];

//     for (var i = 100; i < 1000; i++) {
//       if (isArmstrongNumber(i)) {
//         armstrongNumbers.push(i);
//       }
//     }

//     return armstrongNumbers;
//   }

//   var armstrongNumbers = findArmstrongNumbers();

//   console.log("Các số Armstrong có 3 chữ số là: " + armstrongNumbers.join(", "));

for (let number = 101; number < 1000; number++) {
  var firstNumber = number % 10;
  var secondNumber = Math.floor(number / 10) % 10;
  var thirdNumber = Math.floor(number/100) % 10;
  if (
    Math.pow(firstNumber, 3) +
      Math.pow(secondNumber, 3) +
      Math.pow(thirdNumber, 3) ==
    number
  ) {
    console.log(number);
  }
}
