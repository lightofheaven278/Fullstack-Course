const salary = {
  staffA: 2000,
  staffB: 3000,
  staffC: 4000,
  staffD: 5000,
  staffE: 6000,
};

function totalSalary() {
  let listStaffSalary = Object.keys(salary);
  let sumSalary = 0;
  for (i = 0; i < listStaffSalary.length; i++) {
    sumSalary += salary[listStaffSalary[i]];
  }
  return sumSalary;
}

console.log("The total salary of staffs is " + totalSalary());
