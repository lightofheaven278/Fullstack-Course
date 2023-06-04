let a = parseFloat(prompt("Please input the length of triangle's edge"));
let b = parseFloat(prompt("Please input the length of triangle's edge"));
let c = parseFloat(prompt("Please input the length of triangle's edge"));

if ((a + b) < c || (b + c) < a || (a + c) < b) {
    alert('This is not a triangle at all.');
} else if (a == b || a == c) {
    alert('This is isosceles triangle');
} else if (a == b && a == c) {
    alert('This is isosceles equilateral triangle');
} else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == b*b + a*a) {
    alert('This is isosceles right triangle');
} else if ((a*a == b*b + c*c) && b==c || (b*b == a*a + c*c) && a == c || (c*c == b*b + a*a) && a == b) {
    alert('This is isosceles right-isosceles triangle');
} else {
    alert('This is normal triangle')
}