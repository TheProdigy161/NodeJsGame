import { Server, Socket } from 'socket.io';
import { MoveData } from 'src/models/moveData';
import { DummyDb } from '../dummyDb';

export default function (server: Server, socket: Socket, db: DummyDb, username: string): void {
    makeMove(socket, username);
}

// Make a move on the tic-tac-toe board.
function makeMove(socket: Socket, username: string) {
    socket.on('tic-tac-toe-make-move', (data: MoveData) => {
        console.log(`TicTacToe: Make move called - ${JSON.stringify(data)}, by player ${username}`);

        // Emit message to all clients in room apart from sender.
        socket.to(data.room).emit('tic-tac-toe-make-client-move', data.move);
    });
}