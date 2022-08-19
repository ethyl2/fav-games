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
    },
    {
        title: 'Skribbl.io',
        url: 'https://skribbl.io/',
        gameLogoSrc: 'images/Skribblio.jpg',
        gameLogoAlt: 'Skribbl.io logo',
        description: 'Free multiplayer drawing and guessing game',
        howTo: `<p class="text-xs mt-2 md:text-sm"> One game consists of a few rounds in which every round someone has to draw their chosen word and others have to guess it to gain points!
                  The person with the most points at the end of game will then be crowned as the winner!
              </p>`,
    },
    {
        title: 'Song Trivia 2',
        url: 'https://songtrivia2.io/',
        gameLogoSrc: 'images/SongTrivia2.svg',
        gameLogoAlt: 'Song Trivia 2 Logo',
        description: 'Test your musical knowledge - Challenge your friends - Discover new artists',
        howTo: `<p class="text-xs mt-2 md:text-sm">A music quiz game that allows you to play online with other players or your friends.</p>`,
    },
    {
        title: 'Gartic Phone',
        url: 'https://garticphone.com/',
        gameLogoSrc: 'images/GarticPhone.png',
        gameLogoAlt: 'Gartic Phone Logo',
        description: 'The online Telephone game! Play the popular game for free.',
        howTo: `<p class="text-xs mt-2 md:text-sm"> Invite your friends to a voice call (Discord, Zoom). Each player must write a quirky sentence. You gonna receive a
                   bizarre sentence to draw. Try to describe one of the crazy drawings. Watch the hilarious results of the telephone game!
             </p>`,
    },
    {
        title: 'Scattergories',
        url: 'https://swellgarfo.com/scattergories/',
        gameLogoSrc: 'images/scattergories-logo.png',
        gameLogoAlt: 'Scattergories logo',
        description: 'Exercise your brain by thinking of words and phrases that start with the specified letter.',
        howTo: `<p class="text-xs mt-2 md:text-sm">
               Play with friends by sharing your screen in a zoom call and have everyone write things down on paper or in a google
               sheet. OR pick 'Play Online (BETA)' to do everything in your browser.
               See the 'Rulebook' tab in the online version for instructions on how to play.
             </p>`,
    },
    {
        title: 'Capitalista',
        url: 'https://play.gidd.io/',
        gameLogoSrc: 'images/giddio-logo.png',
        gameLogoAlt: 'gidd.io logo',
        description: 'In this Monopoly-like game, your friends and you try to buy as much properties as possible in order to become the next estate mogul.',
        howTo: `<p class="text-xs mt-2 md:text-sm">
              Choose a name and a color, and then select <span class="text-green-600">Capitalista</span>.</p>
            <p class="text-xs mt-2 md:text-sm">
              Copy the invite link on the left and share it with your friends.</p>
            <p class="text-xs mt-2 md:text-sm">
              Choose from configuration options -- will you be able to collect rent while in jail? Will the properties be
              auctioned if someone doesn't buy them? You decide.
            </p>
            <p class="text-xs mt-2 md:text-sm">
              Once the game is started you can communicate with friends using the chat. Or start a zoom and talk to each other
              instead!
            </p>`,
    },
    {
        title: 'Taboo',
        url: 'https://playtaboo.com/playpage/',
        gameLogoSrc: 'images/taboo-logo.png',
        gameLogoAlt: 'taboo logo',
        description: 'Can you describe a word or phase without using words in the taboo list?',
        howTo: `<p class="text-xs mt-2 md:text-sm">
              Start a zoom, and if you have enough players, divide into 2 teams. If your group is small, just play as one team.
              Designate someone as the score keeper. </p>
            <p class="text-xs mt-2 md:text-sm">
              Players take turns being the one to press 'Play' and start describing the word or phrase on top of the card, without
              using any of the words on the taboo list on the card.</p>
            <p class="text-xs mt-2 md:text-sm">
              Click 'Next' once the word or phase is guessed by your team, until time runs out. One point is earned for each
              correct guess, given to the team if playing with 2 teams, or to the individual if playing with only one team.
              You can read more about the game rules <a href="https://playtaboo.com/rules-of-the-taboo-game/"
                class="underline text-blue-600 text-xs md:text-sm hover:text-blue-900" target="_blank" rel="noopener nofollow noreferrer"
                rel="noopener nofollow noreferrer">here</a>.
            </p>`,
    },
    {
        title: 'Jigsaw Explorer',
        url: 'https://www.jigsawexplorer.com/',
        gameLogoSrc: 'images/jigsaw-explorer.png',
        gameLogoAlt: 'Jigsaw Explorer',
        description: 'Put jigsaw puzzles together with online friends',
        howTo: `<div class="text-xs mt-2 md:text-sm">
              <ol class="list-decimal list-inside space-y-1">
                <li class="instruction-item">Click on a puzzle to choose it.</li>
                <li class="instruction-item">Then click on the 'Play this Puzzle' button.</li>
                <li class="instruction-item">Click on the 3x3 grid icon to select the number of puzzle pieces. (If you don't see the icons, click on the hamburger in the upper left and select 'modify this puzzle.')</li>
                <li class="instruction-item">Click on the people icon and then click on 'Create Game Link' in the left sidebar.</li>
                <li class="instruction-item">Copy the link and share it with your friends. Enjoy chatting over a zoom while you put the puzzle together as a team.</li>
              </ol>
            </div>`,
    },
    {
        title: 'Jstris',
        url: 'https://jstris.jezevec10.com/',
        gameLogoSrc: 'images/Jstris.png',
        gameLogoAlt: 'Jstris logo',
        description: 'A simple online multiplayer block game',
        howTo: `<div class="text-xs mt-2 md:text-sm">
          <ol class="list-decimal list-inside space-y-1">
          <li class="instruction-item">Click on the <span class="font-bold text-green-600">'Lobby'</span> button on the lower left.
          Then click on the <span class="font-bold text-green-600">'+ Create room'</span> button that is found after the rooms' list.</li>
          <li class="instruction-item">Choose the settings you would like -- probably check <span class="font-bold text-green-600">'Private'</span>.</li>
          <li class="instruction-item">Next, click on the <span class="font-bold text-green-600">'Create'</span> button.</li>
          <li class="instruction-item">The room will be created, and in the chat box, you should see 'This room is private. Only way someone can join it is using this link:' -- <span class="font-bold text-green-600">copy that link</span> and share with your friends.</li>
          <li class="instruction-item">Rotate the shapes by pressing the <span class="font-bold text-green-600">up arrow</span> or <span class="font-bold text-green-600">'z'</span>.
          Move the shapes left or right using the <span class="font-bold">arrows</span>. Drop the shape either using the <span class="font-bold text-green-600">down arrow</span>, and drop it quickly using the <span class="font-bold">space bar</span>.</li>
          <li class="instruction-item">You can change which keys do what by going to Settings & then Controls.</li>
        </ol>
        </div>`,
    },
    {
        title: 'Google Feud',
        url: 'https://www.googlefeud.com/',
        gameLogoSrc: 'images/google_feud.svg',
        gameLogoAlt: 'Google Feud logo',
        description: 'Guess the most popular autocomplete phrases in a Google search',
        howTo: `<p class="text-xs mt-2 md:text-sm">It's time to play the feud, search engine style!</p>
          <p class="text-xs mt-2 md:text-sm">
            This game is a bit tricky, so you probably want to select 'Easy Mode' to start.</p>
          <p class="text-xs mt-2 md:text-sm">
            Share your screen on zoom to play with friends!</p>
          <p class="text-xs mt-2 md:text-sm">
            Try to guess how Google autocompletes each search query. If you guess incorrectly, you get a strike.
          </p>`,
    },
    {
        title: 'Spyfall',
        url: 'https://spyfall.tannerkrewson.com/',
        gameLogoSrc: 'images/spyfall.jpg',
        gameLogoAlt: 'Spyfall Favicon',
        description: 'The spy\'s mission: to find out the location of the other players. The others\' mission: to figure out who is the spy.',
        howTo: `<p class="text-xs mt-2 md:text-sm">Click on 'New Game', and enter your name. Click 'Join' and you will be taken to a page with a slug at the end of the url, such as https://spyfall.tannerkrewson.com/dbxv. Share that link with friends.</p>
            <p class="text-xs mt-2 md:text-sm">
            Each player, except one player who is chosen to be the spy, is given a role and a location. (The location is the same for all of those players.)
            The spy has to guess the location, while other players have to identify the spy. Players ask each other questions,
            trying to lure the spy out without giving them too much information about what the location is.</p>
            <p class="text-xs mt-2 md:text-sm">At any time during the game, or at its end when the timer runs out, one player can accuse another of being the spy;
            if there is a consensus and the spy is identified, the spy loses; otherwise, the spy wins.
            Additionally, at any time the spy can announce that they are the spy, and try to guess the location.
            If successful, the spy wins, otherwise the spy loses.
          </p>`,
    },
    {
        title: 'Rummikub',
        url: 'https://rummikub-apps.com/',
        gameLogoSrc: 'images/rummikub-logo.png',
        gameLogoAlt: 'Rummikub logo',
        description: 'Tile-based game that combines elements of the card game rummy and mahjong',
        howTo: `<p class="text-xs mt-2 md:text-sm">
            Choose Private Game, then 'Invite with a code' to play with your friends online.
            Make sets of groups or runs with tiles, and add
            on to other players' sets. Win by being the first to use all of your tiles.
          </p>`,
    },
    {
        title: 'Crazy Eights AKA UNO',
        url: 'https://play.gidd.io/',
        gameLogoSrc: 'images/uno-cards.png',
        gameLogoAlt: 'cards',
        description: `Try to lose all your cards before your friends can. But be sure to say 'UNO' once you're down to one card left; otherwise, you'll have to draw 2 cards if other players notice.`,
        howTo: `<p class="text-xs mt-2 md:text-sm">
              Choose a name and a color, and then select <span class="text-green-600">Crazy Eights</span>.</p>
            <p class="text-xs mt-2 md:text-sm">
              Copy the invite link on the left and share it with your friends.</p>
            <p class="text-xs mt-2 md:text-sm">
              Click on 'Start Game' when you are ready.
            </p>
            <p class="text-xs mt-2 md:text-sm">
              A small moving arrow will point to the current player. Two large curvy arrows show the game direction, and their color is the current color.
            </p>
            <p class="text-xs mt-2 md:text-sm">
              Once the game is started you can communicate with friends using the chat. Or start a zoom and talk to each other
              instead!
            </p>`,
    },
    {
        title: 'Squabble',
        url: 'https://squabble.me/',
        gameLogoSrc: 'images/squabble-logo.png',
        gameLogoAlt: 'Squabble logo',
        description: 'A multiplayer version of the viral sensation Wordle',
        howTo: `<p class="text-xs mt-2 md:text-sm">
            Try to guess the 5-letter word. If you guess letters correctly, you get more health and the other players get damage. The last person alive wins. </p>
          <p class="text-xs mt-2 md:text-sm">
            Green squares show that the letter is in the right place (but there could be more of that letter in other places.) Yellow squares show that the letters are in the word, but currently in the wrong places.</p>
            <p class="text-xs mt-2 md:text-sm">
            Click on 'Blitz' and then 'Create Game' to get a lobby code to share with your friends.
          </p>`,
    },
    {
        title: 'Yatzy',
        url: 'https://play.gidd.io/',
        gameLogoSrc: 'images/dice.png',
        gameLogoAlt: 'dice',
        description: 'An online version of Yahtzee',
        howTo: `<p class="text-xs mt-2 md:text-sm">
            Choose a name and a color, and then select <span class="text-green-500">Yatzy</span>.</p>
          <p class="text-xs mt-2 md:text-sm">
            Copy the invite link on the left and share it with your friends.</p>
          <p class="text-xs mt-2 md:text-sm">
            Once you are ready, click on the Start Game button.
          </p>
          <p class="text-xs mt-2 md:text-sm">
            Take turns rolling the dice. Each player's turn consists of 3 rolls. You can keep dice before rerolling. Try to get each of the types of dice combinations listed, with as many points as you can.
            See the <a href="https://www.hasbro.com/common/instruct/yahtzee.pdf" target="_blank" rel="noopener nofollow noreferrer" class="font-bold text-purple-500 hover:text-purple-400">rules</a> for more details about the different dice combinations.
          </p>`,
    },
    {
        title: 'Six Second Rule',
        url: './six-second-rule.html',
        gameLogoSrc: 'images/six-second-rule.png',
        gameLogoAlt: 'dice',
        description: 'Quickly think of 3 things!',
        howTo: `<p class="text-xs mt-2 md:text-sm">
            Take turns thinking of 3 things that fit in the given category before time runs out!
          </p>`,
    },
    {
        title: 'Adverb',
        url: './adverb-game.html',
        gameLogoSrc: 'images/adverb.png',
        gameLogoAlt: 'acting out adverbs',
        description: 'Take turns telling people what to do, in order to guess the secret adverb.',
        howTo: `<p class="text-xs mt-2 md:text-sm">
            See the page for instructions and adverb suggestions.
          </p>`,
    },
]
