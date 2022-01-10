import { DummyDb } from './dummyDb';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes/_routes';
import commands from './commands/_commands';

const PORT = process.env.PORT || 5000;
const app = express();
const db = new DummyDb();

const httpServer = http.createServer(app);
const server = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
routes(app, db);
commands(server, db);

httpServer.listen(PORT, () => {
    console.log(`Server listening on ${(httpServer.address() as any).address}:${PORT}`);
});
