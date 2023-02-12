const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

const currentCatEl = document.getElementById('current-cat')
const articleSpan = document.getElementById('article')

const alphaCatsSection = document.getElementById('alpha-cats')

const catImages = ['cat-1.png', 'cat-2.png', 'cat-3.png', 'cat-4.png', 'cat-5.png', 'cat-6.png', 'cat-7.png', 'cat-8.png', 'cat-9.png', 'cat-10.png', 'cat-11.png', 'cat-12.png', 'cat-13.png', 'cat-14.png', 'cat-15.png', 'cat-16.png', 'cat-17.png']

const audioButton = document.getElementById('audio')
let audioIsOn = false

audioButton.addEventListener('click', () => {
  audioIsOn = !audioIsOn
  if (audioIsOn) {
    audioButton.textContent = 'Turn Audio Off'
  } else {
    audioButton.textContent = 'Turn Audio On'
  }
})

for (let i=0; i<26; i++) {
  const alphaCat = document.createElement('div')
  alphaCat.classList.add('w-12', 'h-12', 'md:w-36', 'md:h-36', 'pt-5', 'md:pt-16', 'pr-2', 'md:pr-5', 'bg-center', 'bg-cover', 'bg-no-repeat', 'm-1', 'md:m-2', 'rounded-lg', 'flex', 'justify-center', 'items-center', 'bg-yellow-100', 'hover:bg-yellow-200')
  const letterEl = document.createElement('p')
  letterEl.textContent = String.fromCharCode(65 + i)
  letterEl.classList.add('text-2xl', 'md:text-5xl', 'font-bold', 'text-gray-600', 'cursor-pointer')
  alphaCat.appendChild(letterEl)
  alphaCat.style.backgroundImage = `url(./static/images/cats/${catImages[i % catImages.length]})`
  alphaCat.addEventListener('click', () => {
    const alphaCatChild = alphaCat.firstChild
    setCurrentCat(alphaCatChild.textContent)
    if (audioIsOn) {
      const meow = new Audio('./static/audio/meow.mp3')
      meow.play()
    }
  })
  alphaCatsSection.appendChild(alphaCat)
}

