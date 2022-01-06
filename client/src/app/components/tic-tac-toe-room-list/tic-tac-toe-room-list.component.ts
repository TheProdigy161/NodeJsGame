import { Room } from './../../models/room';
import { TicTacToeService } from './../../services/tictactoe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-toe-room-list',
  templateUrl: './tic-tac-toe-room-list.component.html',
  styleUrls: ['./tic-tac-toe-room-list.component.scss']
})
export class TicTacToeRoomListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'count', 'action'];
  gameList: Room[] = [];

  constructor(private ticTacToeService: TicTacToeService, private router: Router) { }

  ngOnInit(): void {
    this.ticTacToeService.socket.on('got-game-list', (data: Room[]) => {
      this.gameList = data;
    });

    this.ticTacToeService.getGameList();
  }

  createGame(): void {
    this.router.navigate(['tictactoe/createGame']);
  }

  joinGame(gameCode: string): void {
    this.router.navigate(['tictactoe/game', gameCode.toUpperCase()]);
  }

  isJoinDisabled(room: Room): boolean {
    return room.players.length === 2
  }
}
