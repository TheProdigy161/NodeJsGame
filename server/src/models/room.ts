import { Player } from "./player";

export class Room {
    name: string = '';
    type: string = '';
    players: Player[] = [];

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}