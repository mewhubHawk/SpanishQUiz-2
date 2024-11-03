// JavaScript for quiz selection and interactivity

let currentQuizData = {};
let currentQuestionIndex = 0;
let score = 0;

// Fetch available quizzes on page load
window.onload = async function() {
    const response = await fetch("/get_quizzes");
    const quizzes = await response.json();

    const quizSelector = document.getElementById("quiz-selector");
    quizzes.forEach(quiz => {
        let option = document.createElement("option");
        option.value = quiz;
        option.textContent = quiz.replace("_", " ");
        quizSelector.appendChild(option);
    });
};

// Function to start the selected quiz
async function startQuiz() {
    const quizName = document.getElementById("quiz-selector").value;
    const response = await fetch(`/load_quiz/${quizName}`);
    currentQuizData = await response.json();

    if (currentQuizData.error) {
        alert(currentQuizData.error);
    } else {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById("quiz-content").style.display = "block";
        displayQuestion();
    }
}

// Function to display the current question
function displayQuestion() {
    const questions = Object.keys(currentQuizData);
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-container").innerText = questions[currentQuestionIndex];
        document.getElementById("answer").value = ""; // Clear answer input
    } else {
        // Display final score
        document.getElementById("question-container").innerText = `Your final score is ${score}/${questions.length}`;
    }
}

// Function to submit an answer
function submitAnswer() {
    const answer = document.getElementById("answer").value.trim();
    const questions = Object.keys(currentQuizData);
    const correctAnswer = currentQuizData[questions[currentQuestionIndex]];

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        score += 1;
    }

    currentQuestionIndex += 1;
    displayQuestion();
}