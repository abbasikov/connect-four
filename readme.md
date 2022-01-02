# Connect Four

### Instructions for running the project
- Make sure you have node installed
- To install the packages, run `npm install` from the terminal while being in this project's directory

### Testing instructions
- Run `npm test` from the terminal

### Prominent Methods
- isStateValid(gameState): Checks whether a state is valid
- getCurrentPlayer(gameState): Returns who's turn it is to play
- checkWinner(gameState): Returns `true` if the state has a winner, else returns `false`
- play(gameState, column, player): Allows the user to play whatever column they want