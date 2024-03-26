function gameStart() {
    const board = new Board(9);
    gameBoard = board;

    const player1 = new Player(board)
        .init(1);

    const player2 = new Player(board)
        .init(2);

    document.getElementById("body-loader").remove();

    document.body.append(board.element);

    appendButtons();
    appendSettings(player1, player2);

    activePlayer = player1;
    waitingPlayer = player2;

    return;
}