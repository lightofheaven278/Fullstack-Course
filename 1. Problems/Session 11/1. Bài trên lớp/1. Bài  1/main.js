let arrNumber = [];
arrNumber.length = 5;
for (let i = 0; i < arrNumber.length; i++) {
  arrNumber[i] = Number(prompt("Please input a number"));
  if (arrNumber[i] % 2 == 0) {
    console.log("The even element is:" + arrNumber[i]);
  }
}
arrNumber.pop();
arrNumber.unshift(1, 2);
arrNumber.shift();
console.log(arrNumber);