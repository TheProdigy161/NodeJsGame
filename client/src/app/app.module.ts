import { environment } from './../environments/environment.prod';
import { MaterialUiModule } from './core/material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe-offline/tic-tac-toe-offline.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomListComponent } from './components/game/room-list.component';
import { RockPaperScissorsOnlineComponent } from './components/rock-paper-scissors/rock-paper-scissors-online/rock-paper-scissors-online.component';

const config: SocketIoConfig = { url: environment.apiUrl, options: { autoConnect: false } };

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    CreateRoomComponent,
    TicTacToeComponent,
    TicTacToeOnlineComponent,
    RockPaperScissorsOnlineComponent,
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
