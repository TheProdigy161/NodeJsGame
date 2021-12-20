import { Express } from 'express';
import api from './api';

export default function(app: Express): void {
    api(app);
}