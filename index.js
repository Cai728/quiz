const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        possibleAnswers: ["Paris", "London", "Berlin", "Marid"]
    },
    {
        question: "What is the capital of Spain?",
        answer: "Madris",
        possibleAnswers: ["Paris", "London", "Berlin", "Marid"]
    },
    {
        question: "What is the capital of Germany?",
        answer: "Berlin",
        possibleAnswers: ["Paris", "London", "Berlin", "Marid"]
    },
    {
        question: "What is the capital of the UK?",
        answer: "London",
        possibleAnswers: ["Paris", "London", "Berlin", "Marid"]
    }
];

let score = 0;

function updateQuestion(question) {
    document.getElementById("question").innerText = question.question
}

function renderOptions(question) {
    document.getElementById("answer-radios").innerText = question.possibleAnswers
}

function moveToNextQuestion() {
    const currentQuestionIndex = questions.indexOf(currentQuestion);
    const nextQuestion = questions[currentQuestionIndex + 1]
    updateQuestion(nextQuestion)
    renderOptions(nextQuestion)
}

function checkAnswer() {
    const usersGuess = document.getElementById("next-btn").value
    if (usersGuess === currentQuestion.answer) {
        score++
        moveToNextQuestion()
    }
    
    }

let currentQuestion = questions[0]
updateQuestion(currentQuestion)
renderOptions(currentQuestion)
