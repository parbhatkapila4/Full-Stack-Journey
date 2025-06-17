const quizData = [
  {
    question: "What is the difference between var, let, and const?",
    a: "They are all the same.",
    b: " var is block-scoped, let and const are function-scoped.",
    c: "var is function-scoped, let and const are block-scoped.",
    d: " const can be reassigned, let cannot.",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    a: "Number",
    b: "String",
    c: "Float",
    d: "Boolean",
    correct: "c",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    a: "Both compare values and types.",
    b: "== compares value only, === compares value and type.",
    c: "== compares type only, === compares value only.",
    d: "There is no difference.",
    correct: "b",
  },
  {
    question: "What is a closure in JavaScript?",
    a: "A function that is closed after use.",
    b: "A way to define variables globally.",
    c: "A function having access to its outer function’s variables even after the outer function has returned.",
    d: "A block of code that executes immediately.",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>`;
    }
  }
});
