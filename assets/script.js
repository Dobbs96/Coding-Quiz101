// What is Global?
var highScore = document.querySelector("a");
var timer = document.querySelector("#timer");

var question = document.querySelector("#question");

var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");

var solution = document.querySelector("#showAnswer");

var start = document.querySelector("#start");
var submit = document.querySelector("#submit");
var resart = document.querySelector("#reset");

var questions = [
  {
    question: "What does CSS stand for?",
    choices: [
      "Cheat Sheet Style",
      "Cascading Style Sheet",
      "Cascading Sheet Stlye",
      "Check Style Seed",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "When was HTML first version written?",
    choices: ["1996", "2003", "1893", "1993"],
    answer: "1993",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperSpace Travel More Luke",
      "Hypertext Makeup Link",
      "Hypertext Markup Language",
      "How To Make Languages",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "What is JavaScript?",
    choices: ["CheatSheet", "Programming Language", "It long for Java", "JS"],
    answer: "Programming Language",
  },
  {
    question: "Which is not part of display: property?",
    choices: ["Flex", "Block", "Inline-flex", "Wrap"],
    answer: "Wrap",
  },
  {
    question: "What is not an element in HTML?",
    choices: ["<base>", "<head>", "<body>", "<shoe>"],
    answer: "<shoe>",
  },
  {
    question: "Which is not a CSS property?",
    choices: ["c-index", "border", "background-repeat", "left"],
    answer: "c-index",
  },
  {
    question: "Who create JavaScript?",
    choices: ["Ben", "Yan Zhu", "Brendan Eich", "James Gosling"],
    answer: "Brendan Eich",
  },
  {
    question: "What does Console.log('Hello World') do?",
    choices: [
      "Prints Hello World in the body",
      "Prints Hello World in sources",
      "Prints Hello World in the console",
      "Error",
    ],
    answer: "Prints Hello World in the console.",
  },
  {
    question: "What does Console.log(2+'2') print",
    choices: ["2+2", "22", "Error", "4"],
    answer: "22",
  },
];

// Hide RESET / SUBMIT / Correct/Wrong

// startGame
// // listen 'click' START
// // start timer
// // Show QUESTION
// // Show ANSWERS

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
