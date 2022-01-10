import { Server } from 'socket.io';
import { Player } from 'src/models/player';
import { GenerateRandomName } from 'src/nameRandomizer';
import { DummyDb } from '../dummyDb';
import game from './game';
import tictactoe from './tictactoe';

export default function(server: Server, db: DummyDb): void {
    server.on('connection', (socket) => {
        const newName: string = GenerateRandomName();
        console.log(`User connected - ${newName}`);
        db.addPlayer(new Player(socket.id, newName));
        
        game(server, db, newName);
        tictactoe(server, socket, db);
    });
}