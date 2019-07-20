function buildQuiz() {
    var output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        var answers = [];

        // I don't know how to get the radio tag into each element
        // not my code----------------------------------------------------------------
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
    // -----------------------------------------------------------
}

function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var numberCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        // I don't know how to check the radio button that user selects and 
        // capture the user's answer, not my code -------------------------
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // ----------------------------------------------------------------------
        if (userAnswer === currentQuestion.correctAnswer) {
            numberCorrect++;
           
        } 
    });

    // poor use of template literals :( 
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

// don't know how to properly use set to count down
$("#start").on("click", function() {
    var countDown = setInterval(function() {

        var counter = parseInt($("#countdown").html());
        // console.log(counter);

        if (counter !== 0) {

            $("#countdown").html(counter - 1);

        } else if (counter === 0) {
            alert("You lose!");
            
        }

    }, 1000);
});



buildQuiz();
// countdown function is called here,
// countdown();

submitButton.addEventListener("click", showResults);
