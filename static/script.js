// JavaScript for quiz selection and interactivity

let currentQuizData = {};
let currentQuestionIndex = 0;
let highScore = 0;
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

// Function to fetch the high score for the selected quiz
async function fetchHighScore(quizName) {
    const response = await fetch(`/get_high_score/${quizName}`);
    const data = await response.json();
    highScore = data.high_score;
    document.getElementById("score").innerText = `High Score: ${highScore}`;
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

// Function to update the high score if the current score is higher
async function updateHighScore() {
    const quizName = document.getElementById("quiz-selector").value;
    if (score > highScore) {
        const response = await fetch(`/update_high_score/${quizName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ score: score })
        });
        const data = await response.json();
        document.getElementById("score").innerText = `High Score: ${data.high_score}`;
        alert(data.message);
    } else {
        alert(`Final Score: ${score}. Try again to beat the high score of ${highScore}!`);
    }
}
