const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

const currentCharacterCountEl = document.getElementById('current-character-count')
const useCharacterCountCheckbox = document.getElementById('use-character-count')
const characterCountInput = document.getElementById('character-count')
const characterCountLabel = document.getElementById('character-count-label')

window.addEventListener('load', init)
const generatedLoremIpsumEl = document.getElementById('generated-lorem-ipsum')
const updateButton = document.getElementById('update')
const paragraphCountInput = document.getElementById('paragraph-count')
const paragraphCountLabel = document.getElementById('paragraph-count-label')
const copiedBox = document.getElementById('copied-box')
const messageEl = document.getElementById('message')
const startsWithEl = document.getElementById('start-with')
const addDateEl = document.getElementById('start-date')
const emojiEl = document.getElementById('add-emojis')

toggleCharacterCountClasses()

// Stores state of start-with checkbox in session storage
startsWithEl.addEventListener('input', ()=> {
  if (startsWithEl.checked === true) {
    window.sessionStorage.setItem('starts-with', 'checked')
  } else {
    window.sessionStorage.setItem('starts-with', 'unchecked')
  }
})

// Stores state of start-date checkbox in session storage
addDateEl.addEventListener('input', ()=> {
  if (addDateEl.checked === true) {
    window.sessionStorage.setItem('start-date', 'checked')
  } else {
    window.sessionStorage.setItem('start-date', 'unchecked')
  }
})

let paragraphCount =  paragraphCountInput.value
let paragraphLength = 'short'

const paragraphLengthInputs = document.getElementsByName('paragraph-length')

Array.from(paragraphLengthInputs).forEach(input => {
  input.addEventListener('input', () => {
    if (input.checked) {
      paragraphLength = input.value
      window.sessionStorage.setItem('paragraph-length', paragraphLength)
      updateLoremIpsum()
    }
  })
})

paragraphCountInput.addEventListener('input', () => {
  paragraphCount = paragraphCountInput.value
  window.sessionStorage.setItem('paragraph-count', paragraphCount)
  if (parseInt(paragraphCountInput.value) === 1) {
    paragraphCountLabel.textContent = 'Paragraph'
  } else {
    paragraphCountLabel.textContent = 'Paragraphs'
  }
})

updateButton.addEventListener('click', updateLoremIpsum)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function init() {
  const paragraphCountFromStorage = window.sessionStorage.getItem('paragraph-count')
  if (paragraphCountFromStorage) {
    paragraphCount = paragraphCountFromStorage
    paragraphCountInput.value = paragraphCountFromStorage
  }
  if (parseInt(paragraphCount) === 1) {
    paragraphCountLabel.textContent = 'Paragraph'
  } else {
    paragraphCountLabel.textContent = 'Paragraphs'
  }

  // Get checked state of 'starts with' checkbox from session storage
  const startsWith = window.sessionStorage.getItem('starts-with')
  if (startsWith === 'checked') {
    startsWithEl.checked = true
  } else {
    startsWithEl.checked = false
  }

  // Get checked state of 'start-date' checkbox from session storage
  const startDate = window.sessionStorage.getItem('start-date')
  if (startDate === 'checked') {
    addDateEl.checked = true
  } else {
    addDateEl.checked = false
  }

  const copyButton = document.getElementById('copy-button')
  copyButton.addEventListener('click', copyToClipboard)

  async function copyToClipboard() {
    const brRegex = /<br\s*[\/]?>/gi;
    const convertedLoremIpsum = generatedLoremIpsumEl.innerHTML.replace(brRegex, "\r\n")
    copiedBox.value = convertedLoremIpsum
    copiedBox.select()
    copiedBox.setSelectionRange(0, 99999)
    try {
      navigator.clipboard.writeText(copiedBox.value)
      messageEl.classList.remove('text-transparent')
      messageEl.textContent = 'Copied to clipboard!'
      setTimeout(() => {
        messageEl.classList.add('text-transparent')
      }, 2000)
    } catch (err) {
      messageEl.classList.remove('text-transparent')
      messageEl.textContent = 'Sorry, there was an error while copying to the clipboard. Try again later!'
      setTimeout(() => {
        messageEl.classList.add('text-transparent')
      }, 2000)
    }
  }

  const paragraphLengthFromStorage = window.sessionStorage.getItem('paragraph-length')
  if (paragraphLengthFromStorage) {
    paragraphLength = paragraphLengthFromStorage
    Array.from(paragraphLengthInputs).forEach(input => {
      if (input.value === paragraphLengthFromStorage) {
        input.checked = true
      } else {
        input.checked = false
      }
    })
  }
  updateLoremIpsum()
}

