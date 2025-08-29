import Team, { Character } from '../index.js';

describe('Team class', () => {
    let team;
    let char1;
    let char2;
    let char3;

    beforeEach(() => {
        team = new Team();
        char1 = new Character('Warrior', 1);
        char2 = new Character('Mage', 2);
        char3 = new Character('Archer', 3);
    });

    test('add: добавляет нового персонажа', () => {
        team.add(char1);
        expect(team.members.has(char1)).toBe(true);
    });

    test('add: выбрасывает ошибку при добавлении дубликата', () => {
        team.add(char1);
        expect(() => team.add(char1)).toThrowError('Этот персонаж уже в команде');
    });

    test('addAll: добавляет нескольких персонажей сразу', () => {
        team.addAll(char1, char2, char3);
        expect(team.members.size).toBe(3);
        expect(team.members.has(char2)).toBe(true);
    });

    test('addAll: игнорирует дубли, ошибки не генерирует', () => {
        team.addAll(char1, char2, char1, char3, char2);
        expect(team.members.size).toBe(3);
    });

    test('toArray: возвращает массив с персонажами', () => {
        team.addAll(char1, char2);
        const arr = team.toArray();
        expect(Array.isArray(arr)).toBe(true);
        expect(arr).toContain(char1);
        expect(arr).toContain(char2);
    });

    test('toArray: пустая команда возвращает пустой массив', () => {
        expect(team.toArray()).toEqual([]);
    });
});