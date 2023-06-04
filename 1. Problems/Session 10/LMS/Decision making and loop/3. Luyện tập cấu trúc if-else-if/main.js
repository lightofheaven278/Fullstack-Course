let userName = prompt("Who's there?", '');

if (userName == 'Admin') {
   alert('Prepare for inputting password')
} else if (userName == null) {
   alert('Canceled');
} else {
   alert("I don't know you");
}

let pass = prompt('Password?', '');

if (pass == 'TheMaster') {
    alert('Welcome!')
}else if (pass == null) {
    alert('Cancelled');
}else {
    alert("Wrong password!");
}