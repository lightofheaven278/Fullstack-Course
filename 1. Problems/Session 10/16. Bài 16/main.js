let firstNum = Number(prompt('Please input the first number'));
let secondNum = Number(prompt('Please input the second number'));
let thirdNum = Number(prompt('Please input the third number'));
let total = firstNum * secondNum * thirdNum;

if (total>0) {
    alert('Total is: ' + '+' + total);
} else if (total<0) {
    alert('Total is: ' + '-' + total);
} else {
    alert('Total is: ' +  total);
}