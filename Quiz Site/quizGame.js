const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const resultMessageElement = document.getElementById("result-message");
const answerFeedback = document.getElementById("answer-feedback");
const score = document.getElementById('score');

let currentQuestionIndex = 0;
let quizScore = 0;

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  currentQuestionIndex = 0;
  quizScore = 0;
  questionContainerElement.classList.remove('hide');
  quizScore = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(quizQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
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

function resetState() {
  clearStatusClass(document.body);
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
  resultMessageElement.classList.add('hide');
}

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


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === 'true') {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element){
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function endGame() {
  questionContainerElement.classList.add('hide');
  answerFeedback.classList.add('hide');
  score.innerText = `You scored ${quizScore} out of ${quizQuestions.length}.`;
}


if (quizScore <= 3) {
  document.getElementById('right-answers').classList.add('low');
}

if (quizScore <= 1) {
  document.getElementById('right-answers').classList.add('very-low');
}