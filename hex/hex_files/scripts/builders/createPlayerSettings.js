function createPlayerSettings(player) {
    const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = "[change player " + player.index + " name here]";
        nameInput.id = "name_input_player" + player.index;
        nameInput.addEventListener("change", () => {
            player.setName(nameInput.value);
        });

    const colorInput = document.createElement("input");
        colorInput.type = "color"
        colorInput.value = player.color;
        colorInput.id = "color_input_player" + player.index;
        colorInput.addEventListener("change", () => {
            player.setColor(colorInput.value);
        });

    const playerSettingsDiv = document.createElement("div");
        playerSettingsDiv.classList.add("playerSettings");
        playerSettingsDiv.id = "player" + player.index + "_settings";

    playerSettingsDiv.append(nameInput);
    playerSettingsDiv.append(colorInput);

    return playerSettingsDiv;
}