const bgColorChoices = [
  'bg-blue-100',
  'bg-blue-200',
  'bg-blue-300',
  'bg-green-100',
  'bg-green-200',
  'bg-green-300',
  'bg-yellow-100',
  'bg-yellow-200',
  'bg-yellow-300',
  'bg-white',
  'bg-gray-100',
  'bg-gray-200',
  'bg-gray-300',
  'bg-fuchsia-100',
  'bg-fuchsia-200',
  'bg-fuchsia-300',
  'bg-indigo-100',
  'bg-indigo-200',
  'bg-indigo-300',
  'bg-sky-100',
  'bg-sky-200',
  'bg-sky-300',
  'bg-cyan-100',
  'bg-cyan-200',
  'bg-cyan-300',
  'bg-pink-100',
  'bg-pink-200',
  'bg-pink-300',
  'bg-teal-100',
  'bg-teal-200',
  'bg-teal-300',
  'bg-emerald-100',
  'bg-emerald-200',
  'bg-emerald-300',
  'bg-lime-100',
  'bg-lime-200',
  'bg-lime-300',
  'bg-amber-100',
  'bg-amber-200',
  'bg-amber-300',
  'bg-stone-50',
  'bg-stone-100',
  'bg-stone-200',
  'bg-stone-300',
  'bg-neutral-50',
  'bg-neutral-100',
  'bg-neutral-200',
  'bg-neutral-300',
]

function updateLoremIpsum() {
  let updatedContent = ''
  if (addDateEl.checked) {
    updatedContent += getTodaysDateAndTime() + ' '
  }
  if (startsWithEl.checked) {
    updatedContent += 'Game lorem ipsum dolor sit amet '
  }
  for (let i=0; i < paragraphCount; i++) {
    updatedContent += makeParagraph(paragraphLength)
  }

  if (emojiEl.checked) {
    updatedContent = addEmojis(updatedContent)
  }

  if (useCharacterCountCheckbox.checked) {
    updatedContent = modifyCharacterLength(updatedContent)
  }
  
  currentCharacterCountEl.textContent = updatedContent.length

  generatedLoremIpsumEl.innerText = updatedContent
  generatedLoremIpsumEl.classList.remove(...bgColorChoices)
  generatedLoremIpsumEl.classList.add(bgColorChoices[Math.floor(Math.random() * bgColorChoices.length)])
}

useCharacterCountCheckbox.addEventListener('input', toggleCharacterCountClasses)


function addEmojis(content) {
  const emojiCount = Math.floor(content.length / 50)
  
  for (let i=0; i < emojiCount; i++) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
    const randomIndex = Math.floor(Math.random() * content.length)
    content = content.substring(0, randomIndex) + ' ' + randomEmoji + ' ' + content.substring(randomIndex)
  }
  return content
}

function toggleCharacterCountClasses() {
  if (useCharacterCountCheckbox.checked) {
    characterCountInput.classList.remove('bg-gray-100')
    characterCountInput.classList.add('bg-green-200')
    characterCountInput.classList.remove('text-gray-400')
    characterCountInput.classList.add('text-black')
    characterCountLabel.classList.remove('text-gray-400')
    characterCountLabel.classList.add('text-black')
  } else {
    characterCountInput.classList.remove('bg-green-200')
    characterCountInput.classList.remove('text=gray-100')
    characterCountInput.classList.add('text-gray-400')
    characterCountInput.classList.add('bg-gray-100')
    characterCountLabel.classList.remove('text-black')
    characterCountLabel.classList.add('text-gray-400')
  }
}

