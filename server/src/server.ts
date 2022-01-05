import { DummyDb } from './dummyDb';
import { MoveData } from './models/moveData';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes/_routes';
import { Player } from './models/player';
import { GenerateRandomName } from './nameRandomizer';
import { Room } from './models/room';

const PORT = process.env.PORT || 5000;
const app = express();
const db = new DummyDb();

app.use(cors());
routes(app, db);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('User connected.');
    db.addPlayer(new Player(socket.id, GenerateRandomName()));

    socket.on('disconnect', () => {
        console.log('User disconnected');
        db.removePlayer(socket.id);
    });
    
    socket.on('get-game-list', () => {
        socket.emit('got-game-list', db.getRooms());
    });

    socket.on('join-game', async (room) => {
        console.log(`Join game called - ${room}, on socket ${socket.id}`);
        // Get number of sockets in room;
        const sockets = await io.in(room).fetchSockets();

        console.log(`Number of sockets found - ${sockets.length}`);

        // If the number of sockets is less than 2 then join, otherwise emit error.
        if (sockets.length < 2) {
            await socket.join(room);
            await socket.emit('join-room-success', sockets.length === 0);

            db.addRoom(new Room(room));
            db.addPlayerToRoom(socket.id, room);
        } else {
            await socket.emit('join-room-failed', null);
        }

        // After last player has joined, output that the room is full.
        if (sockets.length === 1) {
            io.to(room).emit('room-full');
        }
    });

    socket.on('make-move', (data: MoveData) => {
        console.log(`Make move called - ${JSON.stringify(data)}, on socket ${socket.id}`);

        // Emit message to all clients in room apart from sender.
        socket.to(data.room).emit('make-client-move', data.move);
    });
});

server.listen(PORT, () => {
    
    console.log(`Server listening on ${(server.address() as any).address}:${PORT}`);
});
