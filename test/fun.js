//greeding function
const greeding = (name) => {
  if (name.length === 0) {
    return;
  }
  return `Hello ${name}`;
};
console.log(greeding("jisoo"));

//sum function
const sum = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log(error.message);
    return;
  }
  return num1 + num2;
};
console.log(sum(7, 5));

//square function
const square = (num) => {
  return num * num;
};
console.log(square("4"));

//difference function
const difference = (num1, num2) => {
  return num1 - num2;
};
console.log(difference("8", 9));
