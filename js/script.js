console.log("script.js connected!");
// Object to store answers
const userAnswers = {};

// Setup question blocks and answer button handling
const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach((block, index) => {
  const questionNumber = index + 1;
  const buttons = block.querySelectorAll('.answer-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'selected' from all buttons in the block
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      // Store answer and points
      const selectedAnswer = button.getAttribute('data-answer');
      const points = parseInt(button.getAttribute('data-points'));

      userAnswers[questionNumber] = {
        answer: selectedAnswer,
        points: points
      };
    });
  });
});


//  Display Result Function
function displayResult() {
  const resultText = document.getElementById('result-text');
  const resultContainer = document.getElementById('result-container');

  let totalPoints = 0;
  const totalQuestions = questionBlocks.length;

  // Check if all questions are answered
  if (Object.keys(userAnswers).length < totalQuestions) {
    alert(Answer all questions before viewing your result.');
    return;
  }

  // Tally total points
  for (let q in userAnswers) {
    totalPoints += userAnswers[q].points;
  }

  // Determine result
  let result = '';
  if (totalPoints >= 4 && totalPoints <= 6) {
    result = No show sock;
  } else if (totalPoints >= 7 && totalPoints <= 9) {
    result = Knee high;
  } else if (totalPoints >= 10 && totalPoints <= 12) {
    result = Crew;
  } else if (totalPoints >= 13 && totalPoints <= 16) {
    result = Low cut;
     }

  // Update result in DOM
  resultText.textContent = result;
  resultContainer.style.display = 'block';
}


// Add click event to "Give Me the Results" button
document.getElementById('give-results').addEventListener('click', displayResult);
