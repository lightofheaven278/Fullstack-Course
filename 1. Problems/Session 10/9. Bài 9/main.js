let n = Number(prompt("Please input a number"));
let number = 0;

for (number = 0; number <= n; number++) {
  if (n % number == 0) {
    console.log(number);
  }
}
