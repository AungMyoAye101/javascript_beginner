const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What is React used for javascript",
    options: ["Libary", "Framswork", "Api", "Tools"],
    answer: "Libary",
  },
  {
    question: "question 4",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
];

const quizeCon = document.getElementById("container");
// initial render

let currIndex = 0;
let questionPerPage = 2;

const render = () => {
  quizeCon.innerHTML = "";
  for (let i = 0; i < questionPerPage; i++) {
    const questionIndex = currIndex + i;

    if (questionIndex < questions.length) {
      const divCon = document.createElement("div");
      divCon.innerHTML = `<h3> ${questions[questionIndex].question}</h3>`;
      const optCon = document.createElement("div");

      questions[questionIndex].options.map((opt) => {
        const label = document.createElement("label");
        label.innerHTML += `<input type="radio" name="question${questionIndex}" value="${opt}" /> ${opt} `;
        optCon.appendChild(label);
      });
      divCon.appendChild(optCon);
      console.log(divCon);
      quizeCon.appendChild(divCon);
    }
  }
};
render();

// // check answer
// const checkAnswer = (question) => {
//   let scores = 0;
//   question.map((q, i) => {
//     const selectedAnswer = document.querySelector(
//       `input[name="question${i}"]:checked`
//     );
//     if (selectedAnswer && selectedAnswer.value === q.answer) {
//       scores++;
//     }
//   });
//   console.log(scores);
//   document.getElementById(
//     "result"
//   ).textContent = `Scores ${scores} / ${question.length}`;
// };
// // next question section
// const nextQues = () => {
//   let initialNum = 0;
//   const nextQ = questions.slice(initialNum, initialNum + 2);
//   initialNum += 2;
//   updateQuestion(nextQ);
// };
// nextQues();
// document.getElementById("btn").onclick = () => {
//   checkAnswer(questions);
// };
document.getElementById("next").onclick = () => {
  currIndex = +questionPerPage;
  render();
};
