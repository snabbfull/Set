export class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

// Team.js
export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже в команде');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((ch) => this.members.add(ch));
    }

    toArray() {
        return Array.from(this.members);
    }
}