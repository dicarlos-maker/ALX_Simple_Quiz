function checkAnswer() {
    // Correct answer
    var correctAnswer = "4";

    // Get the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Feedback element
    var feedback = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
