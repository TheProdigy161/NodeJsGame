import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe-online/tic-tac-toe-online.component';

const routes: Routes = [
  // { path: '**', component: TicTacToeComponent }
  { path: '**', component: TicTacToeOnlineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
