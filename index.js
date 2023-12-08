function startIntro () {
    document.getElementById("intro-wrapper").classList.remove("invisible")
    document.getElementById("form-wrapper").classList.add("invisible")
    
    }

const usersArr = [
    {
      firstName: "Cai",
      secondName: "Panesar",
      userId: 1234,
    },
  ];

  const validateForm = () => {
    let firstName = document.forms["myform"]["fname"].value;
    let secondName = document.forms["myform"]["sname"].value;
    let userId = document.forms["myform"]["uid"].value;
    if (firstName == "") {
      alert("name must be filled out");
      return false;
    } else if (secondName === "") {
      alert("surname must be filled out");
      return false;
    } else if (userId?.length !== 4) {
      alert("user id must be 4 characters");
      return false;
    } else if (isNaN(userId)) {
      alert("user id must be a number");
      return false;
    }

    const isValidUser = usersArr.find(
      (user) => user.userId === Number(userId)
    );
    if (
      isValidUser &&
      firstName.toLowerCase() === isValidUser.firstName.toLowerCase() &&
      secondName.toLowerCase() === isValidUser.secondName.toLowerCase()
    ) {
      alert("You are now logged in");
      startIntro()
      return false;
    } else {
      console.log("you can't log in");
      return false;
    }
  };

function startQuiz() {
    document.getElementById("question-wrapper").classList.remove("invisible")
    document.getElementById("intro-wrapper").classList.add("invisible")
}

function testClick () { //used an function to call the two other functions for the onclick button
    if (validateForm())
    {
        startIntro()
    } else {

    }
}

const questions = [
    {
        question: "Which is the smallest country in the world?",
        answer: "Vatican City",
        possibleAnswers: ["Micronesia", "Iceland", "Vatican City", "Microstan"]
    },
    {
        question: "Which language has the most native speakers?",
        answer: "Mandarin",
        possibleAnswers: ["Mandarin", "Spanish", "Arabic", "English"]
    },
    {
        question: "Which artist has the most streams on Spotify?",
        answer: "Drake",
        possibleAnswers: ["Justin Bieber", "Drake", "Taylor Swift", "Rihanna"]
    },
    {
        question: "What year was the United Nations established?",
        answer: "1945",
        possibleAnswers: ["1946", "1945", "1919", "1901"]
    }
];

let score = 0;
let currentQuestionIndex = 0; //Made this an global variable

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
        document.getElementById("scoreP").innerText = `Quiz completed! Your score: ${score}/${questions.length}`
        scorePage()
    }
}

function scorePage() {
    document.getElementById("question-wrapper").classList.add("invisible")
    document.getElementById("end-wrapper").classList.remove("invisible")
    moveToNextQuestion()
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

