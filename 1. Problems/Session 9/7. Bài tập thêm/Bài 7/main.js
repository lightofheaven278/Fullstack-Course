let width = prompt('Please input width of the rectangular in mm');
let length = prompt('Please input length of the rectangular in mm');
let peripheral = 2 * (parseFloat(width) + parseFloat(length));
let area = parseFloat(width) * parseFloat(length);

document.write('Peripheral of the rectangular is ' + peripheral + 'mm' + '</br>');
document.write('Area of the rectangular is ' + area);