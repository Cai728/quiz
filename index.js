const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        possibleAnswers: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "What is the capital of Spain?",
        answer: "Madrid",
        possibleAnswers: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "What is the capital of Germany?",
        answer: "Berlin",
        possibleAnswers: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "What is the capital of the UK?",
        answer: "London",
        possibleAnswers: ["Paris", "London", "Berlin", "Madrid"]
    }
];

let score = 0;
let currentQuestionIndex = 0;

function updateQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
}

function renderOptions() {
    const currentQuestion = questions[currentQuestionIndex];
    const radioContainers = document.getElementById("answer-radios");
    radioContainers.innerHTML = '';

    currentQuestion.possibleAnswers.forEach((answer, index) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.value = answer;
        radioInput.id = `answer${index + 1}`;

        const label = document.createElement('label');
        label.setAttribute('for', `answer${index + 1}`);
        label.innerText = answer;

        radioContainers.appendChild(radioInput);
        radioContainers.appendChild(label);
        radioContainers.appendChild(document.createElement('br'));
    });
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestion();
        renderOptions();
    } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        moveToNextQuestion();
    } else {
        alert('Please select an answer before moving to the next question.');
    }
}

updateQuestion();
renderOptions();
