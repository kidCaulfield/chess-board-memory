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
 * @returns {String} "dark"
 */
function squareColour(square) {
  const rank = Math.ceil(square / 8);
  const condition = rank % 2 === 1 ? 1 : 0;
  return square % 2 === condition ? "dark" : "light";
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

/**
 * Function Check users answers using square colour function
 * and returns result object
 * @param {Object} answers
 */
function checkAnswers(answers) {
  const result = {};
  for (let key in answers) {
    result[key] = answers[key] === squareColour(key) ? "correct" : "incorrect";
  }
  return result;
}

const board = createBoard();

module.exports = {
  get: (req, res) => {
    res.json(board).status(200);
  },

  start: (req, res) => {
    res.json(pickSquares(Object.keys(board))).status(200);
  },

  end: (req, res) => {
    res.json(checkAnswers(req.body)).status(201);
  },
};
