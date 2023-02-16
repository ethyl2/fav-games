let answersShown = []

function showAnswer(number) {
  const currentButton = document.getElementById("button" + number)
  document.getElementById("answer" + number).classList.toggle('text-transparent')
  currentButton.textContent = (currentButton.textContent === 'Hide Answer' ? 'Show Answer' : 'Hide Answer')
  answersShown.push(number)

  if (answersShown.length === 6) {
      document.getElementById("final-message").classList.remove('text-transparent')
  }
}

function seeLyrics(number) {
  const currentLyricsButton = document.getElementById("lyrics-button" + number)
  document.getElementById("lyrics" + number).classList.toggle('hidden')
  currentLyricsButton.textContent = (currentLyricsButton.textContent === 'Hide Lyrics' ? 'See Lyrics' : 'Hide Lyrics')
}

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()
