function appendButtons() {
    const backward_button = createGoBackwardsButton();
    const forward_button = createGoForwardButton();
    const canc_button = createCancButton();

    const buttons_div = document.createElement("div");
        buttons_div.classList.add("button_div");
        buttons_div.id = "buttons";

        buttons_div.append(backward_button);
        buttons_div.append(forward_button);
        buttons_div.append(canc_button);

    document.body.append(buttons_div);

    return;
}