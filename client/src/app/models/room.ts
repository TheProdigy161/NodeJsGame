import { Player } from "./player";

export class Room {
    name: string = '';
    players: Player[] = [];

    constructor(name: string) {
        this.name = name;
    }
}