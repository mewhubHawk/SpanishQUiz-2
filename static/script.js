let currentQuizData = {};
let currentQuestionIndex = 0;
let score = 0;
let highScore = 0;
let responses = []; 

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
        document.getElementById("feedback").innerText = "";
        displayQuestion();
        fetchHighScore(quizName);
    }
};

// Function to fetch the high score for the selected quiz
async function fetchHighScore(quizName) {
    const response = await fetch(`/get_high_score/${quizName}`);
    const data = await response.json();
    highScore = data.high_score;
    document.getElementById("score").innerText = `High Score: ${highScore}`;
};

// Function to display the current question
function displayQuestion() {
    const questions = Object.keys(currentQuizData);

    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-container").innerText = questions[currentQuestionIndex];
        document.getElementById("answer").value = "";
        document.getElementById("feedback").innerText = "";
    } else {
        document.getElementById("question-container").innerText = `Your final score is ${score}/${questions.length}`;
        updateHighScores();
        submitQuizResults();
    }
};

// Function to submit an answer
function submitAnswer() {
    const answer = document.getElementById("answer").value.trim();
    const questions = Object.keys(currentQuizData);
    const question = questions[currentQuestionIndex];
    const correctAnswer = currentQuizData[question].replace(/^"(.*)"$/, '$1');

    correct = answer.toLowerCase() === correctAnswer.toLowerCase();
    if (correct) {
        score += 1;       
        document.getElementById("feedback").innerText = `Correct! ${score} right out of ${questions.length}`;
    } else {
        document.getElementById("feedback").innerText = `Incorrect. The correct answer is: ${correctAnswer}`;
    }

    responses.push({
        question: question,
        student_answer: answer,
        correct_answer: correctAnswer,
        correct: correct
    });
    console.log(responses);

    currentQuestionIndex += 1;
    setTimeout(() => { displayQuestion(); }, 3000);
}

// Function to submit the quiz results after completion
async function submitQuizResults() {
    const quizName = document.getElementById("quiz-selector").value;
    await fetch(`/save_responses/${quizName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ responses: responses })
    });
    document.getElementById("feedback").innerText = `Your responses have been saved!`;
    responses = [];
}

// Function to update the high score if the current score is higher
async function updateHighScores() {
    const quizName = document.getElementById("quiz-selector").value;
    if (score > highScore) {
        const response = await fetch(`/update_high_scores/${quizName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ score: score })
        });
        const data = await response.json();
        document.getElementById("score").innerText = `You made a new high score: ${data.high_score}`;
    } else {
        document.getElementById("score").innerText = `You scored: ${score}. Try again to beat the high score of ${highScore}!`;
    }
};

// Fetch incorrect questions for retry
async function loadIncorrectQuestions() {
    const quizName = document.getElementById("quiz-selector").value;
    const response = await fetch(`/load_incorrect_questions/${quizName}`);
    const data = await response.json();

    if (data.incorrect_questions.length > 0) {
        currentQuizData = data.incorrect_questions.reduce((obj, item) => {
            obj[item.question] = item.correct_answer;
            return obj;
        }, {});
    } else {
        alert("No previously incorrect questions to retry.");
        startQuiz(); 
    }

    setTimeout(() => { displayQuestion(); }, 5000);
}
