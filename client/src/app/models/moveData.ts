import { Move } from "./move";

export class MoveData {
  room: string;
  move: Move;

  constructor(room: string, move: Move) {
    this.room = room;
    this.move = move;
  }
}
