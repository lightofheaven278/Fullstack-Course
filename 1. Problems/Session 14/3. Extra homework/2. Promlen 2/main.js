function increasingNumber(number) {
  let str = number.toString(10);
  let arr = str.split("");
  if (arr.length < 2) {
    console.log(number + " is not an increasing number");
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      let result = Number(arr[i]) - Number(arr[i + 1]) - 1;
      if (result != 0) {
        return false;
      }
    }
    return true;
  }
}

let number = Number(prompt("Please input a number"));
if (increasingNumber(number)) {
  console.log(number + " is an decreasing number");
} else {
  console.log(number + " is not an decreasing number");
}
