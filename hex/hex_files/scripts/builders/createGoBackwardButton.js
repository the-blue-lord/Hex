function createGoBackwardsButton() {
    const button = document.createElement("button");

    button.classList.add("button1", "little_button");
    button.innerHTML = "BACK";
    button.addEventListener("click", () => {
        goBackwards();
    });

    return button;
}