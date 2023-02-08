"use strict";

/**
 * Function creates Object representing 64 square chessboard
 * @returns {Object}
 */
function createBoard() {
  let square = 1;
  const files = "abcdefgh";
  const ChessBoard = {};

  // Loop through every file in each rank
  for (let i = 1; i < 9; i++) {
    for (let file of files) {
      ChessBoard[square] = file + `${i}`;
      square++;
    }
  }

  return ChessBoard;
}

/**
 * Function determines colour of square
 * @param {number} square
 * @returns
 */
function squareColour(square) {
  return square % 2 === 1 ? "black" : "white";
}

// maybe control amount in the future
function pickSquares(squares) {
  const selected = [];
  for (let i = 0; i < 6; i++) {
    selected.push(
      squares.splice(Math.floor(Math.random() * squares.length), 1)[0]
    );
  }
  return selected;
}

////////////////// Testing /////////////////////

// const Board = createBoard();

// const gameSquares = pickSquares(Object.keys(Board));

// const answers = gameSquares.map((val) => squareColour(val));
// console.log("answers: ", answers);
