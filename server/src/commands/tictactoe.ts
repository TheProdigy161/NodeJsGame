import { Server, Socket } from 'socket.io';
import { MoveData } from 'src/models/moveData';
import { DummyDb } from '../dummyDb';

export default function (server: Server, socket: Socket, db: DummyDb): void {
    makeMove(socket);
}

// Make a move on the tic-tac-toe board.
function makeMove(socket: Socket) {
    socket.on('tic-tac-toe-make-move', (data: MoveData) => {
        console.log(`TicTacToe: Make move called - ${JSON.stringify(data)}, on socket ${socket.id}`);

        // Emit message to all clients in room apart from sender.
        socket.to(data.room).emit('tic-tac-toe-make-client-move', data.move);
    });
}