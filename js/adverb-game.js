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

      const audio2 = new Audio('static/audio/drumroll.wav')
      const audio3 = new Audio('static/audio/tada.wav')
      const audio4 = new Audio('static/audio/finger-cymbal.wav')
      const getAdverbButton = document.getElementById('get-adverb')
      const adverbEl = document.getElementById('adverb')
      const adverbsInInstructions = document.getElementsByClassName('adverb-in-instructions')
      const adverbLabel = document.getElementById('adverb-label')
      const definitionEl = document.getElementById('definition')
      const definitionLabel = document.getElementById('definition-label')
      const adverbImage = document.getElementById('adverb-image')
      const getActionButton = document.getElementById('get-action')
      const actionEl = document.getElementById('action')
      const actionLabel = document.getElementById('action-label')
      const pointsButton = document.getElementById('increment-points')
      const pointsEl = document.getElementById('points')
      let points = 0
      const pointsResetButton = document.getElementById('points-reset')

      window.addEventListener('load', () => {
        getAdverbButton.addEventListener('click', () => {
          const newAdverb = adverbs[Math.floor(Math.random() * adverbs.length)]
          adverbEl.textContent = newAdverb.word
          definitionEl.textContent = newAdverb.definition
          adverbLabel.classList.remove('invisible')
          adverbEl.classList.remove('invisible')
          definitionLabel.classList.remove('invisible')
          definitionEl.classList.remove('invisible')
          adverbEl.style.backgroundColor = '#ccff00'
          adverbImage.src = `images/${newAdverb.image}`
          adverbImage.alt = newAdverb.word
          Array.from(adverbsInInstructions).forEach(adverb => {
            adverb.textContent = newAdverb.word
          })
          if (allowAudio) {
            audio3.play()
          }
        })

        getActionButton.addEventListener('click', () => {
          const newAction = actions[Math.floor(Math.random() * actions.length)]
          actionEl.textContent = newAction
          actionLabel.classList.remove('invisible')
          actionEl.classList.remove('invisible')
          actionEl.style.backgroundColor = '#83EEFF'
          if (allowAudio) {
            audio2.play()
          }
        })
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
