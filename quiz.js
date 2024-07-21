function checkAnswer() {
    // the correct answer
    const correctAnswer = "4";

    //retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    //get the feedback
    const feedback = document.getElementById("feedback");

    //check user's answer
    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else {
        feedback.textContent = "That's incorrect. Try again!"
    }
}

// add event listener to the submit btn
document.getElementById("submit-answer").addEventListener("click", checkAnswer);