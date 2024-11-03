import json
import os

QUIZ_DIR = "quizzes"
HIGH_SCORE_FILE = "high_score.txt"
QUIZ_ENDING = ".json"

def list_quiz_files():
    files = [f for f in os.listdir(QUIZ_DIR) if f.endswith(QUIZ_ENDING)]
    if not files:
        print("No quiz files found.")
    return files

def load_quiz_questions(quiz_file):
    try:
        with open(os.path.join(QUIZ_DIR, quiz_file), 'r') as file:
            return json.load(file)
    except:
        print("Try another file.")

def load_high_score():
    if os.path.exists(HIGH_SCORE_FILE):
        with open(HIGH_SCORE_FILE, 'r') as file:
            return int(file.read().strip())
    return 0  # Default high score if the file doesn't exist

def save_high_score(score):
    with open(HIGH_SCORE_FILE, 'w') as file:
        file.write(str(score))

def run_quiz(quiz):
    score = 0
    total_questions = len(quiz)
    
    for question, correct_answer in quiz.items():
        print(question)
        _answer = input("Your answer: ").strip()

        if _answer.lower() == correct_answer.lower():
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer is {correct_answer}.\n")

    print(f"Your total score is {score}/{total_questions}.")
    return score

# Main game loop
if __name__ == "__main__":
    quiz = {}

    quiz_files = list_quiz_files()
    print("Available quizzes:")
    for idx, quiz_file in enumerate(quiz_files, 1):
        print(f"{idx}. {quiz_file}")
    
    choice = int(input(f"Choose a quiz (1-{len(quiz_files)}): "))
    selected_quiz_file = quiz_files[choice - 1]
    quiz = load_quiz_questions(selected_quiz_file)

    if quiz:
        high_score = load_high_score()
        print(f"The current high score is: {high_score}\n")

        current_score = run_quiz(quiz)
        if current_score > high_score:
            print("Congratulations! You have the new high score!")
            save_high_score(current_score)
        else:
            print("Good try! But you didn't beat the high score.")
    else:
        print("No quiz questions available.")
