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
const result = document.getElementById("result");
// initial render

let currIndex = 0;
let questionPerPage = 2;

const render = () => {
  quizeCon.innerHTML = "";
  result.innerHTML = "";
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
const checkAnswer = () => {
  let scores = 0;
  for (let i = 0; i < questionPerPage; i++) {
    const questionIndex = currIndex + i;
    const selectedAnswer = document.querySelector(
      `input[name="question${questionIndex}"]:checked`
    );
    if (
      selectedAnswer &&
      selectedAnswer.value === questions[questionIndex].answer
    ) {
      scores++;
    }
  }
  result.textContent = `Scores: ${scores} / ${questionPerPage}`;
};

document.getElementById("btn").onclick = () => {
  checkAnswer();
};
document.getElementById("next").onclick = () => {
  currIndex = +questionPerPage;
  render();
};
