import { GameService } from 'src/app/services/game.service';
import { Room } from 'src/app/models/room';
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
    gameCode: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
  }

  submit(): void {
    const gameCode: string | null = this.form.get('gameCode')?.value;
    const type: string | null = this.form.get('type')?.value;

    if (gameCode != null && type != null) {
      this.gameService.setRoom(new Room(gameCode, type));
      this.router.navigateByUrl('game/play');
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
