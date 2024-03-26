function createGoForwardButton() {
    const button = document.createElement("button");

    button.classList.add("button1", "little_button");
    button.innerHTML = "REDO";
    button.addEventListener("click", () => {
        goForward();
    });

    return button;
}