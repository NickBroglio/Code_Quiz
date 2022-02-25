let viewHighScore = document.getElementById("view-highscore");
let timerCounter = document.getElementById("timer-counter");
let questionContainer = document.getElementById("question-container");
let startButton = document.getElementById("start-button");
let correctAlert = document.getElementById("correct-alert");
let timer;
let timerCount = 100;
let selections = [];
let indexNumber = 0;
let randomizedQuestions = [];
let userChoice;
let optionsEL = document.getElementById("options");
let finalScore = document.getElementById("final-score");

let submitButton = document.getElementById("submit-button");


// this array list all the questions and their answers
let quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above",],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "paraenthesis",],
        correctAnswer: "quotes"
    },
]
// once start button cliked, then timer starts
startButton.addEventListener("click", startTimer);
function startTimer() {
    let startScreen = document.getElementById("start-screen");
    // once function is run, the start screen hides 
    startScreen.setAttribute("class", "hide");
    questionContainer.removeAttribute("class")
    // the timer is set to 100 seconds
    timer = setInterval(function () {
        timerCount--;
        timerCounter.textContent = "Time: " + timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
    // function here starts displaying content
    displayQuestions();
}

function displayQuestions() {
    let currentQuestion = quizQuestions[indexNumber];
    let questionEL = document.getElementById("question");
    questionEL.textContent = currentQuestion.question;
    optionsEL.innerHTML = "";
    currentQuestion.options.forEach(function (option, i) {
        let optionBtn = document.createElement("button");
        optionBtn.setAttribute("class", "option");
        optionBtn.setAttribute("value", option);
        optionBtn.textContent = i + 1 + ". " + option;
        optionBtn.onclick = checkAnswer;
        optionsEL.appendChild(optionBtn);
    });
}

function checkAnswer() {
    if (this.value !== quizQuestions[indexNumber].correctAnswer) {
        timerCount -= 10;
        if (timerCount < 0) {
            timerCount = 0
        }
    }
    indexNumber++;
    if (indexNumber === quizQuestions.length) {
        endGame();
        clearInterval(timer);
        finalScore.textContent = timerCount;
    } else {
        displayQuestions();
    }
}

function endGame() {
    // hide questions show end screen
    let endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
    console.log("endgame");
}





submitButton.addEventListener("click", function(event){

localStorage.setItem("initials", JSON.stringify(initials));
localStorage.setItem("score", JSON.stringify(timerCount));
console.log(timerCount)
console.log(initials)
});
// event listener for intial form

// get inital value and put in local storage


