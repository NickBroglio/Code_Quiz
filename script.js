let viewHighScore = document.getElementById("view-highscore");
let timerCounter = document.getElementById("timer-counter");
let questionBox = document.getElementById("question-box");
let startButton = document.getElementById("start-button");
let timer;
let timerCount = 100;
let selections = [];
let indexNumber = 0;
let randomizedQuestions = [];


// this array list all the questions and their answers
let quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed within ",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _ when being assigned to variables",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "paraenthesis",
        correctAnswer: "c"
    },
]

startButton.addEventListener("click", startTimer);
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerCounter.textContent = "Time: " + timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
        else if (timerCount > 0) {
            passQuiz();
        }
    }, 1000);
}

function orderQuestions() {
    while (randomizedQuestions.length <= 4) {
        let order = questions[Math.floor(Math.random() * questions.length)]
        if (!randomizedQuestions.includes(order)) {
            randomizedQuestions.push(order);
        }
    }
}

function nextQuestion(){
    
}




