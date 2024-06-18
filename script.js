//positive or negaitive numbers checker
const isPositive = (num) => {
  if (num > 0) {
    console.log(num + " is positive number");
  } else if (num < 0) {
    console.log(num + " is negative number");
  } else {
    console.log(num + " is neither positive nor negative number");
  }
};
//  Even or Odd number checker
const isEvenOrOddNum = (num) => {
  let result = num % 2 === 0 ? num + " is even number" : num + " is odd number";
  console.log(result);
};
// comparison operator function
const comparisonChecker = (numOne, numTwo) => {
  if (numOne > numTwo) {
    console.log(numOne + " is greaterthan " + numTwo);
  } else if (numOne < numTwo) {
    console.log(numTwo + " is greaterthan " + numOne);
  } else {
    console.log("Both numbers are the same.");
  }
};
// Grade calculator
const gradeCalculator = (scores) => {
  let result = scores >= 90 ? "Your grade is A" : "Your grade is B";
  console.log(result);
};
// Number guessing game
const guessNum = (num) => {
  // let secretNum =Math.round(Math.ramdom());
  const secretNum = 10;
  if (num > secretNum) {
    console.log("secret number is lower than " + num);
  } else if (num < secretNum) {
    console.log("secret number is highter than " + num);
  } else {
    console.log("Congratulatons! your answer is correct");
  }
};
