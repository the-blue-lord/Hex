function cellClick(cell) {
    updateGame(cell);

    futureMoves = [];

    const winner = getGameWinner(cell.board);
    if(winner) gameEnd(winner);

    return;
}

function updateGame(cell) {
    if(cell.player) {
        return;
    }

    cell.player = activePlayer;

    activePlayer.usedCells.push(cell);
    moves.push(cell);

    const cellIdIndex = activePlayer.unusedCells.indexOf(cell);
    activePlayer.unusedCells.splice(cellIdIndex, 1);

    cell.element.style.backgroundColor = activePlayer.color;

    swapPlayers();

    return;
}