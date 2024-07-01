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
  let questionHtml = "";
  questions.map((ques, i) => {
    questionHtml += `
    <div class="quize-con">
          <h3>${ques.question}</h3>
          <div id="options">
           
          
        </div>
    `;
    console.log(document.getElementById("options"));
    // optionQuize(ques.options, i);
  });
  quizeCon.innerHTML = questionHtml;
};
const optionQuize = (opt, i) => {
  const optionLabel = document.getElementById("options");
  let html = "";
  opt.map((option) => {
    html += ` <label>
    <input type="radio" name="question${i}" value="${option}" />
    ${option}
  </label>`;
  });
  optionLabel.innerHTML = html;
};
updateQuestion();
