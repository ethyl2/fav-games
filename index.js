const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

const paragraphEls = document.getElementsByTagName('p')
const anchorEls = document.getElementsByTagName('a')
const darkModeButton = document.getElementById('dark-mode')
const gridEl = document.getElementById('grid')
const cards = document.getElementsByTagName('li')
const descriptions = document.getElementsByTagName('h3')
const instructionItems = document.getElementsByClassName('instruction-item')
darkModeButton.addEventListener('click', () => {
    Array.from(paragraphEls).forEach(el => {
        el.classList.toggle('text-yellow-500')
    })
    Array.from(anchorEls).forEach(el => {
        el.classList.toggle('text-blue-600')
        el.classList.toggle('text-green-400')
    })
    gridEl.classList.toggle('bg-white')
    gridEl.classList.toggle('bg-gray-900')
    Array.from(cards).forEach(card => {
        card.classList.toggle('bg-white')
        card.classList.toggle('bg-black')
    })
    Array.from(descriptions).forEach(el => {
        el.classList.toggle('text-blue-400')
    })
    darkModeButton.classList.toggle('text-gray-800')
    darkModeButton.classList.toggle('text-white')
    darkModeButton.classList.toggle('hover:bg-gray-50')
    darkModeButton.classList.toggle('hover:bg-gray-700')

    Array.from(instructionItems).forEach(el => {
        el.classList.toggle('bg-white')
        el.classList.toggle('bg-black')
        el.classList.toggle('text-yellow-500')
    })

    if (darkModeButton.textContent === 'Dark Mode') {
        darkModeButton.textContent = 'Light Mode'
    } else {
        darkModeButton.textContent = 'Dark Mode'
    }
})


const games = [
    {
        title: 'Codenames',
        url: 'https://codenames.game/',
        gameLogoSrc: 'images/Codenames.png',
        gameLogoAlt: 'Codenames art',
        description: 'The Top Secret Word Game - Win or lose, it\'s fun to figure out the clues!',
        howTo: `<p class="text-xs mt-2 md:text-sm"> A fun and challenging social word game with a simple premise. Two rival spymasters know the secret
        identities of 25 agents. Their teammates know the agents only by their CODENAMES. Teams compete to contact all of their agents first.
        </p>`,
    }
]

// const testEl = document.getElementById('test')
// games.forEach(game => {
//     const gameLi = document.createElement('li')
//     const h2El = document.createElement('h2')
//     h2El.textContent = game.title
//     h2El.classList.add('text-xl', 'text-green-500', 'text-center', 'mb-2', 'md:text-3xl', 'transition', 'duration-500', 'ease-in-out', 'transform', 'hover:text-green-600', 'hover:-translate-y-1', 'hover:scale-105')
//     gameLi.append(h2El)
//     testEl.append(gameLi)
// })


/**
 * <!-- CODENAMES -->
              <li class="bg-white flip-scale-up-hor border border-green-300 rounded p-4 lg:w-1/2 max-w-xs w-full md:w-auto md:max-w-md m-4 ">
                  <a href="https://codenames.game/" target="_blank" rel="noopener nofollow noreferrer">
                    <h2 class="text-xl text-green-500 text-center mb-2 md:text-3xl transition duration-500 ease-in-out transform hover:text-green-600 hover:-translate-y-1 hover:scale-105">Codenames</h2>
                </a>
                  <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-4 md:items-center">
                      <a class="flex items-center justify-center flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://codenames.game/" target="_blank" rel="noopener nofollow noreferrer"><img src="images/Codenames.png" alt="Codenames art" style="max-width: 133px;" /></a>
                      <h3 class="text-sm md:text-base">The Top Secret Word Game - Win or lose, it's fun to figure out the clues!</h3>
                  </div>
                  <p class="text-xs mt-2 md:text-sm"> A fun and challenging social word game with a simple premise. Two rival spymasters know the secret
                      identities of 25 agents. Their teammates know the agents only by their CODENAMES. Teams compete to contact all of their agents first.
                  </p>
                  <a class="underline text-blue-600 text-xs md:text-sm hover:text-blue-900" href="https://codenames.game/" target="_blank" rel="noopener nofollow noreferrer">https://codenames.game/</a>
              </li>
 */