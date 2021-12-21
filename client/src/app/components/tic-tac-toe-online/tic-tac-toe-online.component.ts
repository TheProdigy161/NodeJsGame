import { TicTacToeService } from './../../services/tictactoe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-online',
  templateUrl: './tic-tac-toe-online.component.html',
  styleUrls: ['./tic-tac-toe-online.component.scss']
})
export class TicTacToeOnlineComponent implements OnInit {

  constructor(private gameService: TicTacToeService) { }

  ngOnInit(): void {
    this.gameService.connect('HDAJSD', 'Ross');
  }
}
