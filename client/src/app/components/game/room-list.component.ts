import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'count', 'action'];
  gameList: Room[] = [];

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.gameService.socket.on('got-game-list', (data: Room[]) => {
      this.gameList = data;
    });

    this.gameService.getGameList();
  }

  createGame(): void {
    this.router.navigate(['game/createGame']);
  }

  joinGame(gameCode: string): void {
    this.router.navigate(['game', gameCode.toUpperCase()]);
  }

  isJoinDisabled(room: Room): boolean {
    return room.players.length === 2;
  }
}
