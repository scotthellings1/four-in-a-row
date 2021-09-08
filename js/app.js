const game = new Game()
const startGameButton = document.querySelector('#begin-game')
const playArea = document.querySelector('#play-area')

startGameButton.addEventListener('click', (e) => {
  //start the game
  game.startGame()
  //hide the start game button
  e.target.style.display = 'none'
  //set the play area to be visible
  playArea.style.opacity = '1'
})
document.addEventListener('keydown', (e) => {
  game.handleKeydown(e)
})

