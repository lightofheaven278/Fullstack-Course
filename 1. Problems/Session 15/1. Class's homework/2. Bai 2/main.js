function breakLine () {
    let breakLine = document.createElement("br");
    form.appendChild(breakLine);
}

let div = document.createElement("div");
document.body.appendChild(div);

let h2 = document.createElement("h2");
div.appendChild(h2);
h2.innerHTML = " Student List"

let form = document.createElement("form");
div.appendChild(form);

let labelSearch = document.createElement("label");
form.appendChild(labelSearch);
labelSearch.setAttribute("type", "text");
labelSearch.setAttribute("id", "search");
labelSearch.setAttribute("name", "search");
labelSearch.innerHTML = "Student's Name Search: ";

let inputSearch = document.createElement("input");
form.appendChild(inputSearch);
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("id", "search");
inputSearch.setAttribute("name", "search");
inputSearch.setAttribute("size", 30);
inputSearch.setAttribute("placeholder", "Please input student's name or ID");

let buttonSearch = document.createElement("button");
form.appendChild(buttonSearch);
buttonSearch.setAttribute("type", "button");
buttonSearch.setAttribute("id", "search-but");
buttonSearch.setAttribute("value", "search");
buttonSearch.innerHTML = "Search";

breakLine();
breakLine();

//// Create table
let table = document.createElement("table");
table.setAttribute("border", 1)
div.appendChild(table);

//// Create thead
let tableThead = document.createElement("thead");
table.appendChild(tableThead);

let trZero = document.createElement("tr");
tableThead.appendChild(trZero);

let thNo = document.createElement("th");
trZero.appendChild(thNo);
thNo.innerHTML = "No.";

let thName = document.createElement("th");
trZero.appendChild(thName);
thName.innerHTML = "Full Name";

let thEmail = document.createElement("th");
trZero.appendChild(thEmail);
thEmail.innerHTML = "Email";

let thPhone = document.createElement("th");
trZero.appendChild(thPhone);
thPhone.innerHTML = "Phone Number";

let thAddress = document.createElement("th");
trZero.appendChild(thAddress);
thAddress.innerHTML = "Address";

let thGender = document.createElement("th");
trZero.appendChild(thGender);
thGender.innerHTML = "Gender";

let thAction = document.createElement("th");
trZero.appendChild(thAction);
thAction.colSpan = "2";
thAction.innerHTML = "Action";
 
let buttonSort = document.createElement("button");
trZero.appendChild(buttonSort);
buttonSort.setAttribute("type", "button");
buttonSort.setAttribute("id", "button-sort");
buttonSort.setAttribute("value", "sort-alpha-b");
buttonSort.innerHTML = "sort (anpha b)";

///// Create tbody
///// row 1
let tbody = document.createElement("tbody");
table.appendChild(tbody);

let trFirst = document.createElement("tr");
tbody.appendChild(trFirst);

let tdOne = document.createElement("td");
trFirst.appendChild(tdOne);
tdOne.innerHTML = "1";

let tdRikkei = document.createElement("td");
trFirst.appendChild(tdRikkei);
tdRikkei.innerHTML = "rikkei";

let tdRikkeiMail = document.createElement("td");
trFirst.appendChild(tdRikkeiMail);
tdRikkeiMail.innerHTML = "rikkei@gmail.com";

let tdRealPhoneNum = document.createElement("td");
trFirst.appendChild(tdRealPhoneNum);
tdRealPhoneNum.innerHTML = "0823868888";

let tdHn = document.createElement("td");
trFirst.appendChild(tdHn);
tdHn.innerHTML = "Hanoi";

let tdMale = document.createElement("td");
trFirst.appendChild(tdMale);
tdMale.innerHTML = "Male";

let tdEditLink = document.createElement("td");
trFirst.appendChild(tdEditLink);
let aTag = document.createElement("a");
tdEditLink.appendChild(aTag);
aTag.setAttribute("href", "#");
aTag.innerHTML = "edit";

let tdDeleteLink = document.createElement("td");
trFirst.appendChild(tdDeleteLink);
let aTag2 = document.createElement("a");
tdDeleteLink.appendChild(aTag2);
aTag2.setAttribute("href", "#");
aTag2.innerHTML = "delete";

//row 2
let trSecond = document.createElement("tr");
tbody.appendChild(trSecond);

let tdTwo = document.createElement("td");
trSecond.appendChild(tdTwo);
tdTwo.innerHTML = "2";

let tdAcademy = document.createElement("td");
trSecond.appendChild(tdAcademy);
tdAcademy.innerHTML = "academy";

let tdAcademyMail = document.createElement("td");
trSecond.appendChild(tdAcademyMail);
tdAcademyMail.innerHTML = "academy@gmail.com";

let tdRealPhoneNum2 = document.createElement("td");
trSecond.appendChild(tdRealPhoneNum2);
tdRealPhoneNum2.innerHTML = "0828638888";

let tdHcm = document.createElement("td");
trSecond.appendChild(tdHcm);
tdHcm.innerHTML = "HCM";

let tdFemale = document.createElement("td");
trSecond.appendChild(tdFemale);
tdFemale.innerHTML = "Male";

let tdEditLink1 = document.createElement("td");
trSecond.appendChild(tdEditLink1);
let aTag3 = document.createElement("a");
tdEditLink1.appendChild(aTag3);
aTag3.setAttribute("href", "#");
aTag3.innerHTML = "edit";

let tdDeleteLink1 = document.createElement("td");
trSecond.appendChild(tdDeleteLink1);
let aTag4 = document.createElement("a");
tdDeleteLink1.appendChild(aTag4);
aTag4.setAttribute("href", "#");
aTag4.innerHTML = "delete";







