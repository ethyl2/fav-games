const greenDoor = document.getElementById('green-door')
greenDoor.addEventListener('click', () => {
    greenDoor.classList.add('text-green-400')
    const answerEl = document.createElement('div')
    answerEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-1', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answerEl.innerText = 'NO'
    greenDoor.appendChild(answerEl)
    setTimeout(() => {
        greenDoor.classList.remove('text-green-400')
        greenDoor.removeChild(answerEl)
    }, 1000)
})

const catToy = document.getElementById('cat-toy')
catToy.addEventListener('click', () => {
    catToy.classList.add('text-yellow-400')
    const answerCatToyEl = document.createElement('div')
    answerCatToyEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-2', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answerCatToyEl.innerText = 'NO'
    catToy.appendChild(answerCatToyEl)
    setTimeout(() => {
        catToy.classList.remove('text-yellow-400')
        catToy.removeChild(answerCatToyEl)
    }, 1000)
})

const cerealBowl = document.getElementById('cereal-bowl')
cerealBowl.addEventListener('click', () => {
    cerealBowl.classList.add('text-blue-200')
    const answercerealBowlEl = document.createElement('div')
    answercerealBowlEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-1', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answercerealBowlEl.innerText = 'NO'
    cerealBowl.appendChild(answercerealBowlEl)
    setTimeout(() => {
        cerealBowl.classList.remove('text-blue-200')
        cerealBowl.removeChild(answercerealBowlEl)
    }, 1000)
})

const noEl = document.getElementById('first-no')
noEl.addEventListener('click', () => {
    noEl.classList.add('text-red-200')
    const answernoElEl = document.createElement('div')
    answernoElEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', '-right-1', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answernoElEl.innerText = 'NO'
    noEl.appendChild(answernoElEl)
    setTimeout(() => {
        noEl.classList.remove('text-red-200')
        noEl.removeChild(answernoElEl)
    }, 1000)
})

const secondNoEl = document.getElementById('second-no')
secondNoEl.addEventListener('click', () => {
    secondNoEl.classList.add('text-red-200')
    const answersecondNoElEl = document.createElement('div')
    answersecondNoElEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', '-right-1', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answersecondNoElEl.innerText = 'NO'
    secondNoEl.appendChild(answersecondNoElEl)
    setTimeout(() => {
        secondNoEl.classList.remove('text-red-200')
        secondNoEl.removeChild(answersecondNoElEl)
    }, 1000)
})

const toyCar = document.getElementById('toy-car')
toyCar.addEventListener('click', () => {
    const answertoyCarEl = document.createElement('div')
    answertoyCarEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-7', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answertoyCarEl.innerText = 'NO'
    toyCar.appendChild(answertoyCarEl)
    setTimeout(() => {
        toyCar.removeChild(answertoyCarEl)
    }, 1000)
})

const blackDog = document.getElementById('black-dog')
blackDog.addEventListener('click', () => {
    const answerblackDogEl = document.createElement('div')
    answerblackDogEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-3', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answerblackDogEl.innerText = 'NO'
    blackDog.appendChild(answerblackDogEl)
    setTimeout(() => {
        blackDog.removeChild(answerblackDogEl)
    }, 1000)
})

const redBalloon = document.getElementById('red-balloon')
redBalloon.addEventListener('click', () => {
    const answerredBalloonEl = document.createElement('div')
    redBalloon.classList.add('text-red-300')
    answerredBalloonEl.classList.add('text-black', 'font-bold', 'absolute', 'top-0', 'right-3', 'px-2', 'pt-1', 'bg-white', 'rounded')
    answerredBalloonEl.innerText = 'YES!'
    redBalloon.appendChild(answerredBalloonEl)
    setTimeout(() => {
        redBalloon.removeChild(answerredBalloonEl)
        redBalloon.classList.remove('text-red-300')
    }, 1000)
})

