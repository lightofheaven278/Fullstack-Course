let rate = parseInt(prompt('Please input rate'));
let basicSalary = parseInt(prompt('Please input basic salary'));
let commission = parseInt(prompt('Please input your commission'));
let salary = (rate + commission) * basicSalary;
document.write('Here is your salary: ' + salary)