import { CreateRoomComponent } from './components/create-room/create-room.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { RoomListComponent } from './components/game/room-list.component';

const routes: Routes = [
  { path: 'game', component: RoomListComponent },
  { path: 'game/createGame', component: CreateRoomComponent },
  { path: 'game/play', component: TicTacToeOnlineComponent },
  { path: '**', redirectTo: 'game' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
