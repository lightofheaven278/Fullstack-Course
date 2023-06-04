function getMonth() {
    let data = parseInt(document.getElementById('month').value);
    switch (data) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML = 'This month has 31 days';
            break;
        case 2:
            document.getElementById('result').innerHTML = 'This month has 28 days ( normal year) or 29 days (leap year)';
            break;
    }
}