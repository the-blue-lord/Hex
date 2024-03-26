class Cell {
    constructor(pos_x, pos_y, column) {
        this.x = pos_x;
        this.y = pos_y;

        this.player = 0;

        this.column = column;
        this.board = column.board;

        this.element = createCell();
        this.element.id = this.x + "_" + this.y;

        if(pos_x == pos_y && pos_x != this.board.size) {
            this.board.firstPlayer_startingCells.push(this);
            this.element.classList.add("player1_start");
        }
        else if(pos_x > this.board.size && pos_y == 1) {
            this.board.firstPlayer_endingCells.push(this);
            this.element.classList.add("player1_end");
        }
        
        if(pos_x < this.board.size && pos_y == 1) {
            this.board.secondPlayer_startingCells.push(this);
            this.element.classList.add("player2_start");
        }
        else if(pos_x + pos_y == 2*this.board.size && pos_x != this.board.size) {
            this.board.secondPlayer_endingCells.push(this);
            this.element.classList.add("player2_end");
        }
        
        if(pos_x == this.board.size && pos_y == 1) {
            this.board.secondPlayer_startingCells.push(this);
            this.board.firstPlayer_endingCells.push(this);
            this.element.id = "top_edge";
        }
        else if(pos_x == pos_y && pos_x == this.board.size) {
            this.board.firstPlayer_startingCells.push(this);
            this.board.secondPlayer_endingCells.push(this);
            this.element.id = "bottom_edge";
        }

        const cell = this;
        this.element.addEventListener("click", function() {
            cellClick(cell);
        });

        return this;
    }

    getPath() {
        var pathCompleted = false;
        const path = [this];
        const player = this.player;

        while(!pathCompleted) {
            const cellsToAdd = [];

            path.forEach(cell => {
                const nearCells = cell.getNearCells();

                nearCells.forEach(cell => {
                    if(!path.includes(cell) && cell.player == player && !cellsToAdd.includes(cell))
                        cellsToAdd.push(cell);
                });
            });

            cellsToAdd.forEach(cell => {
                path.push(cell);
            });

            if(!cellsToAdd.length) pathCompleted = true;
        }

        return path;
    }

    getNearCells() {
        const nearCells = [];

        const x = this.x;
        const y = this.y;
        const size = this.board.size;

        if(x < size) {
            let tmpCell;

            tmpCell = this.board.getCell(x, y-1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y+1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x, y+1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y-1);
            if(tmpCell) nearCells.push(tmpCell);
        }

        else if(x > size) {
            let tmpCell;

            tmpCell = this.board.getCell(x, y-1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y-1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x, y+1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y+1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y);
            if(tmpCell) nearCells.push(tmpCell);
        }

        else {
            let tmpCell;

            tmpCell = this.board.getCell(x, y-1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y-1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x+1, y);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x, y+1);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y);
            if(tmpCell) nearCells.push(tmpCell);

            tmpCell = this.board.getCell(x-1, y-1);
            if(tmpCell) nearCells.push(tmpCell);
        }

        return nearCells;
    }
}