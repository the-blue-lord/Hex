function goForward() {
    if(!futureMoves.length) return;

    const cell = futureMoves.pop();
    updateGame(cell);
    
    return;
}