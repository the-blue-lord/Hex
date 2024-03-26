class Board {
    constructor(side) {
        this.columns = [];
        this.cells = [];

        this.element = createBoard();
        this.element.id = "board";

        this.player1 = 0;
        this.player2 = 0;

        this.firstPlayer_startingCells = [];
        this.firstPlayer_endingCells = [];
        this.secondPlayer_startingCells = [];
        this.secondPlayer_endingCells = [];

        this.size = side;
        
        for(let i = 0; i < side; i++) {
            const column = new Column(i+1, i+1, this);

            this.element.append(column.element);
            this.columns.push(column);
        }

        for(let i = 1; i < side; i++) {
            const column = new Column(side+i, side-i, this);
            
            this.element.append(column.element);
            this.columns.push(column);
        }

        this.columns.forEach(column => {
            column.cells.forEach(cell => this.cells.push(cell));
        });

        return this;
    }

    getCell(x, y) {
        if(x > this.columns.length || x <= 0) return 0;
        if(y > this.columns[x-1].cells.length || y <= 0) return 0;

        const cell = this.columns[x-1].cells[y-1];

        return cell;
    }
}