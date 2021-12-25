import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-toe-selection',
  templateUrl: './tic-tac-toe-selection.component.html',
  styleUrls: ['./tic-tac-toe-selection.component.scss']
})
export class TicTacToeSelectionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    gameCode: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const gameCode: string | null = this.form.get('gameCode')?.value;

    if (gameCode != null) {
      this.router.navigate(['game', gameCode.toUpperCase()]);
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
