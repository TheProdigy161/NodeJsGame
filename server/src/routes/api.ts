import { DummyDb } from './../dummyDb';
import { Express } from 'express'

export default function (app: Express, db: DummyDb): void {
    app.get('/', (req, res) => {
        res.json({ message: `API called.` });
    });

    app.get('/api', (req, res) => {
        res.json({ message: `API called.` });
    });

    app.get('/api/healthcheck', (req, res) => {
        res.json({ message: 'API is functioning normally.' });
    });

    app.get('/api/getRooms', (req, res) => {
        res.json(db.getRooms());
    });
}