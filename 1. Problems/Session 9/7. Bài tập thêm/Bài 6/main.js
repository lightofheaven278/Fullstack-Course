let studentId = prompt('Please input student ID');
let studentName = prompt('Please input your name');
let cssScore = prompt('Please input CSS Score');
let htmlScore = prompt('Please input HTML Score');
let javascriptScore = prompt('Please input Javascript Score');
let averagePoint = (parseFloat(cssScore) + parseFloat(htmlScore) + parseFloat(javascriptScore))/3;
var lineBrake = '</br>';

document.write('Student ID: ' + studentId);
document.write(lineBrake);

document.write('Name: ' + studentName);
document.write(lineBrake);

document.write('CSS Score: ' + cssScore);
document.write(lineBrake);

document.write('HTML Score: ' + htmlScore);
document.write(lineBrake);

document.write('Javascript Score: ' + javascriptScore);
document.write(lineBrake);

document.write('Average point: ' + averagePoint);
