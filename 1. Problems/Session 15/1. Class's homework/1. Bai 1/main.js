function breakLine() {
  let breakLine = document.createElement("br");
  form.appendChild(breakLine);
}

let div = document.createElement("div");
document.body.appendChild(div);

let h2 = document.createElement("h2");
div.appendChild(h2);
h2.innerHTML = "Student Information";

let form = document.createElement("form");
div.appendChild(form);

let labelName = document.createElement("label");
form.appendChild(labelName);
labelName.innerHTML = "Họ và tên: ";

let inputName = document.createElement("input");
form.appendChild(inputName);
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Please input your full name");
inputName.setAttribute("size", 25);

breakLine();
breakLine();

let labelEmail = document.createElement("label");
form.appendChild(labelEmail);
labelEmail.setAttribute("id", "email");
labelEmail.setAttribute("type", "email");
labelEmail.setAttribute("name", "email");
labelEmail.innerHTML = "Your email: ";

let inputEmail = document.createElement("input");
form.appendChild(inputEmail);
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("placeholder", "Please input your email address");
inputEmail.setAttribute("size", 30);

breakLine();
breakLine();

let labelPhone = document.createElement("label");
form.appendChild(labelPhone);
labelPhone.setAttribute("id", "phone");
labelPhone.setAttribute("type", "number");
labelPhone.setAttribute("name", "phone");
labelPhone.innerHTML = "Your Phone Number: ";

let inputPhone = document.createElement("input");
form.appendChild(inputPhone);
inputPhone.setAttribute("type", "text");
inputPhone.setAttribute("placeholder", "Please input your phone number");
inputPhone.setAttribute("size", 30);

breakLine();
breakLine();

let labelNativePlace = document.createElement("label");
form.appendChild(labelNativePlace);
labelNativePlace.setAttribute("id", "native-place");
labelNativePlace.setAttribute("type", "text");
labelNativePlace.setAttribute("name", "native-place");
labelNativePlace.innerHTML = "Your native place: ";

let inputNativePlace = document.createElement("input");
form.appendChild(inputNativePlace );
inputNativePlace .setAttribute("type", "text");
inputNativePlace .setAttribute("placeholder", "Please input your native place");
inputNativePlace .setAttribute("size", 30);

breakLine();
breakLine();

let labelGender = document.createElement("label");
form.appendChild(labelGender);
labelGender.setAttribute("id", "gender");
labelGender.setAttribute("type", "text");
labelGender.setAttribute("name", "gender");
labelGender.innerHTML = "Your Gender: ";

let inputGenderMale = document.createElement("input");
form.appendChild(inputGenderMale);
inputGenderMale.setAttribute("type", "radio");
inputGenderMale.setAttribute("id", "male");

let labelGenderMale = document.createElement("label");
form.appendChild(labelGenderMale);
labelGenderMale.setAttribute("id", "male");
labelGenderMale.setAttribute("type", "text");
labelGenderMale.setAttribute("name", "male");
labelGenderMale.innerHTML = " Male ";

let inputGenderFemale = document.createElement("input");
form.appendChild(inputGenderFemale);
inputGenderFemale.setAttribute("type", "radio");
inputGenderFemale.setAttribute("id", "female");
inputGenderFemale.setAttribute("checked","true");

let labelGenderFemale = document.createElement("label");
form.appendChild(labelGenderFemale);
labelGenderFemale.setAttribute("id", "female");
labelGenderFemale.setAttribute("type", "text");
labelGenderFemale.setAttribute("name", "female");
labelGenderFemale.innerHTML = " Female ";

let saveButton = document.createElement("button")
form.appendChild(saveButton);
saveButton.setAttribute("id", "save-but");
saveButton.setAttribute("type", "button");
saveButton.setAttribute("value", "Save");
saveButton.setAttribute("height", 20);
saveButton.setAttribute("width", 30);
saveButton.innerHTML = "Save";


