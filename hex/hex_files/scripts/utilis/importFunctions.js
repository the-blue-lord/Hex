const filePaths = [
    "builders/createCell.js",
    "builders/createCancButton.js",
    "builders/createColumn.js",
    "builders/createBoard.js",
    "builders/createGoBackwardsButton.js",
    "builders/createGoForwardButton.js",
    "builders/createPlayerSettings.js",

    "events/cellClick.js",
    "events/cleanBoard.js",
    "events/gameEnd.js",
    "events/gameLoaded.js",
    "events/gameStart.js",
    "events/goBackwards.js",
    "events/goForward.js",

    "structures/Cell.js",
    "structures/Column.js",
    "structures/Board.js",
    "structures/Player.js",

    "utilis/appendButtons.js",
    "utilis/appendSettings.js",
    "utilis/getGameWinner.js",
    "utilis/swapPlayers.js",
];

function importFunctions() {
    filePaths.forEach(relativePath => {
        const filePath = "hex_files/scripts/" + relativePath;

        const scriptElement = document.createElement("script");
        scriptElement.src = filePath;

        document.getElementById("body").append(scriptElement);
    });
}