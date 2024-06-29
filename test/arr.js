// const student = {
//   name: "Mg Mg",
//   age: 11,
//   grade: "",
// };

// const gradeCalulator = () => {
//   // if (student.age === 6) {
//   //   student.grade = "Grade-1";
//   // } else if (student.age === 7) {
//   //   student.grade = "Grade-2";
//   // } else if (student.age === 8) {
//   //   student.grade = "Grade-3";
//   // } else {
//   //   student.grade = "";
//   // }
//   switch (student.age) {
//     case 6:
//       student.grade = "Grade-1";
//       break;
//     case 7:
//       student.grade = "Grade-2";
//       break;
//     case 8:
//       student.grade = "Grade-3";
//       break;
//     case 9:
//       student.grade = "Grade-4";
//       break;
//     case 10:
//       student.grade = "Grade-5";
//       break;
//     case 11:
//       student.grade = "Grade-6";
//       break;
//     case 12:
//       student.grade = "Grade-7";
//       break;
//     case 13:
//       student.grade = "Grade-8";
//       break;
//     case 14:
//       student.grade = "Grade-9";
//       break;

//     default:
//       student.grade = "";
//       break;
//   }

//   console.log(student);
// };
// gradeCalulator();
// // sum even numbers
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumEven = () => {
//   const evenNum = num.filter((num) => num % 2 === 0);
//   let sumResult = 0;
//   const result = evenNum.map((num) => (sumResult += num));
//   return sumResult;
// };
// sumEven();
// //  to do list
// const todoList = [
//   {
//     task: "adc",
//     isCompleted: false,
//   },
//   {
//     task: "adc",
//     isCompleted: false,
//   },
//   {
//     task: "kkk",
//     isCompleted: true,
//   },
// ];
// const addTodo = () => {
//   const task = prompt("add new task");
//   todoList.push({ task, isCompleted: false });
//   console.log(todoList);
// };
// const removeTodo = () => {
//   //   todoList.map((arr, i) => {
//   //     if (arr.isCompleted) {
//   //       console.log(7777);
//   //       todoList.splice(i, 1);
//   //     }
//   //   });
//   const filteredArr = todoList.filter((arr) => !arr.isCompleted);
//   return filteredArr;
// };
// removeTodo();

// School manganement system
const student = {
  name: "Kim Jisoo",
  age: 12,
  grade: 10,
  subject: "",
};

const addSubject = (student, subject) => {
  if (!student.subject) {
    student.subject = subject;
  }
  console.log(student);
};

addSubject(student, "History");
console.log(student);
