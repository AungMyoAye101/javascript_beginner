const user = {};
user.name = "Jhon";
user.surname = "Smith";
// change user name
user.name = "Pete";
// delete user name
delete user.name;
console.log(user);

// salary sum
const salaries = {
  jhon: 100,
  Ann: 160,
  Pete: 130,
};
const sum = salaries.jhon + salaries.Ann + salaries.Pete;
console.log(sum);

const employee = [
  { name: "Jhon", salary: 100 },
  { name: "Jhon", salary: 160 },
  { name: "Jhon", salary: 130 },
];
const sumAll = employee[0].salary + employee[1].salary + employee[2].salary;
console.log(sumAll);
