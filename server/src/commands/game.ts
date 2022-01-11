import { Server, Socket } from 'socket.io';
import { Room } from '../models/room';
import { DummyDb } from '../dummyDb';

export default function (server: Server, db: DummyDb, username: string): void {
    server.on('connection', (socket) => {
        joinGame(server, socket, db);
        getGameList(server, socket, db);
        playerDisconnects(socket, db, username);
    });
}

// Join a game room.
function joinGame(server: Server, socket: Socket, db: DummyDb) {
    socket.on('join-game', async (room: Room) => {
        console.log(`Join game called - ${room}, on socket ${socket.id}`);
        // Get number of sockets in room;
        const sockets = await server.in(room.name).fetchSockets();

        console.log(`Number of sockets found - ${sockets.length}`);

        // If the number of sockets is less than 2 then join, otherwise emit error.
        if (sockets.length < 2) {
            await socket.join(room.name);
            await socket.emit('join-room-success', sockets.length === 0);

            db.addRoom(new Room(room.name, room.type));
            db.addPlayerToRoom(socket.id, room.name);
        } else {
            await socket.emit('join-room-failed', null);
        }

        // After last player has joined, output that the room is full.
        if (sockets.length === 1) {
            server.to(room.name).emit('room-full');
        }

        await server.emit('got-game-list', db.getRooms());
    });
}

// Gets a list of all game rooms.
function getGameList(server: Server, socket: Socket, db: DummyDb) {
    socket.on('get-game-list', () => {
        console.log('Calling get-game-list.');
        server.sockets.emit('got-game-list', db.getRooms());
    });
}

function playerDisconnects(socket: Socket, db: DummyDb, username: string) {
    socket.on('disconnect', () => {
        console.log(`User disconnected - ${username}`);
        db.removePlayer(socket.id);
    });
}