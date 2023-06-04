let radius = prompt('Please input the radius of the circle in mm');
let peripheral = 2 * 3.14 * parseFloat(radius);
let area =  3.14 * parseFloat(radius) * parseFloat(radius);
let linebreak = '</br>';

document.write('Peripheral of the circle is  ' + peripheral + ' mm');
document.write(linebreak);
document.write('Area of the circle is  ' + area + ' mm2');