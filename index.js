const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

const paragraphEls = document.getElementsByTagName('p')
const anchorEls = document.getElementsByTagName('a')
const darkModeButton = document.getElementById('dark-mode')
const gridEl = document.getElementById('grid')
const cards = document.getElementsByTagName('li')
const descriptions = document.getElementsByTagName('h2')
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

// Share using JS native web share API
// https://dev.to/dailydevtips1/using-the-native-web-share-javascript-api-23ei

const shareButton = document.getElementById('share-button')

if ('share' in navigator) {
    // native share is available!
    shareButton.classList.remove('hidden')
    shareButton.classList.add('block')
} else {
    // native share is not available :(
    shareButton.classList.remove('block')
    shareButton.classList.add('hidden')
}

shareButton.addEventListener('click', (event) => {
    if ('share' in navigator) {
      navigator
        .share({
          title: 'Favorite Free Online Group Games',
          url: 'https://ethyl2.github.io/fav-games/',
        })
        .then(() => {
          shareButton.classList.add('bg-purple-800', 'hover:bg-purple-700')
        })
        .catch(console.error);
    }
});

window.addEventListener('load', loadGames)

function loadGames() {
  const gameContainerEl = document.getElementById('game-container')
  games.forEach(game => {
      // Parent Element
      const gameLi = document.createElement('li')
      gameLi.classList.add('flex', 'flex-col', 'items-center', 'justify-start', 'bg-white','flip-scale-up-hor', 'border', 'border-green-300', 'rounded', 'p-4', 'lg:w-1/2', 'max-w-xs', 'w-full', 'md:w-auto', 'md:max-w-md', 'm-4')

      // Game title @top
      const link = document.createElement('a')
      link.href = game.url
      link.target = '_blank'
      link.rel = 'noopener nofollow noreferrer'
      link.textContent = game.title
      link.classList.add('text-center', 'font-bold', 'text-xl', 'text-green-500', 'text-center', 'mb-2', 'md:text-3xl', 'transition', 'duration-500', 'ease-in-out', 'transform', 'hover:text-green-600', 'hover:-translate-y-1', 'hover:scale-105')

      // Middle section
      const middleDiv = document.createElement('div')
      middleDiv.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-3', 'md:space-y-0', 'md:flex-row', 'md:space-x-4', 'md:items-center')

      // Game image
      const imageLink = document.createElement('a')
      imageLink.href = game.url
      imageLink.target = '_blank'
      imageLink.rel = 'noopener nofollow noreferrer'
      const gameImage = document.createElement('img')
      gameImage.src = game.gameLogoSrc
      gameImage.alt = game.gameLogoAlt
      gameImage.style.maxWidth = '133px'
      imageLink.append(gameImage)
      middleDiv.append(imageLink)

      // Description
      const description = document.createElement('h2')
      description.classList.add('text-sm', 'md:text-base')
      description.textContent = game.description
      middleDiv.append(description)

      // How to play paragraph(s)
      const howToEl = document.createElement('div')
      howToEl.innerHTML = game.howTo

      // Append all to parent
      gameLi.append(link)
      gameLi.append(middleDiv)
      gameLi.append(howToEl)
      gameContainerEl.append(gameLi)
  })
}
