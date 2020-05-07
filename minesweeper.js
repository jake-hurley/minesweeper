document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells : [
  {row : 0, col : 0, isMine : false, hidden: true, isMarked : false}, {row : 0, col : 1, isMine : true, hidden: true, isMarked : false}, {row : 0, col : 2, isMine : true, hidden: true, isMarked : false}, {row : 0, col : 3, isMine : true, hidden: true, isMarked : false},{row : 0, col : 4, isMine : true, hidden: true, isMarked : false},
  {row : 1, col : 0, isMine : true, hidden: true, isMarked : false}, {row : 1, col : 1, isMine : false, hidden: true, isMarked : false}, {row : 1, col : 2, isMine : false, hidden: true, isMarked : false},{row : 1, col : 3, isMine : false, hidden: true, isMarked : false}, {row : 1, col : 4, isMine : true, hidden: true, isMarked : false},
  {row : 2, col : 0, isMine : true, hidden: true, isMarked : false}, {row : 2, col : 1, isMine : false, hidden: true, isMarked : false}, {row : 2, col : 2, isMine :true, hidden: true, isMarked : false}, {row : 2, col : 3, isMine :true, hidden: true, isMarked : false}, {row : 2, col : 4, isMine : true, hidden: true, isMarked : false},
  {row : 3, col : 0, isMine : false, hidden: true, isMarked : false}, {row : 3, col : 1, isMine : true, hidden: true, isMarked : false}, {row : 3, col : 2, isMine :false, hidden: true, isMarked : false}, {row : 3, col : 3, isMine :false, hidden: true, isMarked : false}, {row : 3, col : 4, isMine : true, hidden: true, isMarked : false},
  {row : 4, col : 0, isMine : false, hidden: true, isMarked : false}, {row : 4, col : 1, isMine : true, hidden: true, isMarked : false}, {row : 4, col : 2, isMine :false, hidden: true, isMarked : false}, {row : 4, col : 3, isMine :false, hidden: true, isMarked : false}, {row : 4, col : 4, isMine : true, hidden: true, isMarked : false}]}

function startGame () {
  randomBoard()
  for (var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  //check for win.
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // loop through cells 
  for (i = 0; i < board.cells.length; i++) {
  //check for un marked mines.
    if ((board.cells[i].isMine === true) && (board.cells[i].isMarked === false)) {
      return;
  // check for hidden cells that arent mines.
    } else if ((board.cells[i].hidden === true) && (board.cells[i].isMine === false)) {
      return;
    } 
}   
  displayMessage('You win!')
  //reveal reset button.
  var btn = document.getElementById("reset-button");
  var wow = document.getElementById("wow");
  wow.play()
  btn.classList.remove('button-hide')
  btn.addEventListener("click", reset)
  

}


      
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  
  // displayMessage('You win!')
  


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  var count = 0;

  for (var i = 0; i < surroundingCells.length; i ++){
    if (surroundingCells[i].isMine === true){
      count = count + 1;
      cell.surroundingMines = count;
    }
  }

  return count;
  
}

function randomBoard(){
  for (var i = 0; i < board.cells.length; i++){
      var num = Math.floor(Math.random() * Math.floor(100));
      console.log(num);
      if (num <= 20) {
      board.cells[i].isMine = true
    } else {
      board.cells[i].isMine = false
    }
}

}

function reset() {
  location.reload();
}



