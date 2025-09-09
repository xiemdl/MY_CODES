const prompt = require('prompt-sync')(); // Run with Node.js

function printBoard(board) {
  console.log(`${board[0]} ${board[1]} ${board[2]}`);
  console.log(`${board[3]} ${board[4]} ${board[5]}`);
  console.log(`${board[6]} ${board[7]} ${board[8]}`);
}

function checkWin(board, player) {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  return wins.some(comb => 
    comb.every(index => board[index] === player)
  );
}

function isDraw(board) {
  return board.every(cell => cell === 'X' || cell === 'O');
}

function startGame(startingPlayer = 'X') {
  let board = ['-','-','-','-','-','-','-','-','-'];
  let currentPlayer = startingPlayer;
  let winner = null;

  console.log(`\nPLAYER (${currentPlayer === 'X' ? 'O' : 'X'}) WINNING ROUND:`);

  printBoard(board);

  while (!winner && !isDraw(board)) {
    let move = parseInt(prompt(`Player ${currentPlayer}, enter your move (1-9): `));

    if (isNaN(move) || move < 1 || move > 9 || board[move - 1] !== '-') {
      console.log("Invalid move! Try again.");
      continue;
    }

    board[move - 1] = currentPlayer;
    printBoard(board);

    if (checkWin(board, currentPlayer)) {
      console.log(`Player ${currentPlayer} wins!\n`);
      winner = currentPlayer;
      break;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  if (!winner) {
    console.log("It's a draw!\n");
  }
}

// 🔁 Play 2 Rounds (like your example)
startGame('O'); // Round 1: O starts
startGame('X'); // Round 2: X starts
