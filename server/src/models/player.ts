export class Player {
    id: string = '';
    name: string = '';
    currentRoom: string = '';

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}