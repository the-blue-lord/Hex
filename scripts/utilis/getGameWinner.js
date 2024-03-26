function getGameWinner(board) {
    if(board.player1.hasWon()) return board.player1;
    if(board.player2.hasWon()) return board.player2;

    return 0;
}