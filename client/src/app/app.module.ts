import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TicTacToeOnlineComponent } from './components/tic-tac-toe-online/tic-tac-toe-online.component';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: { autoConnect: true } };

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TicTacToeOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
