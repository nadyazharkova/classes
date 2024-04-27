import Character from './character.js';

export default class Magician extends Character {
    constructor(name) {
        super(name, 'magician');
        this.attack = 10;
        this.defence = 40;
    }
}