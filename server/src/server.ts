import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const PORT = 5001;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// app.use(cors());

io.on('connection', (socket) => {
    console.log('User connected.');
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
