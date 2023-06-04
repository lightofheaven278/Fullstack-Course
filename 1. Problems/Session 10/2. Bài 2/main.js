let a = parseFloat(prompt('Please input number a'));
let b = parseFloat(prompt('Please input number b'));
let c = parseFloat(prompt('Please input number c'));

if (a<b && a<c) {
    alert(a + ' is minimal number');
} else if (b<a && b<c) {
    alert(b + ' is minimal number');
} else {
    alert(c + ' is minimal number');
};

if (a>b && a>c) {
    alert(a + ' is maximal number');
} else if (b>a && b>c) {
    alert(b + ' is maximal number');
} else {
    alert(c + ' is maximal number');
};