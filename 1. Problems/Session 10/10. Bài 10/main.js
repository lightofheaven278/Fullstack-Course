let n = Number(prompt("Please input a number"));
let number = 2;

if (n < 2) {
  alert("day khong phai la so nguyen to");
} else {
  for (number = 2; number < n; number++) {
    if (n % number == 0) {
      alert("day khong phai so nguyen to");
      break;
    } 
  }
}