const nonBlackItems = [
    {
        name: 'green door',
        imgUrl: './static/images/green-door.png'
    },
    {
        name: 'yellow cat toy',
        imgUrl: './static/images/cat-toy.png'
    },
    {
        name: 'cereal bowl',
        imgUrl: './static/images/cereal-bowl.png'
    },
    
    {
        name: 'red balloon',
        imgUrl: './static/images/red-balloon.png'
    },
    {
        name: 'red crayon',
        imgUrl: './static/images/red-crayon.png'
    },
    {
        name: 'green crayon',
        imgUrl: './static/images/green-crayon.png'
    },
    {
        name: 'pink crayon',
        imgUrl: './static/images/pink-crayon.png'
    },
    {
        name: 'white dog',
        imgUrl: './static/images/white-dog.png'
    },
    {
        name: 'cuckoo clock',
        imgUrl: './static/images/cuckoo-clock.png'
    },
    {
        name: 'cereal box',
        imgUrl: './static/images/cereal-box.png'
    },
    {
        name: 'blue book',
        imgUrl: './static/images/blue-book.png'
    },
    {
        name: 'green book',
        imgUrl: './static/images/green-book.png'
    },
    {
        name: 'red cat toy',
        imgUrl: './static/images/red-cat-toy.png'
    },
    {
        name: 'yellow balloon',
        imgUrl: './static/images/yellow-balloon.png'
    },
    {
        name: 'orange rug',
        imgUrl: './static/images/orange-rug.png'
    },
    {
        name: 'orange cat',
        imgUrl: './static/images/orange-cat.png'
    },
    {
        name: 'plant',
        imgUrl: './static/images/plant.png'
    }
    
]

const blackItems = [
    {
        name: 'black dog',
        imgUrl: './static/images/black-dog.png'
    },
    {
        name: 'black toy car',
        imgUrl: './static/images/black-toy-car.png'
    },
    {
        name: 'black crayon',
        imgUrl: './static/images/black-crayon.png'
    }, 
    {
        name: 'black magic wand',
        imgUrl: './static/images/magic-wand.png'
    },
    {
        name: 'sunglasses',
        imgUrl: './static/images/sunglasses.png'
    },
    {
        name: 'black book',
        imgUrl: './static/images/black-book.png'
    },
    {
        name: 'spider',
        imgUrl: './static/images/spider.png'
    },
    {
        name: 'black balloon',
        imgUrl: './static/images/black-balloon.png'
    },
    {
        name: 'black cat',
        imgUrl: './static/images/black-cat.png'
    }
]

const getQuestionButton = document.getElementById('get-question')
const currentQuestionEl = document.getElementById('current-question')
const questionImg = document.getElementById('question-img')
const answerContainer = document.getElementById('answer-container')
const answerComment = document.getElementById('answer-comment')

let possibleQuestions = []
let questionsAskedCount = 0
let questionCount = 0
let currentQuestionIndex = null
let currentPossibleQuestionIndex = null
let blackQuestionIndex = null
let blackPossibleQuestions = []

function setUpPractice() {
    questionsAskedCount = 0
    possibleQuestions = []
    blackPossibleQuestions = []

    for (let i=0; i<nonBlackItems.length; i++) {
    possibleQuestions.push(i)
    }

    for (let i=0; i<blackItems.length; i++) {
        blackPossibleQuestions.push(i)
    }

    questionCount = Math.floor(Math.random() * nonBlackItems.length) + 1
    answerComment.textContent = ''
    questionImg.style.backgroundImage = `url("./static/images/question-mark.png")`
    getQuestionButton.disabled = false
    getQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed')
    currentQuestionEl.textContent = 'Click the button to get a question!'
}

setUpPractice()

