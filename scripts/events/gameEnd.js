function gameEnd(player) {
    document.getElementById("board").remove();
    document.getElementById("buttons").remove();
    document.getElementById("settings").remove();

    const winner_div = document.createElement("div");
        winner_div.id = "winner";
        winner_div.innerHTML = player.name + " has won!";
        winner_div.style.color = player.color;

    const reload_button = document.createElement("button");
        reload_button.id = "startButton";
        reload_button.classList.add("button1");
        reload_button.innerHTML = "Play Again";
        reload_button.addEventListener("click", () => {
            window.location.reload();
        });
        

    document.body.append(winner_div);
    for (let i = 0; i < 3; i++) {
        const _break = document.createElement("br");
        document.body.append(_break);
    }
    document.body.append(reload_button);

    return;
}