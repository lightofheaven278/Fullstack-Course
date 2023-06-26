function primeCheck(j) {
  if (j < 2) {
    return false;
  }
  if (j >= 2) {
    for (let i = 2; i <= Math.sqrt(j); i++) {
      if (j % i == 0) {
        return false;
      }
    }
  }
  return true;
}

function validateData(number) {
    let p = document.getElementById("display");
  if (isNaN(number)) {
    p.innerHTML = "Please input a number";
    p.style.color = "red";
    return false;
  }
  if (number == "") {
    p.innerHTML = "Please input a number";
    p.style.color = "red";
    return false;
  }
  if (number < 0) {
    p.innerHTML =
      "Please input a number greater than 0";
    p.style.color = "red";
    return false;
  }
  p.innerHTML = "";
  return true;
}

function createDiv(number) {
    for (let j = 0; j <= number; j++) {
        let div = document.createElement("div");
        document.getElementById("container").appendChild(div);
        div.innerHTML += j;
        div.className = "hello";
        if (primeCheck(j)) {
          div.style.background = "red";
        } else if (j % 2 == 0) {
          div.style.background = "green";
        } else {
          div.style.background = "yellow";
        }
      }
}

function generateDiv() {
  let number = document.getElementById("number").value;
  let section = document.getElementById("container");
  section.innerHTML = "";
  if (validateData(number)) {
    createDiv(number);
  }
}
