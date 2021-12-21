import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  url: string = 'http://localhost:5000';

  constructor(private socket: Socket) { }

  connect(gameCode: string, username: string): boolean {
    if (gameCode == null || username || null)
      return false;

    this.socket.connect();
    this.socket.emit('join-game', { gameCode: gameCode, username: username });

    return true;
  }

  setupGameCalls(): void {
  }
}
