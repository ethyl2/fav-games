const form = document.getElementById('clue-submission')
const  submissionStatus = document.getElementById('my-form-status')
const possibleImagesInput = document.getElementById('possible-images')

window.addEventListener('load', () => {
    const gridEl = document.getElementById('card-grid')
    const focusImage = document.getElementById('focus-image')
    const instructionEl = document.getElementById('instruction')
    const newButton = document.getElementById('new')
    
    shuffle(images)
    const tenImages = images.slice(0, 10)
    possibleImagesInput.value = tenImages.toString()
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
            form.classList.remove('hidden')
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

async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        submissionStatus.textContent = "Thanks for your clue! I'll try to guess which image you picked and get back to you.";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            submissionStatus.textContent = data["errors"].map(error => error["message"]).join(", ")
          } else {
            submissionStatus.textContent = "Oops! There was a problem submitting your form. Please try again later."
          }
        })
      }
    }).catch(error => {
        submissionStatus.textContent = "Oops! There was a problem submitting your form. Please try again later."
    });
  }
  form.addEventListener("submit", handleSubmit)
    