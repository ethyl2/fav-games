const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
const pointsButton = document.getElementById('increment-points')
const pointsEl = document.getElementById('points')
let points = 0
const pointsResetButton = document.getElementById('points-reset')
const snap = new Audio('static/audio/snap.wav')
const erase = new Audio('static/audio/erase.wav')
let allowAudio = false

const audioToggle = document.getElementById('audio-toggle')
  audioToggle.addEventListener('click', () => {
    allowAudio = !allowAudio

    if (audioToggle.textContent === 'Turn Audio On!') {
      audioToggle.textContent = 'Turn Audio Off'
    } else {
      audioToggle.textContent = 'Turn Audio On!'
    }
  })

pointsButton.addEventListener('click', () => {
  points++
  pointsEl.textContent = points
  if (allowAudio) {
    snap.play()
  }
})

pointsResetButton.addEventListener('click', () => {
  points = 0
  pointsEl.textContent = points
  if (allowAudio) {
    erase.play()
  }
})
