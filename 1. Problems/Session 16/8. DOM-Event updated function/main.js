// document.body.innerHTML = `
// <section>
// <div class="form">
//     <form action="#">
//         <h2>Studen Information</h2>
//         <table class="first-table">
//             <tr>
//                 <td><label for="student-id">Student ID:</label></td>
//                 <td><input type="text" id="student-id" name="student-id" placeholder="Please input your student ID"></td><br>
//                 <small>Please input your student ID</small>
//             </tr>
//             <tr>
//                 <td><label for="fname">Full Name:</label></td>
//                 <td><input type="text" id="fname" name="fname" placeholder="Please input your full name"></td><br>
//                 <small>Please input your full name</small>
//             </tr>
//             <tr>
//                 <td><label for="email">Email:</label></td>
//                 <td><input type="email" id="email" name="email" placeholder="Please input your email"></td><br>
//                 <small>Please input the correct format of email</small>
//             </tr>
//             <tr>
//             <td><label for="phone-number">Phone Number:</label></td>
//             <td><input type="text" id="phone-number" name="phone-number"></td><br>
//             <small>Please input the correct format of Vietnam phone</small>
//             </tr>
//             <tr>
//                 <td><label for="address">Address:</label></td>
//                 <td><input type="text" id="address" name="address"></td><br>
//                 <small>Please input your address</small>
//             </tr>
//             <tr>
//                 <td><label for="gender">Gender:</label></td>
//                 <td><input type="radio" id="male" name="gender" value="Male" checked>
//                     <label for="gender">Male</label>
//                     <input type="radio" id="female" name="gender" value="Female">
//                     <label for="gender">Female</label>
//                 </td>
//             </tr>
//         </table>
//         <button type="submit" id="save" value="submit">Save</button>
//     </form>
// </div>
// <div class="container-table">
//     <h2>Student List</h2>
//     <table class="second-table">
//         <thead>
//             <tr>
//                 <th>#</th>
//                 <th>Student ID</th>
//                 <th>Full Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Address</th>
//                 <th>Gender</th>
//                 <th colspan="2">Action</th>
//             </tr>
//         </thead>
//         <tbody id = "table-body">
//         </tbody>
//     </table>
// </div>
// </section>`

// Getting value from form
function studentList1(studentId, fullName, email, phoneNum, address, gender) {
    this.studentId = studentId;
    this.fullName = fullName;
    this.email = email;
    this.phoneNum = phoneNum;
    this.address = address;
    this.gender = gender;
}

let studentList = [
  [
    "sv456",
    "Cao Minh Chau",
    "chau@gmail.com",
    "0987564123",
    "Thai Binh",
    "Female",
  ],
];
action = "create";

function postDataToTable() {
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  for (let i = 0; i < studentList.length; i++) {
    tbody.innerHTML += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${studentList[i][0]}</td>
                            <td>${studentList[i][1]}</td>
                            <td>${studentList[i][2]}</td>
                            <td>${studentList[i][3]}</td>
                            <td>${studentList[i][4]}</td>
                            <td>${studentList[i][5]}</td>
                            <td>
                                <button onclick = "editData('${
                                  studentList[i][0]
                                }')">Edit</button>
                                <button onclick = "deleteData('${
                                  studentList[i][0]
                                }')">Delete</button>
                            </td>
                        </tr>`;
  }
}

// validate data and transfer data from form to studentList
// Validate data
function validateData() {
  let studentId = document.getElementById("student-id").value;
  let fullName = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phoneNum = document.getElementById("phone-number").value;
  let address = document.getElementById("address").value;

  if (studentId == "") {
    document.getElementById("validate-id").style.visibility = "visible";
    // alert("Please input your student ID");
    return false;
  } else {
    document.getElementById("validate-id").style.visibility = "hidden";
  }

  if (fullName == "") {
    document.getElementById("validate-name").style.visibility = "visible";
    // alert("Please input your full name");
    return false;
  } else {
    document.getElementById("validate-name").style.visibility = "hidden";
  }

  let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(checkMail)) {
    document.getElementById("validate-email").style.visibility = "visible";
    // alert("Please input the correct format of email" + "<br>" + "Exp: abc@gmail.com");
    return false;
  } else {
    document.getElementById("validate-email").style.visibility = "hidden";
  }

  let phoneCheck = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if (!phoneNum.match(phoneCheck)) {
    document.getElementById("validate-phone").style.visibility = "visible";
    // alert("Please input the correct format of Vietnam's phone number");
    return false;
  } else {
    document.getElementById("validate-phone").style.visibility = "hidden";
  }

  if (address == "") {
    document.getElementById("validate-address").style.visibility = "visible";
    // alert("Please input your address");
    return false;
  } else {
    document.getElementById("validate-address").style.visibility = "hidden";
  }
  return true;
}

// Transfer data to studentList
function transferDataToList() {
  if (validateData()) {
    if (action == "create") {
      alert("Registration is successful, congrat!");
    } else {
      alert("The student information is updated, congrat!");
      document.getElementById("student-id").readOnly = false;
    }
    let studentId = document.getElementById("student-id").value;
    let fullName = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone-number").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    if (action == "create") {
      studentList.push([studentId, fullName, email, phoneNum, address, gender]);
    } else {
      let i = getStudentId(studentId);
      studentList[i][1] = fullName;
      studentList[i][2] = email;
      studentList[i][3] = phoneNum;
      studentList[i][4] = address;
      studentList[i][5] = gender;
    }
    document.getElementById("student-id").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("address").value = "";
    postDataToTable();
  }
}

function getStudentId(studentId) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentId == studentList[i][0]) {
      return i;
    }
  }
  // return -1;
}

function editData(studentId) {
  let i = getStudentId(studentId);
  // if (i >= 0) {
  document.getElementById("student-id").value = studentList[i][0];
  document.getElementById("fname").value = studentList[i][1];
  document.getElementById("email").value = studentList[i][2];
  document.getElementById("phone-number").value = studentList[i][3];
  document.getElementById("address").value = studentList[i][4];
  if ((studentList[i][5] = "Male")) {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }
  action = "edit";
  document.getElementById("student-id").readOnly = true;
  // }
}

function deleteData() {
  let deleteCheck = confirm(
    "Please make sure that you want to delete this data"
  );
  if (deleteCheck) {
    let i = getStudentId();
    studentList.splice(i, 1);
    postDataToTable();
  }
}

document.onload = postDataToTable();
let saveData = document.getElementById("save");
saveData.addEventListener("click", function (event) {
  event.preventDefault();
  transferDataToList();
});