const catAdjectives = {
  'A': ['Adorable', 'Angry', 'Aggressive', 'Awesome', 'Adventurous', 'Agile', 'Agitated', 'Arthritic', 'Affordable', 'Austere', 'Angelic', 'Aggressive',
        'Alert', 'Alive', 'Anxious', 'Affable', 'Adaptable', 'Attentive', 'Analytical', 'Accomplished', 'Artistic', 'Amusing', 'Aloof', 'Active'],
  'B': ['Beautiful', 'Bored', 'Bewildered', 'Bewitched', 'Baby', 'Black', 'Brown', 'Bejeweled', 'Brave', 'Boring', 'Bold', 'Bad-tempered', 'Bashful', 'Bossy', 'Boisterous',
        'Bushy', 'Bushy', 'Brainy', 'Beefy', 'Blissful', 'Bad', 'Bitter', 'Bankrupt', 'Bogus', 'Bearded', 'Blind', 'Bighearted', 'Bony', 'Broken', 'Beloved', 'Bulky',
        'Bold', 'Brainless', 'Bedridden', 'Buff', 'Bobtailed', 'Beige', 'Basic',
        'Bemused', 'Brown', 'Big', 'Barren', 'Bullheaded', 'Bewitching', 'Biased', 'Bizarre', 'Batty', 'Brawny', 'Bodacious', 'Buoyant', 'Bicolored'],
  'C': ['Cute', 'Carnivorous', 'Compassionate', 'Communicative', 'Cuddly', 'Curious', 'Crazy', 'Chocolate-colored', 'Coffee-colored', 'Crepuscular', 'Comptetitive',
        'Cowardly', 'Cool', 'Chunky', 'Clueless', 'Cooperative', 'Confident', 'Calm', 'Cautious', 'Charming', 'Chatty', 'Cheerful', 'Chubby', 'Clean','Clever', 'Clumsy', 'Colorful',],
  'D': ['Dapper', 'Determined', 'Daring', 'Dashing', 'Dumb', 'Dumbfounded', 'Dumbstruck', 'Durable', 'Dutiful', 'Dignified', 'Domestic',
        'Damaged', 'Dusty', 'Dazzling', 'Dynamic', 'Dependable', 'Domesticated', 'Dirty', 'Dead', 'Demanding', 'Difficult', 'Disloyal', 'Digitagrade'],
  'E': ['Elegant', 'Energetic', 'Enraged', 'Enraptured', 'Expensive', 'Evil', 'Exhausted', 'Exuberant', 'Exciting', 'Exquisite', 'Exotic',
        'Exemplary', 'Extroverted', 'Easygoing', 'Emotional', 'Enchanting', 'Enthusiastic', 'Eccentric', 'Excellent', 'Egotistical', 'Embarrassing', 'Embittered', 'Elephantine'],
  'F': ['Fancy', 'Fierce', 'Furious', 'Frightened', 'Free', 'Fearless', 'Festive', 'Feeble', 'Female', 'Forgiving', 'Fussy', 'Faithful', 'Farm', 'Feral', 'Fictional',
        'Flirtatious', 'Floppy', 'Forgetful', 'Frisky', 'Frumpy', 'Frustrated', 'Fully-grown', 'Fun', 'Foul-smelling', 'Fun-loving', 'Formidable',
        'Fat', 'Fake', 'Friendly', 'Furry', 'Fuzzy', 'Fast', 'Focused', 'Funny', 'Faithful', 'Finicky', 'Foolish', 'Faint-hearted', 'Flexible', 'Fluffy', 'Fantastic', 'Flat', 'Fidgity'],
  'G': ['Gorgeous', 'Gentle', 'Giggly', 'Gloomy', 'Glow-in-the-dark', 'Gassy', 'Grumpy', 'Good', 'Gregarious', 'Gullible', 'Goofy', 'Gray',
        'Gifted', 'Glamorous', 'Glorious', 'Golden', 'Graceful', 'Groovy', 'Gluttenous', 'Greedy', 'Gawky', 'Genial', 'Glum', 'Gutsy', 'Geriatric',],
  'H': ['Handsome', 'Happy', 'Hilarious', 'Hungry', 'Heavy', 'Humble', 'Honest', 'Huge', 'Hairy', 'Hairless', 'Hunter', 'Hard-working', 'Humorous', 'Helpful', 'Hostile', 'Healthy',
        'High-strung', 'House', 'Hypoallergenic', 'Haughty', 'Healing', 'Hated', 'Heartless', 'Hypothetical', 'Hale', 'Homesick',
        'Haunted', 'Hardy', 'Homocidal', 'Hideous', 'Hotheaded', 'Hesitant', 'Hyperactive', 'Harmless', 'Hoary', 'High-spirited'],
  'I': ['Incredible', 'Inquisitive', 'Irritated', 'Irrational', 'Intelligent', 'Interesting', 'Invisible', 'Imaginary', 'Introverted', 'Impulsive', 'Insecure',
        'Important', 'Incomparable', 'Industrious', 'Innocent', 'Intrepid', 'Independent', 'Impatient', 'Impolite', 'Insane', 'Impish', 'Inferior', 'Itty-Bitty'],
  'J': ['Jazzy', 'Jolly', 'Jovial', 'Jubilant', 'Joyful', 'Jealous', 'Jovial', 'Japanese', 'Jinxed', 'Jittery', 'Judgemental', 'Jumbo', 'Jumpy', 'Juvenile', 'Jungle', 'Jailed'],
  'K': ['Killer', 'Kind', 'Koolaid-loving', 'Kingly', 'Knowledgeable', 'Kind-hearted', 'King-sized', 'Kissable', 'Klutzy', 'Knavish', 'Korean', 'Kuwaiti', 'Kleptomaniac', 'Kooky'],
  'L': ['Lovable', 'Loyal', 'Lively', 'Loud', 'Lazy', 'Lionlike', 'Lucky', 'Light', 'Lovely', 'Loopy', 'Loquacious', 'Lowly', 'Literal', 'Live', 'Local', 'Lofty', 'Logical', 'Little', 'Lopsided', 'Lost',
        'Likeable', 'Ladylike', 'Lame', 'Lanky', 'Large', 'Leftover', 'Lifesize', 'Long', 'Limber', 'Lean', 'Loathsome', 'Longhaired',
        'Left-handed', 'Legendary', 'Lethal', 'Lifeless', 'Low-maintenance', 'Lucrative', 'Lumpy', 'Leonine', 'Loving'],
  'M': ['Magnificent', 'Majestic', 'Mellow', 'Mysterious', 'Merry', 'Mustard-colored', 'Musical', 'Mean', 'Misshapen', 'Maladjusted',
        'Magical', 'Mama', 'Messy', 'Monstrous', 'Meek', 'Melodramatic', 'Morose', 'Mischievous', 'Miserable', 'Misunderstood', 'Malodorous',
        'Male', 'Medium', 'Mature', 'Moody', 'Mad', 'Manageable', 'Mesmerizing', 'Motivated', 'Mannerly', 'Manipulative', 'Meddlesome', 'Malicious', 'Mediocre', 'Motionless'],
  'N': ['Noble', 'Nervous', 'Noisy', 'Naughty', 'Nutty', 'Neat', 'Nice', 'Non-judgemental', 'Naked', 'Nonpedigreed', 'Nosy', 'Nurturing', 'Neglected', 'Newborn', 'Nondescript',
        'Nifty', 'Nightmarish', 'Nimble', 'Nimble-minded', 'Needy', 'Neurotic', 'Nocturnal', 'Newsworthy', 'Normal', 'Nutty', 'Nonchalant', 'Noncompetitive',
        'Noteworthy'],
  'O': ['Outstanding', 'Obedient', 'Obnoxious', 'Odd', 'Orange', 'Observant', 'Optimistic', 'Overemotional', 'Obstinate', 'Oblivious',
        'Odorous', 'Oily', 'Okay', 'Out-of-this-world', 'Opinionated', 'Obese', 'Old', 'Older', 'Opaque', 'Obeisant', 'Ornery', 'Outdoorsy', 'Outspoken', 'Overconfident'],
  'P': ['Precious', 'Playful', 'Proud', 'Puzzled', 'Papa', 'Picky', 'Pretty', 'Pale', 'Pleasant', 'Pedigreed',
        'Peaceful', 'Persistent', 'Polite', 'Popular', 'Pessimistic', 'Plucky', 'Powerful', 'Pig-headed', 'Pompous'],
  'Q': ['Quirky', 'Quiet', 'Quaint', 'Quizzical', 'Quick-witted', 'Quality', 'Quarantined', 'Queenlike', 'Queen-size', 'Quick-tempered', 'Quizzical', 'Quotable', 'Questionable'],
  'R': ['Ravishing', 'Rambunctious', 'Rebellious', 'Ridiculous', 'Respectful', 'Reflective', 'Rude', 'Reserved', 'Romantic', 'Ruthless', 'Regular',
        'Ravenous', 'Reliable', 'Repugnant', 'Repulsive', 'Restless', 'Resilient', 'Rich', 'Rare', 'Respectable', 'Remarkable', 'Real',
        'Reclusive', 'Respected', 'Relaxed', 'Rational', 'Radioactive', 'Round', 'Roundish', 'Rabid', 'Recognizable', 'Restrained', 'Runaway',],
  'S': ['Sassy', 'Secretive', 'Sullen', 'Silly', 'Sneaky', 'Sneezing', 'Skinny', 'Smelly', 'Stinky', 'Sleepy', 'Sick', 'Saintly', 'Simple', 'Spoiled', 'Submissive', 'Spineless',
        'Soggy', 'Smart', 'Sharp', 'Sensational', 'Sun-loving', 'Scary', 'Slow', 'Sandy', 'Sloth-like', 'Sad', 'Skilled', 'Selfish', 'Shy', 'Sensible', 'Sensitive', 'Socialable',
        'Stressed', 'Striped', 'Shorthaired', 'Social', 'Solitary', 'Silver', 'Silly-looking'],
  'T': ['Talented', 'Tender', 'Tense', 'Terrified', 'Three-dimensional', 'Tiny', 'Toothless', 'Tricky', 'Tranquil', 'Troubled', 'Tired', 'Tormented', 'Teensy', 'Texan',
        'Terrible', 'Thankful', 'Teal', 'Teachable', 'Tidy', 'Tranquil', 'Terrible', 'Typical', 'Twitchy', 'Touchy', 'Timid', 'Tough', 'Thin', 'Thirsty', 'Toothless',
        'Typical', 'Tenderhearted', 'Therapeutic', 'Top-notch', 'Trendy', 'Trusting', 'Tyrannical', 'Tabby', 'Taciturn', 'Traitorous', 'Tawny', 'Tubby', 'Tameable',],
  'U': ['Unique', 'Unusual', 'Unhappy', 'Unruly', 'Ugly', 'Unsightly', 'Unlucky', 'Unfriendly', 'Unsteady',
        'Uncivilized', 'Unpredictable', 'Unpleasant', 'Untidy', 'Unassuming', 'Unhealthy'],
  'V': ['Valiant', 'Vivacious', 'Vigilant', 'Vengeful', 'Vibrant', 'Vain', 'Vegan', 'Vegetarian', 'Velvety', 'Violent', 'Voiceless', 'Vulnerable', 'Venomous', 'Vicious', 'Virtuous', 'Vexing'],
  'W': ['Wonderful', 'Wise', 'Witty', 'Worried', 'White', 'Warmhearted', 'Wild', 'Wacky', 'Weak', 'Worldly', 'Wizen', 'Woozy', 'Wealthy',
        'Well-known', 'Willful', 'Winsome', 'World-class', 'Wicked', 'Worthless', 'Wounded', 'Wet', 'Wee', 'Wiry', 'Wobbly', 'Wrinkly'],
  'X': ['Xtraordinary', 'Xenophobic', 'Xenodochial',],
  'Y': ['Yellow', 'Yawning', 'Young', 'Young-looking', 'Youthful', 'Yellower', 'Yankee', 'Yellow-bellied', 'Young-at-heart', 'Youngish', 'Yawning', 'Yugoslavian',],
  'Z': ['Zany', 'Zealous', 'Zippy', 'Zaftig', 'Zombielike']
}

const vowels = ['A', 'E', 'I', 'O', 'U']

function getAdjectives(letter) {
  return catAdjectives[letter]
}

function setCurrentCat(letter) {

  const choices = getAdjectives(letter)
  const choice = choices[Math.floor(Math.random() * choices.length)]
  currentCatEl.textContent = choice.toLowerCase()

  if (vowels.includes(letter)) {
    articleSpan.textContent = 'an'
  } else {
    articleSpan.textContent = 'a'
  }
}
