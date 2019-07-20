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
console.log(questions.length);

$("#start-button").on('click', function () {
    $(this).parent().hide();
    $(".container").show();
    countdown(20);
    displayQuestions();
});

var displayQuestions = function () {
    for (i = 0; i < 4; i++) {
        $(".questions").prepend('<div class="' + question[i].name + '"></div>');
        $(questions[i].divClass).append('<div class=')
    }
}