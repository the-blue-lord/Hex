function swapPlayers() {
    const tmp = activePlayer;
    activePlayer = waitingPlayer;
    waitingPlayer = tmp;

    return;
}