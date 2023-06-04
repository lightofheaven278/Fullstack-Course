var a = parseInt(prompt('Please input first number'));
var b = parseInt(prompt('Please input second number'));
var c = parseInt(prompt('Please input third number'));
var lineBreak = '</br>';

let firstResult = (a > b && a > c )? a + ' is the biggest number' : (b > a && b > c) ? b + ' is the biggest number' : c + ' is the biggest number';
document.write(firstResult);
document.write(lineBreak);

let secondResult = (a < b && a < c) ? a + ' is the smallest number' : (b < a && b < c) ? b + ' is the smallest number' : c + ' is the smallest number';
document.write(secondResult);