function modifyCharacterLength(updatedContent) {
  const desiredLength = characterCountInput.value
    
    if (updatedContent.length > desiredLength) {
      updatedContent = updatedContent.slice(0, desiredLength)
    } else if (updatedContent.length < desiredLength)
    {
     
      const neededCharacterCount = desiredLength - updatedContent.length
     
      let fillerString = ' '
      while(fillerString.length < neededCharacterCount) {
        fillerString += capitalizeFirstLetter(gameNames[Math.floor(Math.random() * gameNames.length)]) + '. '
      }
      
      updatedContent = updatedContent.trim()
      updatedContent  += fillerString
      if (updatedContent.length > desiredLength) {
        updatedContent = updatedContent.slice(0, desiredLength)
      } else if (updatedContent.length < desiredLength) {
        const newNeededCharacterCount = desiredLength - updatedContent.length
        updatedContent += '!'.repeat(newNeededCharacterCount)
      }
    }
    return updatedContent
}

function getSubject() {
  const dieRoll = Math.floor(Math.random() * 4)
  if (dieRoll === 1) {
    return capitalizeFirstLetter(pronouns[Math.floor(Math.random() * pronouns.length)])
  } else if (dieRoll === 2) {
    return getClueCharacters()
  } else  if(dieRoll === 3) {
    return capitalizeFirstLetter(getCandyLandCharacters())
  } else {
    return getDuo()
  }
}

function makeSentence() {
  const subject = getSubject()
  const gameName = gameNames[Math.floor(Math.random() * gameNames.length)]
  const transitiveVerb = transitiveVerbs[Math.floor(Math.random() * transitiveVerbs.length)]
  return subject + ' ' + transitiveVerb + ' ' + gameName + '. '
}

function makeAccusation() {
  const murderSuspect = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]
  const murderWeapon = clueWeapons[Math.floor(Math.random() * clueWeapons.length)]
  const location = clueRooms[Math.floor(Math.random() * clueRooms.length)]
  return `I suspect ${murderSuspect}, in the ${location}, with the ${murderWeapon}. `
}

function winPit() {
  const collectedCommodity = pitCommodities[Math.floor(Math.random() * pitCommodities.length)]
  return `Corner on ${collectedCommodity}! `
}

function makeSaying() {
  const subject = getSubject()
  const verb = verbsForTalking[Math.floor(Math.random() * verbsForTalking.length)]
  const saying = randomPhrases[Math.floor(Math.random() * randomPhrases.length)]
  return `${subject} ${verb}, "${saying}" `
}

function doAmongUsTasks() {
  const task1 = amongUsTasks[Math.floor(Math.random() * amongUsTasks.length)]
  const restOfTasks = amongUsTasks.filter(task => {
    return task !== task1
  })
  const task2 = restOfTasks[Math.floor(Math.random() * restOfTasks.length)]
  return ` It's time to ${task1} and ${task2} before the Imposter finds and kills me. `
}

function makeQuote() {
  const currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return `As ${currentQuote.author} said, "${currentQuote.quote}" `
}

