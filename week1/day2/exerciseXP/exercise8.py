data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()

        if user_answer.lower() == item["answer"].lower():
            print(" Correct!")
            correct += 1
        else:
            print(" Wrong!")
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print("\n Quiz Results ")
    print(f"Correct answers: {correct}")
    print(f" Incorrect answers: {incorrect}\n")

    if wrong_answers:
        print("Here are the questions you got wrong:")
        for wa in wrong_answers:
            print(f" Question: {wa['question']}")
            print(f" Your answer: {wa['your_answer']}")
            print(f" Correct answer: {wa['correct_answer']}\n")

def play_quiz():
    while True:
        correct, incorrect, wrong_answers = ask_questions()
        show_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            retry = input("You had more than 3 wrong answers. Do you want to try again? (yes/no): ").strip().lower()
            if retry != "yes":
                print("Thanks for playing! May the Force be with you.")
                break
        else:
            print("Great job! You did well!")
            break

play_quiz()
