let htmlScore = parseFloat(prompt('Please input your html score'));
let cssScore = parseFloat(prompt('Please input your css score'));
let jsScore = parseFloat(prompt('Please input your js score'));
let average = (htmlScore + cssScore +jsScore)/3;

if (average < 5) {
    alert('Rank is lowest')
} else if (average < 6) {
    alert('Rank is low');
} else if (average < 7) {
    alert('Rank is intermediate');
} else if (average < 8) {
    alert('Rank is upper intermediate')
} else if (average < 9) {
    alert('Rank is advance');
} else {
    alert('Rank is beyond advance');
};