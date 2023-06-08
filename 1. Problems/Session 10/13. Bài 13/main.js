let number;
let sum = 0;

while (true) {
  number = Number(prompt("Please input a number"));
  if (Number.isInteger(number)) {
    if (number > 0) {
      sum += number;
    }
  }
  if (number <= 0) {
    alert("This integer is less than or equal 0");
    break;
  }
}
alert("This is sum of n integer which are greater than 0: " + sum);
