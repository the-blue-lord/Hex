class Column {
    constructor(pos_x, length, board) {
        this.x = pos_x;

        this.cells = [];
        this.board = board;

        this.size = length;

        this.element = createColumn(this);
        this.element.id = this.x;

        for(let i = 0; i < length; i++) {
            const cell = new Cell(pos_x, i+1, this);
            this.element.append(cell.element);
            this.cells.push(cell);
        }

        return this;
    }
}