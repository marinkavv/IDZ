const loginButton = document.querySelector("#loginButton"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".formContainer"),
  formCloseBtn = document.querySelector(".closeForm"),
  signupLink = document.querySelector("#signup"),
  loginLink = document.querySelector("#login");

loginButton.addEventListener("click", () => {
  home.classList.add("show");
  formContainer.classList.remove("active");
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
});

signupLink.addEventListener("click", () => {
  formContainer.classList.add("active");
});

loginLink.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

console.log(questions);

let currentQuestionIndex = 0;

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");
const startQuizBtn = document.getElementById("startQuiz");
const quizModal = document.getElementById("quizModal");
const closeBtn = document.getElementById("closeBtn");

function loadQuestion() {
  questionText.classList.remove("fade");
  void questionText.offsetWidth;
  questionText.classList.add("fade");

  questionText.textContent = `Питання ${currentQuestionIndex + 1}: ${
    questions[currentQuestionIndex].question
  }`;
  answerInput.value = "";
}

startQuizBtn.addEventListener("click", () => {
  quizModal.style.display = "block";
  loadQuestion();
});

closeBtn.addEventListener("click", () => {
  quizModal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  if (
    answerInput.value.trim().toLowerCase() ===
    questions[currentQuestionIndex].answer.toLowerCase()
  ) {
    alert("Правильно!");
  } else {
    alert(
      "Неправильно! Правильна відповідь: " +
        questions[currentQuestionIndex].answer
    );
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Квіз завершено! Ви пройшли всі питання.");
    currentQuestionIndex = 0;
    loadQuestion();
  }
});
