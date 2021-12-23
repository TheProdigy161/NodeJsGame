import { MaterialUiModule } from './core/material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe-online/tic-tac-toe-online.component';
import { TicTacToeSelectionComponent } from './components/tic-tac-toe-selection/tic-tac-toe-selection.component';

const config: SocketIoConfig = { url: 'https://tic-tac-toe-game-server.azurewebsites.net', options: { autoConnect: true } };

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TicTacToeOnlineComponent,
    TicTacToeSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
