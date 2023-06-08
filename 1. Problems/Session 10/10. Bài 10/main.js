let index = Number(prompt("Please input a number"));
let checkPrime = true;
for (let i = 2; i <= Math.sqrt(index); i++) {
  if (index % i == 0) {
    checkPrime = false;
    break;
  }
  if (checkPrime) {
    console.log(index);
  }
}
