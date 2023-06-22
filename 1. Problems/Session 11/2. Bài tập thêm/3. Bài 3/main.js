let styles = ["Jazz", "Blues"];

// Add Rock-n-Roll at the end of styles
styles.push("Rock-n-Roll");

console.log(styles);

if (styles.length % 2 == 1) {
  styles[(styles.length - 1) / 2] = "Classics";
  console.log(styles);
}

// Deleted an element at the beginning of styles
styles.shift();
console.log(styles);

// Add Rap and Reggae at the beginning of styles
styles.unshift("Rap","Reggae");
console.log(styles);

