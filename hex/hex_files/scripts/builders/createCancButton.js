function createCancButton() {
    const button = document.createElement("button");

    button.classList.add("button1", "little_button");
    button.innerHTML = "CANC";
    button.addEventListener("click", () => {
        cleanBoard();
    });

    return button;
}