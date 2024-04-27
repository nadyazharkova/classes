export default class Character {
    constructor(name, type) {
        const typeOfCharacters = [
            'bowerman',
            'swordsman',
            'magician',
            'daemon',
            'undead',
            'zombie'
        ];

        // Проверка имени
        if ((name.length < 2) || (name.length > 10)) {
            throw new Error('Имя должно содержать от 2х до 10 символов!');
        }

        // Проверка класса
        if (!typeOfCharacters.includes(type)) {
            throw new Error('Данный тип несуществует');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    // Повышение уровня:
    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        }

        this.level = this.level + 1;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
    }

    // Расчет полученного урона
    damage(points) {
        if (Math.round(points * (1 - this.defence / 100)) < this.health) {
            this.health -= Math.round(points * (1 - this.defence / 100));
        } else {
            this.health = 0;
        }
    }
}