let month = parseInt(prompt("Please input the month"));
let year = parseInt(prompt("Please input year"));

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("This month has 31 days");
    break;
  case 2:
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          alert(month + " has 29 days");
        } else {
          alert(month + " has 28 days");
        }
      } else {
        alert(month + " has 29 days");
      }
    } else {
      alert(month + " has 28 days");
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(month + " has 30 days");
    break;
  default:
    alert("The inputted value is invalid");
}
