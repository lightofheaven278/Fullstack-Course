let number = parseInt(prompt("Please input an integer"));
let result = 0,
  rightmost;
// let text = number.toString();

// document.write("The reversed number is " + Math.sign(number) * parseInt(text.split("").reverse().join("")));

while (number > 0) {
  rightmost = number % 10;
  result = result * 10 + rightmost;
  number = Math.floor(number / 10);
}

alert("The reversed number is: " + result);
