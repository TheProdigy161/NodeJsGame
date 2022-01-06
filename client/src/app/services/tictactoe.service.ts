import { MoveData } from './../models/moveData';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  constructor(public socket: Socket) { }

  joinGame(gameCode: string): boolean {
    if (gameCode == null)
      return false;

    this.socket.connect();
    this.socket.emit('join-game', gameCode);

    return true;
  }

  makeMove(moveData: MoveData): void {
    this.socket.emit('make-move', moveData);
  }

  getGameList(): void {
    this.socket.connect();
    this.socket.emit('get-game-list');
  }
}
