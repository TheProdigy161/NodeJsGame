import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-toe-create-room',
  templateUrl: './tic-tac-toe-create-room.component.html',
  styleUrls: ['./tic-tac-toe-create-room.component.scss']
})
export class TicTacToeCreateRoomComponent implements OnInit {
  form: FormGroup = new FormGroup({
    gameCode: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const gameCode: string | null = this.form.get('gameCode')?.value;

    if (gameCode != null) {
      this.router.navigate(['tictactoe/game', gameCode.toUpperCase()]);
    }
  }

  checkContent(event: KeyboardEvent): boolean {
    const regexPattern = new RegExp('[a-zA-Z]');
    
    if (event.key === " ")
      return false;

    if (!regexPattern.test(event.key))
      return false;

    return true;
  }
}
