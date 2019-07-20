function buildQuiz() {
    var output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        var answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
    });
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var numberCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numberCorrect++;
           
        } 
    });

    resultsContainer.innerHTML = `${numberCorrect} out of ${questions.length}`;
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

var questions = [{
        question: "Which player in the men's tour has the most grand slam singles titles?",
        answers: {
            a: "Rafael Nadal",
            b: "Novak Djokovic",
            c: "Roger Federer"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the tallest play in the ATP?",
        answers: {
            a: "Ivo Karlovic",
            b: "Kevin Anderson",
            c: "John Isner"
        },
        correctAnswer: "a"
    },
    {
        question: "Which player has the most French Open men's singles titles?",
        answers: {
            a: "Stan Wawrinka",
            b: "Rafael Nadal",
            c: "Andy Murray"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the most popular backhand technique in tennis today?",
        answers: {
            a: "Double handed backhand",
            b: "Single handed backhand"
        },
        correctAnswer: "a"
    }
];

buildQuiz();

submitButton.addEventListener("click", showResults);
