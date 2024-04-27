import Character from './character.js';

export default class Daemon extends Character {
    constructor(name) {
        super(name, 'daemon');
        this.attack = 10;
        this.defence = 40;
    }
}