
window.addEventListener('load', () => {
    const gridEl = document.getElementById('card-grid')
    const focusImage = document.getElementById('focus-image')
    const instructionEl = document.getElementById('instruction')
    const newButton = document.getElementById('new')
    
    shuffle(images)
    const tenImages = images.slice(0, 10)
    tenImages.forEach(image => {
        const cardEl = document.createElement('div')
        cardEl.classList.add('bg-cover', 'bg-no-repeat', 'bg-center', 'rounded-xl', 'shadow-lg', 'card', 'bg-gray-800')
        cardEl.style.backgroundImage = `url(static/images/dixit/${image})`
        cardEl.addEventListener('click', (e) => {
        gridEl.classList.add('hidden')
        focusImage.classList.remove('hidden')
        focusImage.classList.add('flex')
        focusImage.style.backgroundImage = e.target.style.backgroundImage
        instructionEl.textContent = 'Think of a word, phrase, sound, or sentence to describe this image.'
        newButton.textContent="Choose a different card"
        })
        gridEl.appendChild(cardEl)
    })

    newButton.addEventListener('click', () => {
        location.reload()
    })
})

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
    