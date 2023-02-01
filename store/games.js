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
      title: 'Dixit',
      url: 'https://play-dixit.online/en/',
      gameLogoSrc: 'images/dixit.png',
      gameLogoAlt: 'Dixit logo',
      description: 'Online version of Dixit: a beautiful illustrated card game where your imagination unlocks the tale',
      howTo: `<div class="text-xs mt-2 md:text-sm">
            <ol class="list-decimal list-inside space-y-1">
              <li class="instruction-item">Type in a username, and then press 'Create a new private game.'</li>
              <li class="instruction-item">Share the url with your friends.</li>
              <li class="instruction-item">See the rules <a href="https://www.ultraboardgames.com/dixit/game-rules.php" target="_blank" rel="noopener nofollow noreferrer" class="underline text-blue-600 text-xs md:text-sm hover:text-blue-900">here</a>.</li>
              <li class="instruction-item">Basically, you take turns being the storyteller, who selects one of their illustrated cards and gives a clue about the illustration -- a word, phrase, sound or sentence.</li>
              <li class="instruction-item">Then everyone one else picks the illustrated card in their hand that they think best fits the clue.</li>
              <li class="instruction-item">Everyone but the storyteller votes on which card they think belongs to the storyteller, of the collection of cards that result.</li>
              <li class="instruction-item">Points are awarded to the storyteller if some (but not all) guess the correct card, and the other players get points they guessed the right card and also if someone picked their card.</li>
            </ol>
            <p>You can practice examining images and thinking of clues <a href="./dixit-practice.html" class="underline text-blue-600 text-xs md:text-sm hover:text-blue-900">here</a>.</p>
          </div>`,
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
      howTo:
          `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./adverb-game.html" target="_blank" class="underline text-green-500 hover:text-blue-600">page</a> for instructions and adverb suggestions.</p>`,
  },
  {
      title: 'Gartic.io',
      url: 'https://gartic.io/',
      gameLogoSrc: 'images/gartic-io.png',
      gameLogoAlt: 'Gartic.io logo',
      description: 'Draw, Guess, Win',
      howTo: `<p class="text-xs mt-2 md:text-sm">
          1. Choose your avatar, nickname, & language. Then click Rooms.
        </p>
        <p class="text-xs mt-2 md:text-sm">2. On the next screen, click on New Room.</p>
        <p class="text-xs mt-2 md:text-sm">3. The next screen is about settings. Once you've selected the details for your room, click New Room.</p>
        <p class="text-xs mt-2 md:text-sm">4. A modal will show the link to share with your friends.</p>
        <p class="text-xs mt-2 md:text-sm">5. Once everyone has joined, start the game. The player who draws first will automatically be chosen and they get to pick between two words or phrases to draw.</p>
        <p class="text-xs mt-2 md:text-sm"> The other players type in their guesses. The quicker you guess, the more points you receive.</p>
        `,
  },
  {
      title: 'Longwave',
      url: 'https://longwave.web.app/',
      gameLogoSrc: 'images/Longwave.png',
      gameLogoAlt: 'Longwave logo',
      description: 'An online, real-time adaptation of the board game Wavelength. Best enjoyed with voice chat!',
      howTo: `
          <p class="text-xs mt-2 md:text-sm">1. Click 'Create Room'</p>
          <p class="text-xs mt-2 md:text-sm">2. Choose the type of game you'd like: standard, cooperative, or free play.</p>
          <p class="text-xs mt-2 md:text-sm">3. Share the link in your browser with your friends.</p>
          <p class="text-xs mt-2 md:text-sm">4. For the standard game, everyone picks whether they'd like to join the left brain or right brain team.</p>
          <p class="text-xs mt-2 md:text-sm">5. Once everyone is ready, start the game.</p>
          <p class="text-xs mt-2 md:text-sm">6. One person from a team can pick a spectrum card, which creates a line with one word on one side and basically
          its opposite on the other side. A circle will be somewhere along the line. The person that picked the card will then decide on a clue -- something that they
          feel fits at that spot in the spectrum. For example, if the line had 'light' on the left and 'dark' on the right, and the circle was all the way on the right,
          the player might give the clue 'black'.</p>
          <p class="text-xs mt-2 md:text-sm">Everyone else can't see the true position of the circle. Someone on that player's team needs to adjust the circle
          to where the team agrees it should go.
          <p class="text-xs mt-2 md:text-sm">The other team then must guess whether the true position is to the left or right of where the opposing team placed the circle.</p>
          <p class="text-xs mt-2 md:text-sm">Points are then awarded depending on how close the guess was, and the second team gets to pick the next card.</p>
          <p class="text-xs mt-2 md:text-sm">You can read more about the board game <a href="https://boardgamegeek.com/boardgame/262543/wavelength" target="_blank" rel="noopener nofollow noreferrer">here</a>.</p>
        `,
  },
  {
    title: 'Chicken Coup',
    url: 'https://longwave.web.app/',
    gameLogoSrc: 'images/coup.png',
    gameLogoAlt: 'Chicken Coup logo',
    description: 'A game of deduction and deception',
    howTo: `
        <p class="text-xs mt-2 md:text-sm">This is an online version of the card game <a class="hover:text-blue-600" href="https://boardgamegeek.com/boardgame/131357/coup" target="_blank" rel="noopener nofollow noreferrer">Coup</a>, so if you've played it before, you will have a good advantage.</p>
        <p class="text-xs mt-2 md:text-sm">If you haven't played Coup before, <span class="italic">be sure</span> to click 'Rules' and read them first. Maybe a couple of times!</p>
        <p class="text-xs mt-2 md:text-sm">Click on 'Create Game'.</p>
        <p class="text-xs mt-2 md:text-sm">Enter your name, and then copy the room code.</p>
        <p class="text-xs mt-2 md:text-sm">Share <a href="https://www.chickenkoup.com/join" target="_blank" rel="noopener nofollow noreferrer" class="hover:text-blue-600">https://www.chickenkoup.com/join</a> and the room code with your friends.</p>
      `,
    },
    {
    title: 'Charades',
    url: 'https://psycatgames.com/app/charades/',
    gameLogoSrc: 'images/psycat-games-logo.png',
    gameLogoAlt: 'Psycat Games logo',
    description: 'A popular word guessing game',
    howTo: `
      <p class="text-xs mt-2 md:text-sm">Start a zoom if you haven't already.</p>
      <p class="text-xs mt-2 md:text-sm">Share <a href="https://psycatgames.com/app/charades/" target="_blank" rel="noopener nofollow noreferrer" class="hover:text-blue-600">https://psycatgames.com/app/charades/</a> with everybody.</p>
      <p class="text-xs mt-2 md:text-sm">Pick someone to act out a word first.</p>
      <p class="text-xs mt-2 md:text-sm">Have them click on either 'Easy' or 'Normal'.</p>
      <p class="text-xs mt-2 md:text-sm">When everyone is ready, have them click 'New Word'.</p>
      <p class="text-xs mt-2 md:text-sm">Everyone tries to guess the word within a minute, while the actor does whatever they want, besides making sounds or lip movements.</p>
      <p class="text-xs mt-2 md:text-sm">If people guess the word in time, give the actor a point.</p>
      <p class="text-xs mt-2 md:text-sm">Pick someone new to be the actor, and continue.</p>
      `,
    },
    {
      title: 'When I Go Out West...',
      url: './go-out-west.html',
      gameLogoSrc: 'static/images/go-out-west/go-out-west-og-image.png',
      gameLogoAlt: 'When I Go Out West...',
      description: 'Laugh at what happens when you go out west. A simple, funny road game.',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./go-out-west.html" target="_blank" class="underline text-yellow-900 hover:text-blue-600">page</a> for how to play!</p>`,
    },
    {
      title: 'Catan Universe: Settlers of Catan',
      url: 'https://catanuniverse.com/en/game/',
      gameLogoSrc: 'static/images/catan-logo.png',
      gameLogoAlt: 'Catan Logo',
      description: 'A realistic online version of the famous board game. Gather resources to build settlements & cities and earn victory points to win.',
      howTo: `<p class="text-xs mt-2 md:text-sm text-left">To play with friends, you'll need to register.</p>
      <p class="text-xs mt-2 md:text-sm text-left">Next, add your friends to your friends list. To add friends, click on your hexagon avatar, & then click on 'Friends'. Next, click on the 'Find Friends' button on the bottom. Ask your friends for their usernames and search for them. Then click on 'Send Friend Request.'</p>
      <p class="text-xs mt-2 md:text-sm text-left">If you haven't played Settlers before, you might want to read <a href="https://medium.com/board-game-brother/how-to-play-settlers-of-catan-e51c5a5aa499" rel="nofollow noopener noreferrer" target="_blank" class="underline text-yellow-900 hover:text-blue-600">this article</a> to learn how to play.</p>
      <p class="text-xs mt-2 md:text-sm text-left">To start a game, select 'Multiplayer' and then 'Custom Match.' Next, use 'Add player' to add 2 of your friends. (If you buy the expansions, you could invite more.)</p>
      `,
    },
    {
      title: 'The Smurf Game: How Do You Smurf?',
      url: './smurf.html',
      gameLogoSrc: 'static/images/smurf-og.png',
      gameLogoAlt: 'The Smurf Game: How Do You Smurf?',
      description: 'A hilarious verb-guessing game',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./smurf.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for how to play!</p>`,
    },
    {
      title: 'The Good News/Bad News Game',
      url: './good-news-bad-news.html',
      gameLogoSrc: 'static/images/news/laugh.png',
      gameLogoAlt: 'Good News & Bad News',
      description: 'Create good & bad news to create stories as imaginative and comical as you\'d like.',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./good-news-bad-news.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for how to play!</p>`,
    },
    {
      title: 'Somewherewords',
      url: 'https://words.aroma1997.org/',
      gameLogoSrc: 'static/images/logos/somewherewords.png',
      gameLogoAlt: 'Somewherewords',
      description: 'Play Werewords online with your friends! See if the villagers can guess the secret word, or if the werewolves can successfully prevent them.',
      howTo: `<ol class="list-decimal list-inside" ><li class="text-xs mt-6 md:text-sm text-left instruction-item">To start a game, enter your desired lobby name in the input box.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">Then share the url with your friends. Join a zoom together so you can discuss things easily.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">Either choose to be the mayor or have one picked randomly.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">The mayor will then choose any word they'd like.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">If you'd like to have a time limit, start a timer somewhere.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">The other players will then ask yes/no questions, and the mayor will answer them and click on the answers in the table.</li>
        <li class="text-xs mt-2 md:text-sm text-left instruction-item">See the <a href="https://words.aroma1997.org/howto.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">rules</a> for more details on how to proceed.</li>
        </ol>
        `,
    },
    {
      title: 'What\'s Yours Like?',
      url: './whats-yours-like.html',
      gameLogoSrc: 'static/images/yours-like/lamp.png',
      gameLogoAlt: 'lamp',
      description: 'Be clever and subtle in this guessing game',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./whats-yours-like.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for how to play!</p>`,
    },
    {
      title: 'Bananagrams Online',
      url: 'https://www.playbananagrams.com/',
      gameLogoSrc: 'static/images/banana.png',
      gameLogoAlt: 'banana',
      description: 'Speed-round Scrabble!',
      howTo: `<p class="text-xs mt-2 md:text-sm">Click the 'Create a Game' button to open a new game.</p>
        <p class="text-xs mt-2 md:text-sm">Share the url with your friends.</p>
        <p class="text-xs mt-2 md:text-sm">You and everyone needs to join the game by entering a name in the input box near the bottom of the yellow area and then pressing 'Join Game.'</p>
        <p class="text-xs mt-2 md:text-sm">Once everyone is in, click the 'Start Game' button to begin.</p>
        <p class="text-xs mt-2 md:text-sm">Click on the tiles to arrange them in a Scrabble-style arrangement. Once you use all your tiles, click on the banana button. Everyone will then be given another tile.</p>
        <p class="text-xs mt-2 md:text-sm">You win by being the first to place the very last tile and clicking the win button.</p>
        <p class="text-xs mt-2 md:text-sm">Click on 'Rules' to watch a video about how to play, and 'Controls' for more details.</p>
      `,
    },
    {
      title: 'Same Word',
      url: './same-word.html',
      gameLogoSrc: 'static/images/dinos/dino4.png',
      gameLogoAlt: 'dino',
      description: 'See how quickly your friends can get in-sync!',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./same-word.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for how to play!</p>`
    },
    {
      title: 'Guess That Song',
      url: './guess-that-song.html',
      gameLogoSrc: 'static/images/love-song-2.png',
      gameLogoAlt: 'love song',
      description: 'Learn how to create a guess-that-song game with audio files of funny-sounding lyrics',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./guess-that-song.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for instructions and a sample game!</p>`
    },
    {
      title: 'The Name Game',
      url: './name-game.html',
      gameLogoSrc: 'static/images/name-mug.jpg',
      gameLogoAlt: 'hello my name is',
      description: 'Take a name & create a silly nonsense song with it',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./name-game.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> to generate the lyrics, learn how to create them yourself, and hear lots of recordings!</p>`
    },
    {
      title: 'The Minister\'s Cat',
      url: './ministers-cat.html',
      gameLogoSrc: 'static/images/cats/cat-1.png',
      gameLogoAlt: 'The Minister\'s Cat',
      description: 'A challenging but fun game with adjectives',
      howTo: `<p class="text-xs mt-6 md:text-sm text-left">See the <a href="./ministers-cat.html" target="_blank" class="underline text-blue-500 hover:text-blue-600">page</a> for instructions and suggestions!</p>`
    },
  ]
