import { Player } from "./models/player";
import { Room } from "./models/room";

export class DummyDb {
    players: Player[] = [];
    rooms: Room[] = [];

    // Adds a room to the db.
    addRoom(room: Room) {
        console.log(`Adding room ${room.name}`);
        if (this.rooms.findIndex(x => x.name === room.name) === -1)      
            this.rooms.push(room);

        console.log(`Finished adding room ${room.name}`);
    }

    // Adds a player to the db.
    addPlayer(newPlayer: Player): string {
        console.log(`Adding player ${newPlayer.name}`);
        let response: string = 'Player has been added.';

        if (this.players.findIndex(x => x.id === newPlayer.id) === -1)
            this.players.push(newPlayer);

        if (this.players.findIndex(x => x.name === newPlayer.name) === -1)
            this.players.push(newPlayer);
        else
            response = 'Player name is already taken.';
            
        console.log(`Finished adding player ${newPlayer.name}`);
        return response;
    }

    // Adds a player to the room.
    addPlayerToRoom(playerId: string, roomName: string) {
        console.log(`Adding player ${playerId} to room`);
        const foundPlayer: Player | null = this.players.find(x => x.id === playerId) ?? null;

        if (foundPlayer === null)
            return;

        const foundRoomIndex: number = this.rooms.findIndex(x => x.name === roomName);

        if (foundRoomIndex !== -1)
            this.rooms[foundRoomIndex].players.push(foundPlayer);

        console.log(`Finished adding player ${playerId} to room`);
    }

    // Removes a player by its id.
    removePlayer(playerId: string) {
        console.log(`Removing player ${playerId}`);
        // Remove player from room.
        const foundRoom: Room | null = this.rooms.find(x => x.players.map(x => x.id).includes(playerId)) ?? null;
        
        if (foundRoom !== null) {
            const foundRoomIndex: number = this.rooms.findIndex(x => x.name === foundRoom.name);
            const playerIndex: number = foundRoom.players.findIndex(x => x.id === playerId);

            if (playerIndex !== -1)
                foundRoom.players.splice(playerIndex, 1);
            
            // Update room if still players.
            if (foundRoom.players.length !== 0)
                this.rooms[foundRoomIndex] = foundRoom;
            // Remove room
            else
                this.rooms.splice(foundRoomIndex, 1);
        }
        
        // Remove player.
        const foundPlayerIndex: number = this.players.findIndex(x => x.id === playerId);
        
        if (foundPlayerIndex !== - 1)
            this.players.splice(foundPlayerIndex, 1);

        console.log(`Finished removing player ${playerId}`);
    }

    // Gets all rooms currently stored in the db.
    getRooms(): Room[] {
        return this.rooms;
    }
}