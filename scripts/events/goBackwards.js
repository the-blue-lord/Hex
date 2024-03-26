function goBackwards() {
    if(!moves.length) return;

    const cell = moves[moves.length-1];

    cell.player = 0;
    cell.element.style.backgroundColor = "inherit";

    waitingPlayer.unusedCells.push(waitingPlayer.usedCells.pop());
    futureMoves.push(moves.pop());

    swapPlayers();

    return;
}