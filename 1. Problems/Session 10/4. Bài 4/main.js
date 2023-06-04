let a = parseFloat(prompt("please input number a"));
let b = parseFloat(prompt("please input number b"));
let calculations = prompt("Please input type of calculation");
let plus = a + b;
let minus = a - b;
let multi = a * b;
let divide = a / b;

switch (calculations) {
  case "+":
    console.log(plus);
    break;
  case "-":
    console.log(minus);
    break;
  case "*":
    console.log(plus);
    break;
  default:
    console.log(divide);
    break;
}
