import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  topLeft: number[] = [0,0];
  topMid: number[] = [1,0];
  topRight: number[] = [2,0];

  midLeft: number[] = [0,1];
  midMid: number[] = [1,1];
  midRight: number[] = [2,1];

  botLeft: number[] = [0,2];
  botMid: number[] = [1,2];
  botRight: number[] = [2,2];

  boardPieces: string[] = [ 'X', 'O' ];
  winConditions: number[][][] = [];
  board: string[][] = [];
  turnCount: number = 1;
  gameResult: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.createWinConditions();
    this.createNewTicTacToeBoard();
  }

  // Creates a new tic-tac-toe board.
  createNewTicTacToeBoard(): void {
    // Clear down the board.
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  // Populates the win conditions of the board.
  createWinConditions(): void {
    this.winConditions = [
      [this.topLeft, this.topMid, this.topRight],    // Top line horizontal
      [this.midLeft, this.midMid, this.midRight],    // Middle line horizontal
      [this.botLeft, this.botMid, this.botRight],    // Bottom line horizontal

      [this.topLeft, this.midLeft, this.botLeft],    // Left line vertical
      [this.topMid, this.midMid, this.botMid],       // Middle line vertical
      [this.topRight, this.midRight, this.botRight], // Right line vertical

      [this.topLeft, this.midMid, this.botRight],    // Diagonal left
      [this.botLeft, this.midMid, this.topRight],    // Diagonal right
    ];
  }

  // Gets the current board piece.
  getCurrentBoardPiece(): string {
    // Assume that player 1 will always be 'X' for the time being.
    return this.boardPieces[this.turnCount % 2];
  }

  // Update board when a square is selected.
  updateBoard(x: number, y: number): void {
    if (this.isTileTaken(x, y) || this.isGameOver())
      return;

    // Get board piece based on wich player is making a move.
    let boardPiece: string = this.getCurrentBoardPiece();

    // Change the selected section on the board with the board token.
    this.board[x][y] = boardPiece;
    // Update turn count.
    this.turnCount++;

    // Check if the game is over.
    this.checkGameOver();
  }

  // Checks if any of the lines on the board meet the win criteria.
  checkGameOver(): void {
    // Loop through each win condition and see if won.
    this.winConditions.forEach(c => {
      this.boardPieces.forEach(bp => {
        if (this.isLineWon(c, bp))
        {
          this.gameResult = bp;
          console.log(`Win condition: ${JSON.stringify(c)}`);
          return;
        }
      })
    });

    if (this.gameResult === null && this.turnCount - 1 === 9)
      this.gameResult = "Draw";
  }

  isGameOver(): boolean {
    return this.gameResult !== null;
  }

  // Checks if the win condition provided has been won by the provided piece.
  isLineWon(winCondition: number[][], boardPiece: string): boolean {
    let currentBoardPieces: string[] = [
      this.board[winCondition[0][0]][winCondition[0][1]],
      this.board[winCondition[1][0]][winCondition[1][1]],
      this.board[winCondition[2][0]][winCondition[2][1]],
    ];

    if (currentBoardPieces.every(x => x === boardPiece))
      return true;

    return false;
  }

  isTileTaken(x: number, y: number): boolean {
    return this.board[x][y] !== '';
  }

}
