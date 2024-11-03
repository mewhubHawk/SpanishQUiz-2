from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__)

QUIZ_DIR = "quizzes"

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

if __name__ == "__main__":
    app.run(debug=True)