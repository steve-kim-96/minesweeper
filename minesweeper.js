document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMarked: false, isMine: true, hidden: true },
    { row: 0, col: 1, isMarked: false, isMine: false, hidden: true },
    { row: 0, col: 2, isMarked: false, isMine: true, hidden: true },
    { row: 0, col: 3, isMarked: false, isMine: false, hidden: true },
    { row: 1, col: 0, isMarked: false, isMine: true, hidden: true },
    { row: 1, col: 1, isMarked: false, isMine: false, hidden: true },
    { row: 1, col: 2, isMarked: false, isMine: true, hidden: true },
    { row: 1, col: 3, isMarked: false, isMine: false, hidden: true },
    { row: 2, col: 0, isMarked: false, isMine: true, hidden: true },
    { row: 2, col: 1, isMarked: false, isMine: true, hidden: true },
    { row: 2, col: 2, isMarked: false, isMine: false, hidden: true },
    { row: 2, col: 3, isMarked: false, isMine: true, hidden: true },
    { row: 3, col: 0, isMarked: false, isMine: false, hidden: true },
    { row: 3, col: 1, isMarked: false, isMine: true, hidden: true },
    { row: 3, col: 2, isMarked: false, isMine: false, hidden: true },
    { row: 3, col: 3, isMarked: false, isMine: true, hidden: true },
],
};

function startGame() {
  board.cells.forEach(
    cell => cell.surroundingMines = countSurroundingMines(cell)
);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  //IF visible cells DO NOT EQUAL mines AND // OR I could do if all hidden cells EQUAL bombs
  //all of the mines are marked
  //THEN player wins and display win message


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  let count = 0;
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);
  surrounding.forEach((cell) => (cell.isMine ? count++ : null));
  return count;
}


