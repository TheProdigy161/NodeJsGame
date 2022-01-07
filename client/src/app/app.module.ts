import { MaterialUiModule } from './core/material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe-offline/tic-tac-toe-offline.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { TicTacToeCreateRoomComponent } from './components/tic-tac-toe/tic-tac-toe-create-room/tic-tac-toe-create-room.component';
import { TicTacToeRoomListComponent } from './components/tic-tac-toe/tic-tac-toe-room-list/tic-tac-toe-room-list.component';

const config: SocketIoConfig = { url: 'https://tic-tac-toe-game-server.azurewebsites.net', options: { autoConnect: false } };

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TicTacToeOnlineComponent,
    TicTacToeCreateRoomComponent,
    TicTacToeRoomListComponent
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
