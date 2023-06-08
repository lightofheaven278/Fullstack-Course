let fuel;
do {
  fuel = Number(prompt("Please input volume offuel"));
  if (isNaN(fuel)) {
    alert("Please input volume of fuel in number");
  } else {
    if (fuel < 5000 || fuel > 30000) {
      alert("Please input the value of volume from 5000 to 30000");
    } else {
      break;
    }
  }
} while (true);

let member;
do {
  member = Number(prompt("Please input number of member"));
  if (isNaN(member)) {
    alert("Please input number of member in number");
  } else {
    if (member < 1 || member > 7) {
      alert("Please input the number of member from 1 to 7");
    } else {
      break;
    }
  }
} while (true);

let height = Math.floor(fuel / (100 * member)) * 50;
let fuelRemain = fuel % (100 * member);
alert("Max height is: " + height);
alert("The remain of fuel is: " + fuelRemain);
