function checkAnswer() {
   
    var correctAnswer = "4";

    var userAnswer = document.querySelector('input[name="quiz"]:checked');

 
    var feedback = document.getElementById('feedback');

    if (userAnswer) {
     
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
