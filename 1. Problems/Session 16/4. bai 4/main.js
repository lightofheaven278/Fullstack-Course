const menu = {
  width: 500,
  height: "menu",
  title: "menu",
};

// let checkNumber1 = console.log(isNaN(menu.width));
// let checkNumber2 = console.log(isNaN(menu.width));
// let checkNumber3 = console.log(isNaN(menu.title));
function multiTwoValue() {
  if (!isNaN(menu.width)) {
    if (!isNaN(menu.height)) {
      let result = menu.width * menu.height;
      return result;
    } else {
      if (!isNaN(menu.title)) {
        let result = menu.width * menu.title;
        return result;
      } else {
        console.log("Cannot calculate as request");
        return false;
      }
    }
  } else {
    if (!isNaN(menu.height)) {
      if (!isNaN(menu.title)) {
        let result = menu.height * menu.title;
        return result;
      } else {
        console.log ("Cannot calculate as request")
      }
    }
  }
}

console.log(multiTwoValue());
