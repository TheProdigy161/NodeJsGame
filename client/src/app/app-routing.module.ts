import { TicTacToeCreateRoomComponent } from './components/tic-tac-toe/tic-tac-toe-create-room/tic-tac-toe-create-room.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { RoomListComponent } from './components/game/room-list.component';

const routes: Routes = [
  { path: 'game', component: RoomListComponent },
  { path: 'game/createGame', component: TicTacToeCreateRoomComponent },
  { path: 'game/:gameCode', component: TicTacToeOnlineComponent },
  { path: '**', redirectTo: 'game' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
