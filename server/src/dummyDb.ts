import { Player } from "./models/player";
import { Room } from "./models/room";

export class DummyDb {
    players: Player[] = [];
    rooms: Room[] = [];

    // Adds a room to the db.
    addRoom(room: Room) {
        if (this.rooms.findIndex(x => x.name === room.name) === -1)      
            this.rooms.push(room);
    }

    // Removes a room by its name.
    removeRoom(roomName: string) {
        const foundRoomIndex: number = this.rooms.findIndex(x => x.name === roomName);
        
        if (foundRoomIndex !== - 1)
            this.rooms.splice(foundRoomIndex, 1);

        const playersInRoom: Player[] = this.players.filter(x => x.currentRoom === roomName);

        for (let i = 0; i < playersInRoom.length; i++) {

        }
    }

    // Adds a player to the db.
    addPlayer(newPlayer: Player): string {
        if (this.players.findIndex(x => x.id === newPlayer.id) === -1)
            this.players.push(newPlayer);

        if (this.players.findIndex(x => x.name === newPlayer.name) === -1)
            this.players.push(newPlayer);
        else
            return 'Player name is already taken.';

        return 'Player has been added.';
    }

    // Adds a player to the room.
    addPlayerToRoom(playerId: string, roomName: string) {
        const foundPlayer: Player | null = this.players.find(x => x.id === playerId) ?? null;

        if (foundPlayer !== null)
            foundPlayer.currentRoom = roomName;
    }

    // Removes a player by its id.
    removePlayer(playerId: string) {
        const foundPlayerIndex: number = this.players.findIndex(x => x.id === playerId);
        
        if (foundPlayerIndex !== - 1)
            this.players.splice(foundPlayerIndex, 1);
    }
}