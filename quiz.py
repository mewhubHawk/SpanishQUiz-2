from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__)

QUIZ_DIR = "quizzes"
HIGH_SCORE_FILE = "high_scores.json"

def load_high_scores():
    """Load high scores from the JSON file."""
    if os.path.exists(HIGH_SCORE_FILE):
        with open(HIGH_SCORE_FILE, "r") as file:
            return json.load(file)
    else:
        return {}

def save_high_scores(scores):
    """Save high scores to the JSON file."""
    with open(HIGH_SCORE_FILE, "w") as file:
        json.dump(scores, file)

@app.route("/")
def home():
    """Serve the main HTML page."""
    return render_template("index.html")

@app.route("/get_quizzes")
def get_quizzes():
    """List available quiz files."""
    quizzes = [f.split(".")[0] for f in os.listdir(QUIZ_DIR) if f.endswith(".json")]
    return jsonify(quizzes)

@app.route("/load_quiz/<quiz_name>")
def load_quiz(quiz_name):
    """Load the selected quiz JSON data."""
    quiz_path = os.path.join(QUIZ_DIR, f"{quiz_name}.json")
    if os.path.exists(quiz_path):
        with open(quiz_path, "r") as file:
            quiz_data = json.load(file)
        return jsonify(quiz_data)
    else:
        return jsonify({"error": "Quiz not found"}), 404

@app.route("/get_high_score/<quiz_name>")
def get_high_score(quiz_name):
    """Return the high score for the specified quiz."""
    high_scores = load_high_scores()
    score = high_scores.get(quiz_name, 0)
    return jsonify({"high_score": score})

@app.route("/update_high_score/<quiz_name>", methods=["POST"])
def update_high_score(quiz_name):
    """Update the high score if the new score is higher."""
    new_score = request.json.get("score", 0)
    high_scores = load_high_scores()

    if new_score > high_scores.get(quiz_name, 0):
        high_scores[quiz_name] = new_score
        save_high_scores(high_scores)
        return jsonify({"message": "High score updated!", "high_score": new_score})
    else:
        return jsonify({"message": "No update needed", "high_score": high_scores[quiz_name]})

if __name__ == "__main__":
    app.run(debug=True)
