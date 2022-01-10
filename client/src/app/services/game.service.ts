import { MoveData } from '../models/moveData';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private room: Room;

  constructor(public socket: Socket) { }

  setRoom(room: Room): void {
    this.room = room;
  }

  joinGame(): boolean {
    if (this.room == null)
      return false;

    this.socket.connect();
    this.socket.emit('join-game', this.room);

    return true;
  }

  getGameList(): void {
    this.socket.connect();
    this.socket.emit('get-game-list');
  }
}
