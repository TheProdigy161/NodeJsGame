import { Room } from './../../models/room';
import { TicTacToeService } from './../../services/tictactoe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-room-list',
  templateUrl: './tic-tac-toe-room-list.component.html',
  styleUrls: ['./tic-tac-toe-room-list.component.scss']
})
export class TicTacToeRoomListComponent implements OnInit {
  gameList: Room[] = [];

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.socket.on('got-game-list', (data: Room[]) => {
      this.gameList = data;
    });

    this.ticTacToeService.getGameList();
  }

}
