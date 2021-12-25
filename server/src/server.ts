import { MoveData } from './models/moveData';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes/_routes';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
routes(app);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('User connected.');

    socket.on('disconnect', () => {
        console.log('User disconnected');
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
        } else {
            await socket.emit('join-room-failed', null);
        }

        // After last player has joined, output that the room is full.
        if (sockets.length === 2) {
            socket.to(room).emit('room-full');
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
