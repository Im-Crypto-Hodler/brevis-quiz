// Import questions from questions.js
// (questions.js is loaded before script.js in HTML)

// Variables
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizData = []; // Will hold 10 random questions

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');
const resultDescriptionEl = document.getElementById('result-description');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initialize
totalQuestionsEl.textContent = 10;

// Function to get random questions
function getRandomQuestions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Start Quiz
function startQuiz() {
    // Get 10 random questions from the pool
    quizData = getRandomQuestions(allQuestions, 10);
    currentQuestion = 0;
    score = 0;
    
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
}

// Load Question
function loadQuestion() {
    answered = false;
    nextBtn.classList.add('hidden');
    
    const current = quizData[currentQuestion];
    questionText.textContent = current.question;
    currentQuestionEl.textContent = currentQuestion + 1;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = progress + '%';
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons
    current.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const current = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (selectedIndex === current.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[current.correct].classList.add('correct');
    }
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

// Next Question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScoreEl.textContent = score;
    
    // Result messages based on score
    let message, description;
    
    if (score === 10) {
        message = "Perfect Score! 🏆";
        description = "You're a Brevis expert! You have an excellent understanding of ZK coprocessors and Brevis technology.";
    } else if (score >= 7) {
        message = "Great Job! 🌟";
        description = "You have a solid understanding of Brevis! Keep learning and you'll be an expert in no time.";
    } else if (score >= 5) {
        message = "Good Effort! 👍";
        description = "You know the basics of Brevis. Check out their documentation to learn more about ZK technology!";
    } else {
        message = "Keep Learning! 📚";
        description = "Brevis is an exciting technology! Visit their website and docs to discover more about ZK coprocessors.";
    }
    
    resultMessageEl.textContent = message;
    resultDescriptionEl.textContent = description;
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}
