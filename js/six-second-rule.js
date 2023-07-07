// AUDIO
const audio = new Audio('static/audio/guitar-riff.wav')
const audio2 = new Audio('static/audio/times-up.wav')
const audio3 = new Audio('static/audio/tada.wav')
const audio4 = new Audio('static/audio/finger-cymbal.wav')

let allowAudio = false
const audioToggle = document.getElementById('audio-toggle')

audioToggle.addEventListener('click', () => {
  allowAudio = !allowAudio
  if (audioToggle.textContent == 'Turn Audio On!') {
    audioToggle.textContent = 'Turn Audio Off'
  } else {
    audioToggle.textContent = 'Turn Audio On!'
  }
  if (!allowAudio) {
    audio.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
  }
})

// TIMER
const mainContainer = document.getElementsByTagName('main')[0]
const maxTime = 12
let timeLeft = 12
const progressBar = document.getElementById('progress-bar')
const countdown = document.getElementById('countdown')
countdown.textContent = `${(timeLeft/2).toFixed(1)} seconds remaining`
const timerStartButton = document.getElementById('timer-start')
const timerResetButton = document.getElementById('timer-reset')
let stopTimer = false

timerResetButton.addEventListener('click', () => {
  stopTimer = true
  timerStartButton.textContent = 'Start Timer'
  timerStartButton.disabled = false
  timerStartButton.classList.add('hover:bg-blue-400')
  timerStartButton.classList.remove('cursor-not-allowed')

  timeLeft = maxTime

  timerResetButton.disabled = true
  timerResetButton.classList.add('cursor-not-allowed', 'opacity-50')
})

timerStartButton.addEventListener('click', () => {
  stopTimer = false
  timerResetButton.disabled = false
  timerResetButton.classList.remove('cursor-not-allowed', 'opacity-50')

  timerStartButton.textContent = 'Hurry! Hurry!'
  timerStartButton.disabled = true
  timerStartButton.classList.remove('hover:bg-blue-400')
  timerStartButton.classList.add('cursor-not-allowed')
  progressBar.value = 0
  timeLeft = maxTime
  countdown.textContent = `${(timeLeft/2).toFixed(1)} seconds remaining`
  if (allowAudio) {
    audio.play()
  }

  const downloadTimer = setInterval(function(){
    if (stopTimer) {
      clearInterval(downloadTimer)
    }
    if(timeLeft <= 0){
      clearInterval(downloadTimer);
      mainContainer.classList.remove('bg-white')
      mainContainer.classList.add('bg-yellow-200')
      setTimeout(() => {
          mainContainer.classList.remove('bg-yellow-200')
          mainContainer.classList.add('bg-white')
      }, 500)
      setTimeout(() => {
          mainContainer.classList.remove('bg-white')
          mainContainer.classList.add('bg-yellow-100')
      }, 1000)
      setTimeout(() => {
          mainContainer.classList.remove('bg-yellow-100')
          mainContainer.classList.add('bg-white')
      }, 1500)

      countdown.textContent = "Time's up!"
      timeLeft -= 1
      progressBar.value = maxTime - timeLeft
      timerStartButton.textContent = 'Start Timer'
      timerStartButton.disabled = false
      timerStartButton.classList.add('hover:bg-blue-400')
      timerStartButton.classList.remove('cursor-not-allowed')

      timerResetButton.disabled = true
      timerResetButton.classList.add('cursor-not-allowed', 'opacity-50')

      if (allowAudio) {
        audio2.play()
      }
    }
    else {
      progressBar.value = maxTime - timeLeft
      countdown.textContent = `${(timeLeft/2).toFixed(1)} seconds remaining`
      timeLeft -= 1
    }
  }, 500);
})

// CATEGORIES
const getCategoryButton = document.getElementById('get-category')
const categoryEl = document.getElementById('category')

window.addEventListener('load', () => {
  getCategoryButton.addEventListener('click', () => {
    const newCategory = categories[Math.floor(Math.random() * categories.length)]
    categoryEl.textContent = newCategory
    categoryEl.classList.remove('invisible')
    categoryEl.style.backgroundColor = '#ccff00'
    if (allowAudio) {
      audio3.play()
    }
  })
})

// POINT TRACKER
const playerCountInput = document.getElementById('player-count')
const playerPointsContainer = document.getElementById('points-for-players')
const pointsInstructions = document.getElementById('points-instructions')

let points = []
const pointsResetButton = document.getElementById('points-reset')

const colorOptions = [ 'blue', 'orange', 'lime', 'fuchsia', 'red', 'yellow', 'pink', 'emerald', 'cyan', 'violet' ]

playerCountInput.addEventListener('change', () => {
  const playerCount = playerCountInput.value
  if (playerCount > 0) {
    pointsInstructions.classList.remove('invisible')
  }
  playerPointsContainer.innerHTML = ''
  for (let i = 1; i <= playerCount; i++) {
    points.push(0)
    const buttonContainer = document.createElement('div')
    buttonContainer.innerHTML = `
    <div class="flex items-center justify-center space-x-2">
        <button type="button" id="increment-points-${i}" 
          class="font-bold rounded-full text-sm px-2 py-1 bg-${colorOptions[i-1]}-500 hover:bg-${colorOptions[i-1]}-400 text-center text-white shadow md:px-2.5 md:py-1.5">
          Point for Player ${i}!
        </button>
        <p id="player-points-${i}" class="text-green-500 font-bold text-3xl">0</p>
      </div>`
    playerPointsContainer.appendChild(buttonContainer)
  }

  const pointsButtons = document.querySelectorAll('[id^="increment-points-"]')
  pointsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      points[index]++
      document.getElementById(`player-points-${index+1}`).textContent = points[index]
      if (allowAudio) {
        audio4.play()
      }
    })
  })
})

pointsResetButton.addEventListener('click', () => {
  const pointsEls = document.querySelectorAll('[id^="player-points-"]')
  const playerCount = pointsEls.length
  points = []
  for (let i = 0; i < playerCount; i++) {
    points[i] = 0
  }
  pointsEls.forEach((el) => {
    el.textContent = 0
  })
})
