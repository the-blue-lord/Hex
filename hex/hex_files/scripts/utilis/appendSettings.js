function appendSettings(player1, player2) {
    const player1_settings = createPlayerSettings(player1);
    const player2_settings = createPlayerSettings(player2);

    const settingsDiv = document.createElement("div");
        settingsDiv.id = "settings";

    settingsDiv.append(player1_settings);
    settingsDiv.append(player2_settings);
    
    document.body.append(settingsDiv);

    return;
}