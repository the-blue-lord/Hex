class Player {
    constructor(board) {
        this.name = "Player";
        this.color = "#ffffff";
    
        this.index = 0;

        this.usedCells = [];
        this.unusedCells = [];
        board.cells.forEach(cell => {
            this.unusedCells.push(cell);
        });

        this.startingCells = [];
        this.endingCells = [];

        this.board = board;

        return this;
    }

    init(index) {
        if(index == 1) return this.initAsFirst();
        if(index == 2) return this.initAsSecond();
        
        return;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setColor(color) {
        this.color = color;
        this.usedCells.forEach(cell => {
            cell.element.style.backgroundColor = color;
        });

        const border_style = "5px solid ";        
        if(this.index == 1) {
            this.startingCells.forEach(cell => {
                if(cell.x != this.board.size) cell.element.style.borderBottom = border_style + color;
            });
            this.endingCells.forEach(cell => {
                if(cell.x != this.board.size) cell.element.style.borderTop = border_style + color;
            });
        }
        else if(this.index == 2) {
            this.startingCells.forEach(cell => {
                if(cell.x != this.board.size) cell.element.style.borderTop = border_style + color;
            });
            this.endingCells.forEach(cell => {
                if(cell.x != this.board.size) cell.element.style.borderBottom = border_style + color;
            });
        }

        return this;
    }

    hasWon() {
        var result = false;
        const endingCells = this.endingCells;

        const startingCellsUsed = this.getStartingCellsUsed();

        startingCellsUsed.forEach(cell => {
            const cellPath = cell.getPath();

            cellPath.forEach(cell => { 
                if(endingCells.includes(cell)) {
                    result = true;
                    return;
                }
            });
        });

        return result;
    }

    getStartingCellsUsed() {
        const result = [];

        this.startingCells.forEach(cell => {
            if(this.usedCells.includes(cell)) result.push(cell);
        });

        return result;
    }

    initAsFirst() {
        this.name = "Player 1";
        this.color = "#0000ff";
        this.index = 1;

        this.board.player1 = this;
        this.startingCells = this.board.firstPlayer_startingCells;
        this.endingCells = this.board.firstPlayer_endingCells;

        return this;
    }

    initAsSecond() {
        this.name = "Player 2";
        this.color = "#ff0000";
        this.index = 2;

        this.board.player2 = this;
        this.startingCells = this.board.secondPlayer_startingCells;
        this.endingCells = this.board.secondPlayer_endingCells;

        return this;
    }
}