getQuestionButton.addEventListener('click', () => {
    answerComment.textContent = ''
    questionsAskedCount++
    getQuestionButton.disabled = true
    getQuestionButton.classList.add('opacity-50', 'cursor-not-allowed')
    if (questionsAskedCount < questionCount) {
        currentPossibleQuestionIndex = Math.floor(Math.random() * possibleQuestions.length)
        currentQuestionIndex = possibleQuestions[currentPossibleQuestionIndex]
        possibleQuestions.splice(currentPossibleQuestionIndex, 1)

        currentQuestionEl.textContent = 'Is it the ' + nonBlackItems[currentQuestionIndex].name + '?'
        questionImg.style.backgroundImage = `url("${nonBlackItems[currentQuestionIndex].imgUrl}")`
        const innerAnswerContainer = document.createElement('div')
        innerAnswerContainer.classList.add('flex', 'flex-row', 'justify-between', 'mt-4', 'space-x-4', 'w-full', 'md:space-x-8', 'md:px-24')
        innerAnswerContainer.innerHTML = `
                <button type="button" id="yes-button" class="w-full max-w-xs border-4 border-green-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-green-200">Yes</button>
                <button type="button" id="no-button" class="w-full max-w-xs border-4 border-red-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-red-200">No</button> 
        `
        answerContainer.append(innerAnswerContainer)
        const yesButton = document.getElementById('yes-button')
        const noButton = document.getElementById('no-button')
        yesButton.addEventListener('click', () => {
            
            answerComment.textContent = 'That is incorrect. Try again.'
        })
        noButton.addEventListener('click', () => {
            
            answerComment.textContent = 'That is correct. Click to ask another question.'
            innerAnswerContainer.remove()
            getQuestionButton.disabled = false
            getQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed')
        })
    } else if (questionsAskedCount === questionCount) {
        
        blackQuestionIndex = Math.floor(Math.random() * blackItems.length)
        blackPossibleQuestions.splice(blackQuestionIndex, 1)
        currentQuestionEl.textContent = 'Is it the ' + blackItems[blackQuestionIndex].name + '?'
        questionImg.style.backgroundImage = `url("${blackItems[blackQuestionIndex].imgUrl}")`
        const innerAnswerContainer = document.createElement('div')
        innerAnswerContainer.classList.add('flex', 'flex-row', 'justify-between', 'mt-4', 'space-x-4', 'w-full', 'md:space-x-8', 'md:px-24')
        innerAnswerContainer.innerHTML = `
                <button type="button" id="yes-button" class="w-full max-w-xs border-4 border-green-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-green-200">Yes</button>
                <button type="button" id="no-button" class="w-full max-w-xs border-4 border-red-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-red-200">No</button> 
        `
        answerContainer.append(innerAnswerContainer)
        const yesButton = document.getElementById('yes-button')
        const noButton = document.getElementById('no-button')
        yesButton.addEventListener('click', () => {
           
            answerComment.textContent = 'That is incorrect. Try again.'
        })
        noButton.addEventListener('click', () => {
            
            answerComment.textContent = 'That is correct. Click to ask another question.'
            innerAnswerContainer.remove()
            getQuestionButton.disabled = false
            getQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed')

        })
    } else if (questionsAskedCount === questionCount + 1){
        
        let useBlackItem = getBlackItemForLastItem()

        if (useBlackItem) {
            blackQuestionIndex = Math.floor(Math.random() * blackItems.length)
            currentQuestionEl.textContent = 'Is it the ' + blackItems[blackQuestionIndex].name + '?'
            questionImg.style.backgroundImage = `url("${blackItems[blackQuestionIndex].imgUrl}")`
        } else {
            currentPossibleQuestionIndex = Math.floor(Math.random() * possibleQuestions.length)
            currentQuestionIndex = possibleQuestions[currentPossibleQuestionIndex]
            
            currentQuestionEl.textContent = 'Is it the ' + nonBlackItems[currentQuestionIndex].name + '?'
            questionImg.style.backgroundImage = `url("${nonBlackItems[currentQuestionIndex].imgUrl}")`
        }
        const innerAnswerContainer = document.createElement('div')
        innerAnswerContainer.classList.add('flex', 'flex-row', 'justify-between', 'mt-4', 'space-x-4', 'w-full', 'md:space-x-8', 'md:px-24')
        innerAnswerContainer.innerHTML = `
                <button type="button" id="yes-button" class="w-full max-w-xs border-4 border-green-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-green-200">Yes</button>
                <button type="button" id="no-button" class="w-full max-w-xs border-4 border-red-500 bg-white rounded-lg px-2 pb-1 pt-2 font-bold text-black text-lg hover:bg-red-200">No</button> 
        `
        answerContainer.append(innerAnswerContainer)
        const yesButton = document.getElementById('yes-button')
        const noButton = document.getElementById('no-button')
        yesButton.addEventListener('click', () => {
            answerComment.textContent = 'That is correct. You guessed it! Click the Ask Me button to practice again.'
            innerAnswerContainer.remove()
            getQuestionButton.disabled = false
            getQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed')
        })
        noButton.addEventListener('click', () => {
            answerComment.textContent = 'That is incorrect. Try again.'
        })
    } else {
        setUpPractice()
    }
})

function getBlackItemForLastItem() {
    // Generate a random number between 0 and 1
    const random = Math.random()

    // Determine the answer based on the random number
    if (random < 0.8) {
    return false // 80% chance for false
    } else {
    return true // 20% chance for true
    }
}
