
// Quiz Questions about Brevis
const quizData = [
    {
        question: "What is Brevis?",
        answers: [
            "A cryptocurrency wallet",
            "A ZK coprocessor for smart contracts",
            "A blockchain network",
            "A DeFi lending protocol"
        ],
        correct: 1
    },
    {
        question: "What does ZK stand for in Brevis's technology?",
        answers: [
            "Zetta Kilobyte",
            "Zero Knowledge",
            "Zoom Key",
            "Zonal Keeper"
        ],
        correct: 1
    },
    {
        question: "What does Brevis enable smart contracts to do?",
        answers: [
            "Mine Bitcoin faster",
            "Access and compute over arbitrary on-chain data",
            "Create new tokens",
            "Execute off-chain payments"
        ],
        correct: 1
    },
    {
        question: "What is a coprocessor in the context of Brevis?",
        answers: [
            "A secondary blockchain",
            "A system that handles complex computations for smart contracts",
            "A type of validator",
            "A token burning mechanism"
        ],
        correct: 1
    },
    {
        question: "What is one main benefit of using Brevis?",
        answers: [
            "Lower transaction fees",
            "Faster block times",
            "Data-driven smart contract functionality with verifiable computation",
            "Higher token rewards"
        ],
        correct: 2
    },
    {
        question: "Which technology does Brevis use for verifiable computation?",
        answers: [
            "Proof of Work",
            "Proof of Stake",
            "Zero-Knowledge Proofs",
            "Sharding"
        ],
        correct: 2
    },
    {
        question: "What type of data can Brevis access?",
        answers: [
            "Only current block data",
            "Only transaction history from the last hour",
            "Arbitrary historical and cross-chain on-chain data",
            "Only off-chain data"
        ],
        correct: 2
    },
    {
        question: "How does Brevis help developers?",
        answers: [
            "By providing free tokens",
            "By enabling data-intensive dApps without compromising decentralization",
            "By creating new programming languages",
            "By hosting smart contracts"
        ],
        correct: 1
    },
    {
        question: "What makes Brevis different from traditional oracles?",
        answers: [
            "It's cheaper",
            "It uses ZK proofs for trustless data verification",
            "It's faster",
            "It only works on Ethereum"
        ],
        correct: 1
    },
    {
        question: "What is a potential use case for Brevis?",
        answers: [
            "Creating meme coins",
            "Data-driven DeFi protocols with historical on-chain insights",
            "Mining cryptocurrencies",
            "Storing photos on blockchain"
        ],
        correct: 1
    }
];

// Variables
let currentQuestion = 0;
let score = 0;
let answered = false;

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
totalQuestionsEl.textContent = quizData.length;

// Start Quiz
function startQuiz() {
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
