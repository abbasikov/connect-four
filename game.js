// Helper function to count the values of red and yello
const countValues = (gameState) => {
    let yellowCount = 0
    let redCount = 0
    for(let i=0; i<gameState.length; i++){
        const row = gameState[i]
        for(let j=0; j<row.length; j++){
            if(row[j] === 'y') {
                yellowCount++
            } else if(row[j] === 'r') {
                redCount++
            } else {
                continue
            }
        }
    }
    return {
        yellowCount,
        redCount
    }
}

// Checks whether the state of the game is valid
const isStateValid = (gameState) => {
    const {yellowCount, redCount} = countValues(gameState)
    const difference = Math.abs(yellowCount - redCount)
    if(difference !== 0 && difference > 1) {
        return false
    }
    if(redCount > yellowCount) {
        return false
    }
    for(let i = gameState.length - 1; i >= 0; i--) {
        const row = gameState[i]
        for(let j = 0; j < row.length; j++) {
            try {
                if(row[j] !== null && gameState[i+1][j] === null) {
                    return false
                }
            } catch (error) {
                continue
            }
        }
        
    }
    return true
}

const getCurrentPlayer = (gameState) => {
    // Assuming the first player will always be yellow
    const {yellowCount, redCount} = countValues(gameState)
    if(yellowCount%2 === 0 && redCount%2 === 0) {
        return 'y'
    }
    if(yellowCount%2 > 0 && redCount%2 > 0) {
        return 'y'
    }
    return 'r'
}

// Checks whether there is a winner based on the game state
const checkWinner = (gameState) => {
    // The winner will be determined in the first 3 rows so only need to parse them
    let i = 0
    while(i < 3) {
        const row = gameState[i]
        // Parsing columns
        for(let j=0; j<row.length; j++) {
            if(gameState[i][j] !== null) {
                // Only need to check right diagonals when on the left of the center of the columns
                if(j < 3){
                    if(gameState[i][j] === gameState[i+1][j+1] && gameState[i][j] === gameState[i+2][j+2] && gameState[i][j] === gameState[i+3][j+3]) {
                        return true
                    }
                }
                // Only need to check left diagonals when on the right of the center of the columns
                if(j > 3){
                    if(gameState[i][j] === gameState[i+1][j-1] && gameState[i][j] === gameState[i+2][j-2] && gameState[i][j] === gameState[i+3][j-3]) {
                        return true
                    }
                }
                // Need to check both diagonals when in the middle
                if(j ===3 ) {
                    if(gameState[i][j] === gameState[i+1][j+1] && gameState[i][j] === gameState[i+2][j+2] && gameState[i][j] === gameState[i+3][j+3]) {
                        return true
                    }
                    if(gameState[i][j] === gameState[i+1][j-1] && gameState[i][j] === gameState[i+2][j-2] && gameState[i][j] === gameState[i+3][j-3]) {
                        return true
                    }
                }
            }
        }
        i++
    }
    return false
}

// Updates the gamestate by playing a player's turn in the selected column
const play = (gameState, column, player) => {
    if (column < 0 || column > 6) {
        return 'Please enter a column between 0 - 6'
    }
    if (player !== 'r' && player !== 'y') {
        return `Please enter 'r' for red or 'y' for yellow`
    }
    // Starting the iteration from bottom
    for (let i = gameState.length - 1; i >= 0; i--) {
        const currentRow = gameState[i]
        let value = currentRow[column]
        if(value === null) {
            gameState[i][column] = player
            break
        }
        if(value !== null && i === 0) {
            return 'This column is full, select a different column'
        }
    }
    return gameState
}

module.exports = {
    isStateValid,
    getCurrentPlayer,
    checkWinner,
    play
}