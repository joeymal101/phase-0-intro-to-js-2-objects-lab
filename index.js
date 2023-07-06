const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway',
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee, name:'Sam', streetAddress:'11 Broadway'};

  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = '12 Broadway';

  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployees = {...employee[key]};
  delete newEmployees[key];

  return newEmployees;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
