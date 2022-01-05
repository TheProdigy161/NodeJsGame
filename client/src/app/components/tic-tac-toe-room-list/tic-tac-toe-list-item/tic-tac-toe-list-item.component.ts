import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-tic-tac-toe-list-item',
  templateUrl: './tic-tac-toe-list-item.component.html',
  styleUrls: ['./tic-tac-toe-list-item.component.scss']
})
export class TicTacToeListItemComponent implements OnInit {
  @Input()
  room: Room | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
