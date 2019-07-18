var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

fucntion buildQuiz() {
    var output = [];


    questions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];

            for(letter in currentQuestion.answers) {
                answers.push(
                    `<lable>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </lable>`
                );
            }


        }

    );

}


function showResults() {

}

buildQuiz();


submitButton.addEventListener('click', showResults);

var questions = [
    {
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