function getCandyLandCharacters() {
  const char1 = candyLandCharacters[Math.floor(Math.random() * candyLandCharacters.length)]
  const rest = candyLandCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function getClueCharacters() {
  const char1 = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]
  const rest = clueCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function getDuo() {
  const char1 = gameCharacters[Math.floor(Math.random() * gameCharacters.length)]
  const rest = gameCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function makeCandylandSentence() {
  const subject = capitalizeFirstLetter(candyLandCharacters[Math.floor(Math.random() * candyLandCharacters.length)])
  const location = candyLandLocations[Math.floor(Math.random() * candyLandLocations.length)]
  return `${subject} is at the ${location}. `
}

function playLife() {
  const career = gameOfLifeCareers[Math.floor(Math.random() * gameOfLifeCareers.length)]
  const girlCount = Math.floor(Math.random() * 3)
  const boyCount = Math.floor(Math.random() * 3)
  const carColor = gameOfLifeCarColors[Math.floor(Math.random() * gameOfLifeCarColors.length)]
  let sentence = 'It\'s my turn in the Game of Life. Looks like I get to be a '
    + career + ' and make big money. '
  if (girlCount > 0 && boyCount > 0) {
    sentence += `I have ${girlCount + boyCount} children so far. There are ${girlCount} pink peg${girlCount === 1 ? '' : 's'} and ${boyCount} blue peg${boyCount === 1 ? '' : 's'} in my little ${carColor} car. `
  } else if (girlCount > 0) {
    sentence += `I have only daughters in my family -- ${girlCount} little pink peg${girlCount === 1 ? '' : 's'} in my little plastic ${carColor} car. `
  } else if (boyCount > 0) {
    sentence += `I have only sons in my family so far -- ${boyCount} little blue peg${boyCount === 1 ? '' : 's'} in my ${carColor} car. `
  }
  return sentence
}

function playTrivia() {
  const trivaQandA = trivia[Math.floor(Math.random() * trivia.length)]
  const knewAnswer = Math.floor(Math.random() * 2) === 1
  return `Let's play trivia! Question: ${trivaQandA['question'] } Ready for the answer? Here it is: ${ trivaQandA['answer'] }. Did you know that? I ${ knewAnswer ? 'did' : 'did not'}! `
}

function getFavorite() {
  const gameType = gameTypes[Math.floor(Math.random() * gameTypes.length)]
  return capitalizeFirstLetter(gameType) + ' games are my favorite. '
}

function askQuestion() {
  const gameName1 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName2 = gameNames[Math.floor(Math.random() * gameNames.length)]
  return 'Do you like '
    + gameName1
    +  ' or '
    + gameName2
    + (gameName2.charAt(gameName2.length-1) === '?' ? ' ' : '? ')
}

function makeSuggestion() {
  const gameName1 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName2 = gameNames[Math.floor(Math.random() * gameNames.length)]
  return 'Let\'s play ' + gameName1 + ' or ' + gameName2 + '. '
}

function watchGameShow() {
  const gameShow = gameShows[Math.floor(Math.random() * gameShows.length)]
  return `Time to watch ${gameShow}! `
}

function thinkAboutGameShow() {
  const gameShow = gameShows[Math.floor(Math.random() * gameShows.length)]
  return `Do you think it would have been fun to be a contestant on ${gameShow}? `
}

function listGames() {
  let gameArray = []
  for (let i=0; i<10; i++) {
    gameArray.push(gameNames[Math.floor(Math.random() * gameNames.length)])
  }
  const distinctGames = [...new Set(gameArray)]
  let gameList = ''
  const endingPunctuation = ['!', '?']
  distinctGames.forEach(game => {
    gameList += capitalizeFirstLetter(game) + (endingPunctuation.includes(game.charAt(game.length-1)) ? ' ' : '. ')
  })
  return gameList
}

function playCharades() {
  const charadesWord = charadesWords[Math.floor(Math.random() * charadesWords.length)]
  return `Now it's charades time! You're up first; time to act out ${charadesWord}. I hope your team can guess it! Good luck! `
}

const sentenceTypes = [
  {
    type: 'trivia',
    function: 'playTrivia',
  },
  {
    type: 'pit',
    function: 'winPit',
  },
  {
    type: 'candyland',
    function: 'makeCandylandSentence',
  },
  {
    type: 'life',
    function: 'playLife',
  },
  {
    type: 'clue',
    function: 'makeAccusation',
  },
  {
    type: 'saying',
    function: 'makeSaying'
  },
  {
    type: 'among us',
    function: 'doAmongUsTasks',
  },
  { type: 'quote',
    function: 'makeQuote'
  },
  {
    type: 'sentence',
    function: 'makeSentence'
  },
  {
    type: 'favorite',
    function: 'getFavorite'
  },
  {
    type: 'question',
    function: 'askQuestion'
  },
  {
    type: 'list',
    function: 'listGames'
  },
  {
    type: 'watch game show',
    function: 'watchGameShow'
  },
  {
    type: 'think about game show',
    function: 'thinkAboutGameShow'
  },
  {
    type: 'charades',
    function: 'playCharades'
  }
]

function getTodaysDateAndTime() {
  const today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  return date+' '+time
}

function shuffle(array) {
  // Fisher-Yates
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function makeParagraph(length='long') {
  let numArray = [...new Array(sentenceTypes.length).keys()]
  shuffle(numArray)

  const sentenceCounts = {
    short: 4,
    medium: 6,
    long: 8,
  }

  let paragraph = ''
  const slicedNumArray = numArray.slice(0, sentenceCounts[length])

  slicedNumArray.forEach(index => {
    paragraph += Function("return " + sentenceTypes[index]['function'] + '()')()
  })

  return paragraph + '\n\n'
}
