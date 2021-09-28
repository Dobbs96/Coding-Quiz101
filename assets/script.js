// What is Global?
var highScore = document.querySelector("a");

var question = document.querySelector("#question");

var solution = document.querySelector("#showAnswer");

var nextBtn = document.getElementById("next");

var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");

// Hide RESET / SUBMIT / Correct/Wrong
// and UnHide
function hide() {}
var unHideAnswers1 = document.querySelector("#answer1");
var unHideAnswers2 = document.querySelector("#answer2");
var unHideAnswers3 = document.querySelector("#answer3");
var unHideAnswers4 = document.querySelector("#answer4");
var shuffleQuestions;
var questionAnswers;
var questionsIndex = 0;

function startUnHide() {
  question.classList.remove("hide");
  start.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);

  nextQuestion();
}

nextBtn.addEventListener("click", () => {
  questionsIndex++;
  nextQuestion();
  if (shuffleQuestions.length > questionsIndex + 1) {
    nextBtn.classList.remove("hide");
    resart.classList.remove("hide");
  } else {
    nextBtn.classList.add("hide");
  }
});
function nextQuestion() {
  resetQ();
  showQuestion(shuffleQuestions[questionsIndex]);
}

function resetQ() {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.choices.forEach((choices) => {
    var button = document.createElement("button");
    button.textContent = choices.text;
    button.classList.add("btn");
    if (choices.correct) {
      button.dataset.correct = choices.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerEl.appendChild(button);
  });
}

function selectAnswer(e) {
  var selectBtn = e.target;
  var correct = selectBtn.dataset.correct;
  setCorrect(document.body, correct);
  Array.from(answerEl.children).forEach((button) => {
    setCorrect(button, button.dataset.correct);
  });
}

function setCorrect(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("rightAnswer");
    finalScore += 2;
  } else {
    element.classList.add("wrong");
    counter -= 2;
  }
}

function clearStatus(element) {
  console.log(element);
  element.classList.remove("rightAnswer");
  element.classList.remove("wrong");
}
var finalScore = 0;
var counter = 50;

// // start timer
var timer = document.querySelector("#timer");
var mainBody = document.querySelector("#main");
var nextBody = document.querySelector("#nextBody");
console.log(nextBody);
function startTimer() {
  start.classList.add("hide");
  var counterInterval = setInterval(function () {
    counter--;
    timer.textContent = counter;
    if (counter <= 0) {
      clearInterval(counterInterval);
      mainBody.classList.add("hide");
      nextBody.classList.remove("hide");

      // show score
      var highScore = document.querySelector(".highScore");
      highScore.innerHTML = `${userName} Final Score is ${finalScore}`;
      // add submit score
    }
  }, 1000);
}
// // Show QUESTION
// startGame
const userName = prompt("What is your name?");
var start = document.querySelector("#start");
// // listen 'click' START
start.addEventListener("click", function () {
  startUnHide();
  startTimer();
});
var resart = document.querySelector("#reset2");

resart.addEventListener("click", function () {
  mainBody.classList.remove("hide");
  counter = 50;
  finalScore = 0;
  startUnHide();
  startTimer();
});

// // Choice correct answer Green
// // // Add points
// // // Show CORRECT! for 1 second
// // // if more Next quetion
// // // else show score

// // Choice wrong answer Red
// // // Minus time
// // // Show WRONG! for 1 second
// // // if more Next quetion
// // // else show score

// // // // Score 2pts a quetion + timeRemaining // // // //

// StartGame

// startTimer

// // if more Next quetion

var questions = [
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cheat Sheet Style", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Cascading Sheet Stlye", correct: false },
      { text: "Check Style Seed", correct: false },
    ],
  },
  {
    question: "When was HTML first version written?",
    choices: [
      { text: "1996", correct: false },
      { text: "2003", correct: false },
      { text: "1893", correct: false },
      { text: "1993", correct: true },
    ],
  },
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "HyperSpace Travel More Luke", correct: false },
      { text: "Hypertext Makeup Link", correct: false },
      { text: "Hypertext Markup Language", correct: true },
      { text: "How To Make Languages", correct: false },
    ],
  },
  {
    question: "What is JavaScript?",
    choices: [
      { text: "CheatSheet", correct: false },
      { text: "Programming Language", correct: true },
      { text: "It long for Java", correct: false },
      { text: "JS", correct: false },
    ],
    answer: "Programming Language",
  },
  {
    question: "Which is not part of display: property?",
    choices: [
      { text: "Flex", correct: false },
      { text: "Block", correct: false },
      { text: "Inline-flex", correct: false },
      { text: "Wrap", correct: true },
    ],
  },
  {
    question: "What is not an element in HTML?",
    choices: [
      { text: "<base>", correct: false },
      { text: "<head>", correct: false },
      { text: "<body>", correct: false },
      { text: "<shoe>", correct: true },
    ],
  },
  {
    question: "Which is not a CSS property?",
    choices: [
      { text: "c-index", correct: true },
      { text: "border", correct: false },
      { text: "background-repeat", correct: false },
      { text: "left", correct: false },
    ],
  },
  {
    question: "Who create JavaScript?",
    choices: [
      { text: "Ben", correct: false },
      { text: "Yan Zhu", correct: false },
      { text: "Brendan Eich", correct: true },
      { text: "James Gosling", correct: false },
    ],
  },
  {
    question: "What does Console.log('Hello World') do?",
    choices: [
      { text: "Prints Hello World in the body", correct: false },
      { text: "Prints Hello World in sources", correct: false },
      { text: "Prints Hello World in the console", correct: true },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What does Console.log(2+'2') print",
    choices: [
      { text: "2+2", correct: false },
      { text: "22", correct: true },
      { text: "Error", correct: false },
      { text: "4", correct: false },
    ],
  },
];
