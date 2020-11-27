  
document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: []
};

function randomBoard(){
  size = Math.floor((Math.random() * (7-3)) + 3);

  for (row = 0; row < size; row ++){
    for(col = 0; col < size; col ++){
      board.cells.push({row: row, col: col, isMine: false, isMarked: false, hidden: true})
    }
  }


  for (makeMine = 0; makeMine < size; makeMine ++){
    board.cells[Math.floor((Math.random() * (size * size)))].isMine = true;

      }
    }

// Define your `board` object here!
/*var board = {
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
};*/

function startGame() {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  randomBoard();
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
  //LOOP through board.cells.board
  //WIN condition is if all cells are revealed and all mines are marked
  for (let i = 0; i < board.cells.length; i++) {
    let boardcells = board.cells[i];
    if(boardcells.isMine && !boardcells.isMarked){
      return;
    }
    if (boardcells.isMine && boardcells.isMarked) {
      lib.displayMessage('You win!')
    };
    // You can use this function call to declare a winner (once you've
    // detected that they've won, that is!)

  }
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

//function to randomly generate board:
//board is an object with property CELLS which is an array of objects
//arguments will need to be cell, row, col, isMine and hidden
//if I want to randomise the mines, I can use Math.random and assign certain cells