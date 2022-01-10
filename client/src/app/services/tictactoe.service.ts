import { MoveData } from './../models/moveData';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  constructor(public socket: Socket) { }

  makeMove(moveData: MoveData): void {
    this.socket.emit('tic-tac-toe-make-move', moveData);
  }
}
