const questions = [
  {
    question: "What game has a piece shaped like a hat?",
    answers: [
      { text: "Dominoes", correct: false },
      { text: "The Game of Life", correct: false },
      { text: "Monopoly", correct: true },
      { text: "Risk", correct: false }
    ],
    image: './static/images/monopoly-hat.jpg',
  },
  {
    question: "What game has pieces shaped like a boxy car with holes for putting pegs in?",
    answers: [
      { text: "The Game of Life", correct: true },
      { text: "Checkers", correct: false },
      { text: "Dixit", correct: false },
      { text: "Scrabble", correct: false }
    ],
    image: './static/images/life-car.jpg',
  },
  {
    question: "What game has pieces shaped like train cars?",
    answers: [
      { text: "The Game of Life", correct: false },
      { text: "Ticket to Ride", correct: true },
      { text: "Monopoly", correct: false },
      { text: "Trivial Pursuit", correct: false },
    ],
    image: './static/images/ticket-to-ride-trains.jpg',
  },
  {
    question: "What game has a piece shaped like a knife?",
    answers: [
      { text: "The Game of Life", correct: false },
      { text: "Clue", correct: true},
      { text: "Monopoly", correct: false },
      { text: "Candyland", correct: false }
    ],
  },
  {
    question: "What game has a heart-shaped piece with a crack in it?",
    answers: [
      { text: "Dixit", correct: false },
      { text: "Clue", correct: false },
      { text: "Monopoly", correct: false },
      { text: "Operation", correct: true }
    ],
  },
  {
    question: "What game has a piece shaped like a castle tower?",
    answers: [
      { text: "Battleship", correct: false },
      { text: "Clue", correct: false },
      { text: "Chess", correct: true },
      { text: "Wits and Wagers Family Edition", correct: false },
    ],
    image: './static/images/rook.jpg',
  },
  {
    question: "What game has pieces shaped like gingerbread men?",
    answers: [
      { text: "Chess", correct: false },
      { text: "Wits and Wagers Family Edition", correct: false },
      { text: "Monopoly", correct: false },
      { text: "Candyland", correct: true }
    ]
  },
  {
    question: "What game has pieces with a letter and a number on them?",
    answers: [
      { text: "Candyland", correct: false },
      { text: "The Game of Life", correct: false },
      { text: "Monopoly", correct: false },
      { text: "Scrabble", correct: true }
    ],
    image: './static/images/scrabble-tiles.jpg',
  },
  {
    question: "What game has pieces shaped like houses?",
    answers: [
      { text: "Monopoly", correct: true },
      { text: "The Game of Life", correct: false },
      { text: "Risk", correct: false },
      { text: "Othello", correct: true }
    ],
    image: './static/images/monopoly-houses.jpg',
  },
  {
    question: "What game has circular pieces with room for 6 pie wedge-shaped pieces inside?",
    answers: [
      { text: "Clue", correct: false },
      { text: "Trivial Pursuit", correct: true },
      { text: "Monopoly", correct: false },
      { text: "Wits and Wagers Family Edition", correct: false }
    ],
  },
  {
    question: "What game has a thimble-shaped piece?",
    answers: [
      { text: "Trivial Pursuit", correct: false },
      { text: "Checkers", correct: false },
      { text: "Candyland", correct: false },
      { text: "Monopoly", correct: true },
      ],
  },
  {
    question: "What game has a piece that is shaped like a piece of bread?",
    answers: [
      { text: "Operation", correct: true },
      { text: "Dixit", correct: false },
      { text: "Candyland", correct: false },
      { text: "Monopoly", correct: false },
    ],
  },
  {
    question: "What game has marble pieces that a certain type of animal wants to eat?",
    answers: [
      { text: "Operation", correct: false },
      { text: "Hungry Hungry Hippos", correct: true },
      { text: "Candyland", correct: false },
      { text: "Risk", correct: false },
    ],
    image: './static/images/hungry-hungry-hippos.jpg',
  },
  {
    question: "What game has wooden rabbit-shaped pieces?",
    answers: [
      { text: "The Game of Life", correct: false },
      { text: "Checkers", correct: false },
      { text: "Dixit", correct: true },
      { text: "Wits and Wagers Family Edition", correct: false },
    ],
  },
  {
    question: "What game has a piece shaped like a candlestick?",
    answers: [
      { text: "Clue", correct: true },
      { text: "Checkers", correct: false },
      { text: "Chess", correct: false },
      { text: "Candyland", correct: true },
    ],
    image: './static/images/candlestick.jpg',
  },
  {
    question: "What game has a pieces shaped like army men toys?",
    answers: [
      { text: "Clue", correct: false },
      { text: "Risk", correct: true },
      { text: "Chess", correct: false },
      { text: "Candyland", correct: false },
    ],
    image: './static/images/risk-guys.jpg',
  },
  {
    question: "What game has a disc pieces that are black on one side and white on the other?",
    answers: [
      { text: "Clue", correct: false },
      { text: "Checkers", correct: false },
      { text: "Chess", correct: false },
      { text: "Othello", correct: true },
    ],
  },
  {
    question: "What game has pieces that shaped like boats?",
    answers: [
      { text: "The Game of Life", correct: false },
      { text: "Battleship", correct: true },
      { text: "Othello", correct: false },
      { text: "Trivial Pursuit", correct: false },
    ],
  },
  {
    question: "What game has rectangular pieces with a dividing line in the middle and dots on either side of the line?",
    answers: [
      { text: "Dominoes", correct: true },
      { text: "Chess", correct: false },
      { text: "Risk", correct: false },
      { text: "Scrabble", correct: false },
    ],
    image: './static/images/dominoes.jpg',
  },
  {
    question: "What game has vaguely human-shaped pieces?",
    answers: [
      { text: "Clue", correct: false },
      { text: "Wits and Wagers Family Edition", correct: true },
      { text: "Bananagrams", correct: false },
      { text: "Scrabble", correct: false },
    ],
    image: './static/images/meeples.jpg',
  },
  {
    question: "What game has wooden rectangular prism-shaped pieces?",
    answers: [
      { text: "Risk", correct: false },
      { text: "Wits and Wagers Family Edition", correct: false },
      { text: "Hungry Hungry Hippos", correct: false },
      { text: "Jenga", correct: true },
    ],
    image: './static/images/jenga.jpg',
  },
]

