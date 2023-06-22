function increasingNumber(number) {
  let str = number.toString(10);
  if (str.length < 2) {
    console.log(number + " is not an increasing number");
  } else {
    for (let i = 0; i < str.length - 1; i++) {
      let result = Number(str[i + 1]) - Number(str[i]) - x;
      if (result != 0) {
        return number + " is not an increasing number";
      }
    }
    return number + " is an increasing number";
  }
}

let number = Number(prompt("Please input a number"));
let x = Number(prompt("Please input a number x"));
console.log(increasingNumber(number));
