import json
import os

# Directory containing quiz files
QUIZ_DIR = "quizzes"
HIGH_SCORE_FILE = "high_score.txt"

# Function to list available quiz files
def list_quiz_files():
    files = [f for f in os.listdir(QUIZ_DIR) if f.endswith('.json')]
    if not files:
        print("No quiz files found.")
    return files

# Function to load quiz questions from a selected JSON file
def load_quiz_questions(quiz_file):
    with open(os.path.join(QUIZ_DIR, quiz_file), 'r') as file:
        return json.load(file)

# Function to load the current high score from a file
def load_high_score():
    if os.path.exists(HIGH_SCORE_FILE):
        with open(HIGH_SCORE_FILE, 'r') as file:
            return int(file.read().strip())
    return 0  # Default high score if the file doesn't exist

# Function to save the new high score to a file
def save_high_score(score):
    with open(HIGH_SCORE_FILE, 'w') as file:
        file.write(str(score))

# Function to run the quiz
def run_quiz(quiz):
    score = 0
    total_questions = len(quiz)
    
    for question, correct_answer in quiz.items():
        print(question)
        user_answer = input("Your answer: ").strip()

        if user_answer.lower() == correct_answer.lower():
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer is {correct_answer}.\n")

    print(f"Your total score is {score}/{total_questions}.")
    return score

# Main game loop
if __name__ == "__main__":
    # List available quizzes
    quiz_files = list_quiz_files()
    
    if quiz_files:
        print("Available quizzes:")
        for idx, quiz_file in enumerate(quiz_files, 1):
            print(f"{idx}. {quiz_file}")
        
        # Ask the user to choose a quiz
        choice = int(input(f"Choose a quiz (1-{len(quiz_files)}): "))
        selected_quiz_file = quiz_files[choice - 1]
        
        # Load the selected quiz
        try:
            quiz = load_quiz_questions(selected_quiz_file)
        except FileNotFoundError:
            print("Quiz file not found!")
            quiz = {}
        
        if quiz:
            high_score = load_high_score()
            print(f"The current high score is: {high_score}\n")

            # Run the quiz and get the score
            current_score = run_quiz(quiz)

            # Compare the current score with the high score
            if current_score > high_score:
                print("Congratulations! You have the new high score!")
                save_high_score(current_score)
            else:
                print("Good try! But you didn't beat the high score.")
        else:
            print("No quiz questions available.")
    else:
        print("No quizzes found in the directory.")
