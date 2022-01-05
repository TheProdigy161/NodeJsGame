import { TicTacToeCreateRoomComponent } from './components/tic-tac-toe-create-room/tic-tac-toe-create-room.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe-online/tic-tac-toe-online.component';
import { TicTacToeRoomListComponent } from './components/tic-tac-toe-room-list/tic-tac-toe-room-list.component';

const routes: Routes = [
  { path: 'tictactoe', component: TicTacToeRoomListComponent },
  // { path: 'tictactoe/game', component: TicTacToeCreateRoomComponent },
  { path: 'tictactoe/game/:gameCode', component: TicTacToeOnlineComponent },
  { path: '**', redirectTo: 'tictactoe' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
