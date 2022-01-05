import { DummyDb } from './../dummyDb';
import { Express } from 'express';
import api from './api';

export default function(app: Express, db: DummyDb): void {
    api(app, db);
}