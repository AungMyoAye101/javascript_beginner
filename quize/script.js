const quizeCon = document.getElementById("container");

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
];
const updateQuestion = () => {
  questions.map((ques, i) => {
    const divCon = document.createElement("div");
    divCon.innerHTML = `<h3> ${ques.question}</h3>`;
    const optCon = document.createElement("div");
    ques.options.map((opt) => {
      const label = document.createElement("label");
      label.innerHTML += `<input type="radio" name="question${i}" value="${opt}" /> ${opt} `;
      optCon.appendChild(label);
    });

    divCon.appendChild(optCon);
    quizeCon.appendChild(divCon);
  });
};
updateQuestion();

// check answer
const checkAnswer = () => {
  let scores = 0;
  questions.map((q, i) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${i}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === q.answer) {
      scores++;
    }
  });
  console.log(scores);
  document.getElementById(
    "result"
  ).textContent = `Scores ${scores} / ${questions.length}`;
};
document.getElementById("btn").addEventListener("click", checkAnswer);
