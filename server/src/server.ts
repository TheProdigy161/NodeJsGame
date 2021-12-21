import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes/_routes';

const PORT = 5000;
const app = express();

app.use(cors());
routes(app);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log('User connected.');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('join-game', (room) => {
        socket.join(room);
    });

    socket.on('make-move', (data) => {
        socket.broadcast.to(data.room).emit(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
