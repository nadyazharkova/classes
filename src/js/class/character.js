export default class Character {
    constructor(name, type) {
        // Проверка имени
        if ((name.length < 2) || (name.length > 10)) {
            throw new Error('Имя должно содержать от 2х до 10 символов!');
        }

        // Проверка класса
        if (!(type.toLowerCase())) {
            throw new Error('Класс введен некорректно!');
        }

        this.name = name;
        this.type = type.toLowerCase();
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    // Повышение уровня:
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = Math.round(this.attack * 1.2);
            this.defence = Math.round(this.defence * 1.2);
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего');
        }
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