let age = parseFloat(prompt("Please input your age"));

if (age >= 6 && age <= 18) {
  document.write("Ticket price is 5000");
} else if (age >= 18 && age <= 60) {
  document.write("Ticket price is 10000");
} else {
  document.write("Ticket is Free");
}
