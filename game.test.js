const game = require('./game')

// Test play()

// Test with a single input with yellow

test('Test the state is correctly updated when a player plays in the first (0) column', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
    ])
})

test('Test the state is correctly updated when a player plays in the last (6) column', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 6, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'y'],
    ])
})

// Test with a single input with red

test('Test the state is correctly updated when a player plays in the third column with red', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 2, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'r', null, null, null, null],
    ])
})

test('Test the state is correctly updated when a player plays in the fourth column with red', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 3, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'r', null, null, null],
    ])
})

// Test with multiple inputs

test('Test the state is correctly updated when a player plays in the first column twice', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 0, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
})

test('Test the state is correctly updated on playing thrice', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 0, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 1, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', 'r', null, null, null, null, null],
    ])
})

test('Test the state does not update on exceeding column limit', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
    expect(game.play(testState, 0, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'r')).toStrictEqual([
        [null, null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'y')).toStrictEqual([
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
        ['y', null, null, null, null, null, null],
        ['r', null, null, null, null, null, null],
    ])
    expect(game.play(testState, 0, 'r')).toEqual('This column is full, select a different column')
})

// Test with invalid inputs

const testState = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]

test('Test that the function accepts a valid column', () => {
    expect(game.play(testState, 7, 'y')).toEqual('Please enter a column between 0 - 6')
})

test('Test that the function accepts a valid column', () => {
    expect(game.play(testState, 4, 'b')).toEqual(`Please enter 'r' for red or 'y' for yellow`)
})

test('Test that the function accepts a valid column and color', () => {
    expect(game.play(testState, 7, 'b')).toEqual(`Please enter a column between 0 - 6`)
})

// Test isStateValid()

test('Test that the state is invalid is invalid with two yellows', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'y', null, null, null, null, null],
    ]
    expect(game.isStateValid(testState)).toEqual(false)
})

test('Test that the state is valid with one yellow and one red', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', null, null, null, null, null],
    ]
    expect(game.isStateValid(testState)).toEqual(true)
})

test('Test that the state is invalid with two reds and one yellow', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', 'r', null, null, null, null],
    ]
    expect(game.isStateValid(testState)).toEqual(false)
})

test('Test that the state is invalid with yellow in the middle without any base', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'y', null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', 'r', null, null, null, null],
    ]
    expect(game.isStateValid(testState)).toEqual(false)
})

test('Test that the state is invalid with yellow and red without any base', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'y', null, null, null],
        [null, null, null, null, 'r', null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', 'r', null, null, null, null],
    ]
    expect(game.isStateValid(testState)).toEqual(false)
})


// Test getCurrentPlayer()

test('Test that the current player is red', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', 'r', 'y', null, null, null],
    ]
    expect(game.getCurrentPlayer(testState)).toEqual('y')
})

test('Test that the current player is yellow', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['y', 'r', null, null, null, null, null],
    ]
    expect(game.getCurrentPlayer(testState)).toEqual('y')
})

test('Test that the current player is yellow', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'y', null, null, null, null, null],
        [null, 'r', null, null, null, null, null],
        ['y', 'r', 'y', null, null, null, null],
    ]
    expect(game.getCurrentPlayer(testState)).toEqual('r')
})

// Test checkWinner()

test('Test that the state has a winner', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'y', null, null, null],
        [null, null, 'y', 'y', null, null, null],
        [null, 'y', 'r', 'r', null, null, null],
        ['y', 'r', 'y', 'r', 'r', null, null],
    ]
    expect(game.checkWinner(testState)).toEqual(true)
})

test('Test that the state has a winner', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'y', null, null, null],
        [null, null, null, 'r', 'y', null, null],
        [null, null, null, 'y', 'r', 'y', null],
        [null, null, null, 'r', 'r', 'r', 'y'],
    ]
    expect(game.checkWinner(testState)).toEqual(true)
})

test('Test that the state has a winner', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, 'r', null, null],
        [null, null, null, 'r', 'y', null, null],
        [null, null, 'r', 'y', 'y', null, null],
        [null, 'r', 'r', 'y', 'y', null, null],
    ]
    expect(game.checkWinner(testState)).toEqual(true)
})

test('Test that the state does not have a winner', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'y', null, null, null, null, null],
        ['r', 'y', 'r', null, null, null, null],
        ['y', 'r', 'y', 'y', 'r', null, null],
        ['y', 'y', 'r', 'r', 'y', 'r', null],
    ]
    expect(game.checkWinner(testState)).toEqual(false)
})

test('Test that the state does not have a winner', () => {
    const testState = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, 'y', null],
        [null, null, null, null, 'r', 'r', null],
        [null, null, null, 'y', 'y', 'y', null],
        [null, null, 'y', 'r', 'r', 'r', null],
    ]
    expect(game.checkWinner(testState)).toEqual(false)
})