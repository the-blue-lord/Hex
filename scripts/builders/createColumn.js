function createColumn(column) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");

    const square_side_length = getComputedStyle(document.querySelector(":root")).getPropertyValue("--square_side");
    const square_side_value = parseInt(square_side_length) + 0.1;

    const padding_size = square_side_value*(column.board.size-column.size)/2 + "%";                                    

    columnDiv.style.paddingTop = padding_size;

    return columnDiv;
}