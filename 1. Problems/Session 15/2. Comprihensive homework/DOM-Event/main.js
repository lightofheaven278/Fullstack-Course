document.body.innerHTML = `
<section>
<div class="form">
    <form action="#">
        <h2>Student Information</h2>
        <table class="first-table">
            <tr>
                <td><label for="student-id">Student ID:</label></td>
                <td><input type="text" id="student-id" name="student-id" placeholder="Please input your ID"></td>
            </tr>
            <tr>
                <td><label for="fname">Full Name:</label></td>
                <td><input type="text" id="fname" name="fname" placeholder="Please input your full name"></td>
            </tr>
            <tr>
                <td><label for="email">Email:</label></td>
                <td><input type="email" id="email" name="email" placeholder="Please input your email"></td>
            </tr>
            <tr>
            <td><label for="phone-number">Phone Number:</label></td>
            <td><input type="text" id="phone-number" name="phone-number"></td>
            </tr>
            <tr>
                <td><label for="address">Address:</label></td>
                <td><input type="text" id="address" name="address"></td>
            </tr>
            <tr>
                <td><label for="gender">Gender:</label></td>
                <td><input type="radio" id="male" name="gender" value="Male" checked>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female">
                    <label for="female">Female</label>
                </td>
            </tr>
        </table>
        <input type="submit" value="Save" id="save">
    </form>
</div>
<div class="container-table">
    <h2>Student List</h2>
    <table class="second-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Student ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Gender</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody id = "table-body">
        </tbody>
    </table>
</div>
</section>`;

// Posting value into table
let studentList = [
  [
    "sv0256",
    "Cao Minh Chau",
    "chau@gmail.com",
    "0987631599",
    "thaibinh",
    "female",
  ],
];
let action = "create";

function postDataToTable() {
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  for (let i = 0; i < studentList.length; i++) {
    tbody.innerHTML += `<tr>
                                <td>${i + 1}</td>
                                <td>${studentList[i][0]}</td>
                                <td>${studentList[i][1]}</td>
                                <td>${studentList[i][2]}</td>
                                <td>${studentList[i][3]}</td>
                                <td>${studentList[i][4]}</td>
                                <td>${studentList[i][5]}</td>
                                <td>
                                    <button onclick="editData('${
                                      studentList[i][0]
                                    }')">Edit</button>
                                    <button onclick="deleteData()">Delete</button>
                                </td>
                            </tr>`;
  }
}

// Getting value from form
function getFormData() {
  let studentId = document.getElementById("student-id").value;
  let fullName = document.getElementById("fname").value;
  let emailAddress = document.getElementById("email").value;
  let phoneNum = document.getElementById("phone-number").value;
  let addressInput = document.getElementById("address").value;
  let genderInput = document.querySelector(
    "input[name='gender']:checked"
  ).value;

  // Validate data
  if (studentId == "") {
    alert("Please input student ID");
    return false;
  }

  if (fullName == "") {
    alert("Please input your full name");
    return false;
  }

  let emailCheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailAddress.match(emailCheck)) {
    alert("Please input the correct email format");
    return false;
  }

  let phoneNumCheck = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if (!phoneNum.match(phoneNumCheck)) {
    alert("Please input the correct format of Vietnam phone number");
    return false;
  }

  if (addressInput == "") {
    alert("Please input your address");
    return false;
  }

  return true;
}

function createOrEdit() {
  if (getFormData()) {
    let studentId = document.getElementById("student-id").value;
    let fullName = document.getElementById("fname").value;
    let emailAddress = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone-number").value;
    let addressInput = document.getElementById("address").value;
    let genderInput = document.querySelector(
      "input[name='gender']:checked"
    ).value;
    if (action == "create") {
      studentList.push([
        studentId,
        fullName,
        emailAddress,
        phoneNum,
        addressInput,
        genderInput,
      ]);
    } else {
      let i = getStudentId(studentId);
      studentList[i][1] = fullName;
      studentList[i][2] = emailAddress;
      studentList[i][3] = phoneNum;
      studentList[i][4] = addressInput;
      studentList[i][5] = genderInput;
    }
    document.getElementById("student-id").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("address").value = "";
    document.querySelector("input[name='gender']:checked").value = "";
    postDataToTable();
  }
}

function getStudentId(studentId) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentId == studentList[i][0]) {
      return i;
    }
  }
  return -1;
}

function editData(studentId) {
  let i = getStudentId(studentId);
  if (i >= 0) {
    document.getElementById("student-id").value = studentList[i][0];
    document.getElementById("fname").value = studentList[i][1];
    document.getElementById("email").value = studentList[i][2];
    document.getElementById("phone-number").value = studentList[i][3];
    document.getElementById("address").value = studentList[i][4];
    if (studentList[i][5] == "Male") {
      document.getElementById("male").checked = true;
    } else {
      document.getElementById("female").checked = true;
    }
    action = "edit";
  }
}

function deleteData(studentId) {
  let checkDelete = confirm(
    "Are you sure that you want to delete this student's information"
  );
  if (checkDelete) {
    let i = getStudentId(studentId);
    studentList.splice(i, 1);
    postDataToTable();
  }
}

document.onload = postDataToTable();

let buttonSave = document.getElementById("save");
buttonSave.addEventListener("click", function (event) {
  event.preventDefault();
  createOrEdit();
});
