window.addEventListener('load', setUpGameGrid)
const gameListEl = document.getElementById('game-list')

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

// Game Cards based on component from tailwind ui: https://tailwindui.com/components/marketing/sections/blog-sections
function setUpGameGrid() {
    games.filter(game=> game.mine === true).forEach(game => {
        const gameCardEl = document.createElement('article')
        gameCardEl.classList.add('relative','isolate', 'flex', 'mx-4', 'md:mx-0', 'flex-col', 'justify-end', 'overflow-hidden', 'rounded-2xl', 'bg-gray-900', 'px-8', 'pb-8', 'pt-80', 'sm:pt-48','lg:pt-80')
        const imageEl = document.createElement('img')
        imageEl.src = game.gameLogoSrc
        imageEl.alt = 'alt goes here'
        imageEl.classList.add('absolute', 'inset-0', '-z-10', 'h-full', 'w-full', 'object-cover')
        
        gameCardEl.appendChild(imageEl)

        const firstDiv = document.createElement('div')
        firstDiv.classList.add('absolute', 'inset-0', '-z-10', 'bg-gradient-to-t', 'from-gray-900', 'via-gray-900/40')
        gameCardEl.appendChild(firstDiv)

        const secondDiv = document.createElement('div')
        secondDiv.classList.add('absolute', 'inset-0', '-z-10', 'rounded-2xl', 'ring-1', 'ring-inset', 'ring-gray-900/10')
        gameCardEl.appendChild(secondDiv)

        const contentDiv = document.createElement('div')
        contentDiv.classList.add('flex', 'flex-wrap', 'items-center', 'gap-y-1', 'overflow-hidden', 'text-sm', 'leading-6', 'text-gray-300')
        const dateEl = document.createElement('time')
        dateEl.datetime = game.dateAdded
        dateEl.textContent = game.dateAdded
        dateEl.classList.add('mr-8')
        contentDiv.appendChild(dateEl)

        const avatarContainer = document.createElement('div')
        avatarContainer.classList.add('-ml-4', 'flex', 'items-center', 'gap-x-4')
        const circleEl = document.createElement('div')
        circleEl.classList.add('rounded-full', 'h-0.5', 'w-0.5', 'bg-white')
        avatarContainer.appendChild(circleEl)
        

        const innerAvatarContainer = document.createElement('div')
        innerAvatarContainer.classList.add('flex', 'gap-x-2.5')

        const avatarImageEl = document.createElement('img')
        avatarImageEl.src = './images/heather-avatar.jpeg'
        avatarImageEl.alt = 'Heather Nuffer'
        avatarImageEl.classList.add('h-6', 'w-6', 'flex-none', 'rounded-full', 'bg-white/10')

        innerAvatarContainer.appendChild(avatarImageEl)

        const authorEl = document.createElement('span')
        authorEl.textContent = 'Heather Nuffer'
        innerAvatarContainer.appendChild(authorEl)

        avatarContainer.appendChild(innerAvatarContainer)
        contentDiv.appendChild(avatarContainer)
        gameCardEl.appendChild(contentDiv)

        const gameTitleEl = document.createElement('h3')
        
        gameTitleEl.classList.add('game-title-el', 'mt-3', 'text-lg', 'font-semibold', 'leading-6', 'text-white')

        gameTitleLink = document.createElement('a')
        gameTitleLink.href = game.url

        const gameTitleSpan = document.createElement('span')
        gameTitleSpan.classList.add('absolute', 'inset-0')
        
        gameTitleLink.textContent = game.title
        gameTitleLink.appendChild(gameTitleSpan)
        gameTitleEl.appendChild(gameTitleLink)

        gameCardEl.appendChild(gameTitleEl)
        gameListEl.appendChild(gameCardEl)
    })
}