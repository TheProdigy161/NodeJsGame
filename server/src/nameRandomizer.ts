import fs from 'fs';

export function GenerateRandomName() {
    const names: string[] = fs.readFileSync('./randomNames.txt').toString().split("\n");
    const randomIndex: number = Math.floor(Math.random() * names.length); 

    return names[randomIndex];
}