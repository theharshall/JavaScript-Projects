// Cricket Questions Data
const questions = [
    {
      question: "Who has the most international centuries?",
      options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Brian Lara"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which country won the 2011 ICC Cricket World Cup?",
      options: ["India", "Sri Lanka", "Australia", "Pakistan"],
      answer: "India"
    },
    {
      question: "Which player has the fastest T20I century?",
      options: ["Chris Gayle", "David Miller", "Rohit Sharma", "Suryakumar Yadav"],
      answer: "David Miller"
    },
    {
      question: "Where is the headquarters of the ICC?",
      options: ["London", "Dubai", "Melbourne", "Mumbai"],
      answer: "Dubai"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option-btn");
  const nextButton = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");
  const scoreText = document.getElementById("score-text");
  const restartButton = document.getElementById("restart-btn");
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => selectOption(button);
    });
  }
  
  function selectOption(selectedBtn) {
    const selectedAnswer = selectedBtn.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedAnswer === correctAnswer) {
      selectedBtn.style.backgroundColor = "green";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "red";
      // Show correct answer
      optionButtons.forEach((btn) => {
        if (btn.textContent === correctAnswer) {
          btn.style.backgroundColor = "green";
        }
      });
    }
  
    // Disable all buttons after selection
    optionButtons.forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
  }
  
  function resetState() {
    optionButtons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "#000";
      button.style.color = "#fff";
    });
    nextButton.style.display = "none";
  }
  
  function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");
    showQuestion();
  });
  
  // Initial call
  showQuestion();
  