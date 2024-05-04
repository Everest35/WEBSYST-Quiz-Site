// Get references to various elements in the HTML document
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const resultMessageElement = document.getElementById("result-message");
const answerFeedback = document.getElementById("answer-feedback");
const score = document.getElementById('score');

// Initialize variables for tracking the current question index and quiz score
let currentQuestionIndex = 0;
let quizScore = 0;

// Add a click event listener to the start button that calls the startGame function
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
  // Hide the start button
  startButton.classList.add('hide');
  // Reset the current question index and quiz score
  currentQuestionIndex = 0;
  quizScore = 0;
  // Display the question container
  questionContainerElement.classList.remove('hide');
  // Set the initial score display
  quizScore = 0;
  // Show the first question
  setNextQuestion();
}

// Function to set up and display the next question
function setNextQuestion() {
  // Reset the state of the quiz (clear answer buttons, etc.)
  resetState();
  // Show the next question
  showQuestion(quizQuestions[currentQuestionIndex]);
}

// Function to display a question
function showQuestion(question) {
  // Set the question text
  questionElement.innerText = question.question;
  // Create and display answer buttons for each answer option
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', () => {
      selectAnswer(answer.correct);
      if (quizQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setNextQuestion();
      } else {
        endGame();
      }
    });
    answerButtonElement.appendChild(button);
  });
}

// Function to reset the state of the quiz (clear answer buttons, etc.)
function resetState() {
  clearStatusClass(document.body);
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
  resultMessageElement.classList.add('hide');
}

// Function to handle selecting an answer
function selectAnswer(correct) {
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
      if (correct) {
        button.classList.add('selected');
      }
    }
  });
  if (correct === true) {
    quizScore++;
    document.getElementById('answer-feedback').innerText = 'Correct!';
  } else {
    document.getElementById('answer-feedback').innerText = 'Incorrect.';
  }

  document.getElementById('right-answers').innerText = quizScore;
  answerButtonElement.querySelector('.selected').style.backgroundColor = 'green';
}

// Function to set the status class of an element based on correctness
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === 'true') {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

// Function to clear the status class of an element
function clearStatusClass(element){
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// Function to end the game and display the final score
function endGame() {
  questionContainerElement.classList.add('hide');
  answerFeedback.classList.add('hide');
  score.innerText = `You scored ${quizScore} out of ${quizQuestions.length}.`;
}

// Additional logic for styling based on quiz score
if (quizScore <= 3) {
  document.getElementById('right-answers').classList.add('low');
}

if (quizScore <= 1) {
  document.getElementById('right-answers').classList.add('very-low');
} 