function getSiblings(node) {
  return [...node.parentElement.children].filter(child => child !== node)
}

function getImageFromQuestion(node) {
   return node.parentElement.parentElement.querySelector('img')
}

const questionsDiv = document.getElementById('questions')
const totalGuessesEl = document.getElementById('total-guesses')
const totalCorrectEl = document.getElementById('total-correct')

questions.forEach((question, index) => {
  const questionDiv = document.createElement('div')
  const questionP = document.createElement('p')
  questionP.classList.add( 'text-yellow-100', 'md:text-xl', 'font-bold', 'text-center', 'pt-4', 'md:pt-8')
  questionP.innerText = `${index + 1}. ${question.question}`
  questionDiv.appendChild(questionP)
  const answersDiv = document.createElement('div')
  answersDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-center', 'items-center')
  question.answers.forEach((answer) => {
    const answerButton = document.createElement('button')
    answerButton.innerText = answer.text
    answerButton.classList.add('bg-gray-900', 'text-white', 'p-2', 'm-2', 'rounded', 'hover:bg-gray-800')
    answerButton.addEventListener('click', () => {
      answerButton.classList.remove('hover:bg-gray-800')
      answerButton.disabled = true
      totalGuessesEl.innerText = parseInt(totalGuessesEl.innerText) + 1
      setTimeout(() => {
        answerButton.classList.add('cursor-not-allowed')
      }, 500)

      if (answer.correct) {
        answerButton.classList.add('bg-green-500')
        totalCorrectEl.innerText = parseInt(totalCorrectEl.innerText) + 1

        const siblings = getSiblings(answerButton)

        Array.from(siblings).forEach(sibling => {
          sibling.classList.add('bg-red-500', 'line-through')
          sibling.classList.remove('hover:bg-gray-800')
          sibling.disabled = true
        })

        if (question.image) {
          const imageEl = getImageFromQuestion(answerButton)
          imageEl.classList.remove('hidden')
        }

      } else {
        answerButton.classList.add('bg-red-500', 'line-through')
      }
    })
    answersDiv.appendChild(answerButton)
  })
  questionDiv.appendChild(answersDiv)
  if (question.image) {
    const imageEl = document.createElement('img')
    imageEl.src = question.image
    imageEl.alt= 'game piece'
    imageEl.classList.add('w-36', 'mx-auto', 'mt-4', 'rounded', 'hidden')
    questionDiv.appendChild(imageEl)
  }
  questionsDiv.appendChild(questionDiv)
})

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()
