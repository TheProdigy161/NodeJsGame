import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
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
