const deck1Choices = ["birthday cake", "chainsaw", "teddy bear", "rattlesnake",
                            "fat crayon", "beetle collection", "cupcake", "belly button",
                            "toothbrush", "gummy shark", "clown wig", "pair of moon boots", "spider",
                            "potato", "slice of bacon", "holey sock", "bowtie", "peach pie", 'bunny slipper', 'rubber chicken', 'pet cow', 
                            'fidget spinner', 'phone booth', 'mummy sleeping bag', 'ketchup bottle', 'porta potty', 'q-tip', 'split pea soup']
shuffle(deck1Choices);
const itemSuggestionsEl = document.getElementById('item-suggestions')
const itemChosenEl = document.getElementById('chosen-item')
const actionSuggestionsEl = document.getElementById('action-suggestions')
const actionChosenEl = document.getElementById('chosen-action')
const putTogetherEl = document.getElementById('put-together')
const speechBubbleEl = document.getElementById('put-together-speech-bubble')

let itemChosen = null
let actionChosen = null

deck1Choices.forEach(choice => {
    const itemEl = document.createElement('button')
    itemEl.classList.add('md:p-2.5', 'rounded-full', 'font-bold', 'bg-gray-900', 'text-white', 'hover:bg-yellow-900', 'text-xs', 'md:text-base', 'p-2',)
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    itemEl.style.borderWidth = '8px'
    itemEl.style.borderStyle = 'solid'
    itemEl.style.borderColor = randomColor
    itemEl.textContent = choice
    itemSuggestionsEl.appendChild(itemEl)
    itemEl.addEventListener('click', () => {
        itemChosenEl.classList.remove('invisible')
        itemChosenEl.textContent = itemEl.textContent
        itemChosen = itemEl.textContent
        if (actionChosen) {
            putItTogether()
        } 
    })
})

const deck2Choices = ["eat it up", "make noise with it", "hug it", "wear it",
                "milk it", "write with it", "scare someone with it",
                "lick it", "admire it", "put toothpaste on it", 
                "stick it on your head", "dance with it", "stick it on my head",
                "fry it in a pan", "name it Fred", "give it a perm", "apply makeup on it",
                 "take out its appendix", 'plant it in a pot', 'take it to a dance', 'eat it whole', 'build it a house',
                 'take it skydiving', 'teach it to drive', 'bury it'
                ]
shuffle(deck2Choices)

deck2Choices.forEach(choice => {
    const itemEl = document.createElement('button')
    itemEl.classList.add('md:p-2.5', 'p-2', 'rounded-full', 'font-bold', 'bg-gray-900', 'text-white', 'hover:bg-yellow-900', 'text-xs', 'md:text-base')
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    itemEl.style.borderWidth = '8px'
    itemEl.style.borderStyle = 'solid'
    itemEl.style.borderColor = randomColor
    itemEl.textContent = choice
    actionSuggestionsEl.appendChild(itemEl)
    itemEl.addEventListener('click', () => {
        actionChosenEl.classList.remove('invisible')
        actionChosenEl.textContent = itemEl.textContent
        actionChosen = itemEl.textContent
        if (itemChosen) {
            putItTogether()
        }
    })
})

function putItTogether() {
    speechBubbleEl.textContent = `When I go out west, I will bring my ${itemChosen} and ${actionChosen}.`
    putTogetherEl.classList.remove('invisible')
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(deckChoices) {
    var currentIndex = deckChoices.length
    var tempValue
    var randomIndex
    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex-=1;
        tempValue = deckChoices[currentIndex]
        deckChoices[currentIndex] = deckChoices[randomIndex]
        deckChoices[randomIndex] = tempValue
    }
    
    return deckChoices
        
}