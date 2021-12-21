import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  url: string = 'http://localhost:5000';

  constructor(private socket: Socket) { }

  connect(gameCode: string): boolean {
    if (gameCode == null)
      return false;

    this.socket.connect();
    this.socket.emit('join-game', gameCode);

    return true;
  }

  makeMove(gameCode: string, x: number, y: number): void {
    this.socket.emit('make-move', { room: gameCode, x: x, y: y });
  }

  setupGameCalls(): void {
  }
}
