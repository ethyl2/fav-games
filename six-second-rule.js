let allowAudio = false
const audioToggle = document.getElementById('audio-toggle')
audioToggle.addEventListener('click', () => {
  allowAudio = !allowAudio
  if (audioToggle.textContent == 'Audio On') {
    audioToggle.textContent = 'Audio Off'
  } else {
    audioToggle.textContent = 'Audio On'
  }
})


const maxTime = 12
let timeLeft = 12
const progressBar = document.getElementById('progress-bar')
const countdown = document.getElementById('countdown')
countdown.textContent = `${(timeLeft/2).toFixed(1)} seconds remaining`
const timerStartButton = document.getElementById('timer-start')
const audio = new Audio('guitar-riff.wav')
const audio2 = new Audio('times-up.wav')
const audio3 = new Audio('tada.wav')
const audio4 = new Audio('finger-cymbal.wav')
const mainContainer = document.getElementsByTagName('main')[0]
const getCategoryButton = document.getElementById('get-category')
const categoryEl = document.getElementById('category')
const pointsButton = document.getElementById('increment-points')
const pointsEl = document.getElementById('points')
let points = 0
const pointsResetButton = document.getElementById('points-reset')

timerStartButton.addEventListener('click', () => {
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

const categories = ['Brands of Toilet Paper', 'Spicy Foods', 'Superheroes',
'Reasons to Sing', 'Things You Dip in Ketchup', 'Farm Animals',
'Zoo Animals', 'Things with Pockets', 'Things that start with Q', 'Things that Spin', 'Things with Screens', 'Emotions', 'Condiments', 'Terms of Endearment',
'Viruses', 'Breakfast Foods', 'Love Songs', 'Patriotic Songs', 'Homework Excuses',
'Twilight Books', 'Harry Potter Books', 'Pizza Toppings', 'Ice Cream Flavors', 'Programming Languages', 'Football Teams',
'Basketball Teams', 'Christmas Traditions', 'Easter Candies', 'Pokemon', 'Disney Princesses',
'Disney Villians', 'Toy Story Characters', 'Mountains', 'Rivers', 'US Capitals', 'Parts of Speech',
'Snow Cone Flavors', 'Board Games', 'Video Games', 'Things in a Mall', 'Novelists',
'US Presidents', 'Things that Have Buttons', 'Titles People Can Have', 'Reasons to Make a Phone Call',
'Types of Chips', 'Things You Can Buy at IKEA', 'Brands of Soda', 'Wildflowers', 'Waterfalls',
'Moon Phases', 'Composers', 'Fads', 'Things Worn Above the Waist', 'Woodwind Instruments',
'Brass Instruments', 'Percussion Instruments', 'String Instruments', 'Kitchen Appliances',
'Kitchen Utencils', 'Lakes', 'Ford Cars',
'Toyota Cars', 'Hostess Brand Products', 'Wedding Traditions', 'Harry Potter Characters',
'Lord of the Rings Characters', 'Books of the Bible',
'Dog Breeds', 'Christmas Carols', 'Types of Birds', 'Breakfast Cereals', 'Types of Donuts',
'Countries South of the Equator', 'Animal Cartoon Characters', 'Orphans in Literature', 'Toothpaste Brands', 'Candy Bars',
'Things You Get in the Mail', 'Things You Shouldn\'t Touch', 'Foreign Words Now Used in English', 'Kinds of Soup', 'Things You Throw Away',
'Famous Duos & Trios', 'Things You Replace', 'Words Associated With Exercise', 'Reptiles', 'Amphibians', 'Spices & Herbs', 'Magazines', 'Sticky Things',
'Animals in Books', 'Animals in Movies', 'Food Eaten Raw', 'Children\'s Books', 'Mobile Apps', 'Things in a Sandwich'
]
getCategoryButton.addEventListener('click', () => {
  const newCategory = categories[Math.floor(Math.random() * categories.length)]
  categoryEl.textContent = newCategory
  categoryEl.classList.remove('invisible')
  categoryEl.style.backgroundColor = '#ccff00'
  if (allowAudio) {
    audio3.play()
  }
})

pointsButton.addEventListener('click', () => {
  points++
  pointsEl.textContent = points
  if (allowAudio) {
    audio4.play()
  }
})

pointsResetButton.addEventListener('click', () => {
  points = 0
  pointsEl.textContent = points
})
