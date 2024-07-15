// Define a function named checkAnswer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // If correct, provide positive feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If incorrect, provide constructive feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}


// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
