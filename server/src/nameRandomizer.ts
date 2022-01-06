import { readFileSync } from 'fs';

export function GenerateRandomName() {
    const names: string[] = readFileSync(__dirname + '/randomNames.txt').toString().split("\n");
    const randomIndex: number = Math.floor(Math.random() * names.length); 

    return names[randomIndex];
}