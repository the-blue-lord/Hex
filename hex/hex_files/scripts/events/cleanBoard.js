function cleanBoard() {
    moves.forEach(cell => {
        cell.player = 0;
        cell.element.style.backgroundColor = "inherit";
    });

    gameBoard.player1.usedCells = [];
    gameBoard.player2.usedCells = [];

    gameBoard.player1.unusedCells = [];
    gameBoard.player2.unusedCells = [];
    gameBoard.cells.forEach(cell => {
        gameBoard.player1.unusedCells.push(cell);
        gameBoard.player2.unusedCells.push(cell);
    });

    activePlayer = gameBoard.player1;
    waitingPlayer = gameBoard.player2;

    moves = [];
    futureMoves = [];

    return;
}