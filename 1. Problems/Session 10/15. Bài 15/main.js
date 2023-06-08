let originMoney = Number(prompt('Please input your original money'));
let annualInterest = Number(prompt('Please input your annual interest rate'));
let numberOfMonth = Number(prompt('Please input number of month'));
let paycheck = originMoney;
debugger;
for (let i = 1; i <= numberOfMonth; i++) {
    paycheck = paycheck + (paycheck * (annualInterest / 12));
    var revenue = paycheck - originMoney; 
    console.log(paycheck);
    console.log(revenue);
}
