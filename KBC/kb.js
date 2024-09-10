const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      correct: 1
    },
    {
      question: "Who is the current President of the USA?",
      options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
      correct: 1
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 3
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let used5050 = false;
  
  // Load the first question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('option1').innerText = currentQuestion.options[0];
    document.getElementById('option2').innerText = currentQuestion.options[1];
    document.getElementById('option3').innerText = currentQuestion.options[2];
    document.getElementById('option4').innerText = currentQuestion.options[3];
    document.getElementById('message').innerText = "";
  }
  
  // Check the selected answer
  function checkAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correct) {
      document.getElementById('message').innerText = "Correct!";
      score++;
    } else {
      document.getElementById('message').innerText = "Wrong Answer!";
    }
    disableAnswers();
  }
  
  // Move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      enableAnswers();
    } else {
      document.getElementById('message').innerText = `Game Over! Your Score: ${score}`;
      document.getElementById('next-btn').style.display = 'none';
    }
  }
  
  // Disable answer buttons after a selection
  function disableAnswers() {
    document.querySelectorAll('.answer-btn').forEach(button => {
      button.disabled = true;
    });
  }
  
  // Enable answer buttons for the next question
  function enableAnswers() {
    document.querySelectorAll('.answer-btn').forEach(button => {
      button.disabled = false;
    });
  }
  
  // 50:50 Lifeline
  function use5050() {
    if (!used5050) {
      used5050 = true;
      const currentQuestion = questions[currentQuestionIndex];
      const wrongOptions = [1, 2, 3, 4].filter(option => option !== currentQuestion.correct);
      const randomOptionsToHide = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
      randomOptionsToHide.forEach(option => {
        document.getElementById(`option${option}`).innerText = "";
        document.getElementById(`option${option}`).disabled = true;
      });
    }
  }
  
  // Ask the Expert Lifeline (for demonstration)
  function askExpert() {
    document.getElementById('message').innerText = "Expert says the answer is option " + questions[currentQuestionIndex].correct;
  }
  
  // Initialize the game
  window.onload = loadQuestion;