import Character from '../class/character.js';

// 01 Проверка Ошибок при вводе имени:
test.each([
    [
        'K',
        'Bowerman',
        Error,
        'Имя должно содержать от 2х до 10 символов!'
    ],
    [
        'Fvsgsdfafhsdfhdfhsdfh',
        'Bowerman',
        Error,
        'Имя должно содержать от 2х до 10 символов!'
    ],
])('Проверка Ошибки при вводе некорректного имени', (name, type, errorType, errorText) => {
    function result() {
        new Character(name, type);
    }

    expect(result).toThrow(errorType); // Проверка типа ошибки
    expect(result).toThrow(errorText); // Проверка текста ошибки
});

// 02 Проверка Ошибок при вводе класса:
test.each([
    [
        'Хиллер',
        'Hiller',
        Error,
        'Класс введен некорректно!'
    ],
    [
        'Сумонер',
        'Summon',
        Error,
        'Класс введен некорректно!'
    ],
])('Проверка Ошибки при вводе некорректного класса', (name, type, errorType, errorText) => {
    function result() {
        new Character(name, type);
    }

    expect(result).toThrow(errorType); // Проверка типа ошибки
    expect(result).toThrow(errorText); // Проверка текста ошибки
});

// 03 Проверка корректности создания классов:
test('Проверка наличия атрибутов "health", "attack" и "defence" в позициях словаря paramsTyp', () => {

    expect(this.health).not.toBe(undefined);
    expect(this.attack).not.toBe(undefined);
    expect(this.defence).not.toBe(undefined);
});

// 03.2 проверка корректности создания классов:
test('Проверка корректности создания классов', (name, type, health, level, attack, defence) => {
    const result = new Character(name, type);

    expect(result.name).toBe(name); // Проверка имени
    expect(result.type).toBe(type); // Проверка типа
    expect(result.health).toBe(health); // Проверка ХП
    expect(result.level).toBe(level); // Проверка уровня
    expect(result.attack).toBe(attack); // Проверка атаки
    expect(result.defence).toBe(defence); // Проверка защиты
});

// 04.1 Проверка функции повышения уровня:
test('1Проверка функции повышения уровня', () => {
    const result = new Character('Name-1', 'swordsman');
    expect(result.level).toBe(1);
    expect(result.attack).toBe(40); // *= 1.2;
    expect(result.defence).toBe(10);// *= 1.2;
    expect(result.health).toBe(100);

    result.damage(50); // Наносим урон для проверки регенерации при повышении уровня
    result.levelUp(); // Повышаем уровень
    expect(result.level).toBe(2);
    expect(result.attack).toBe(48); // *= 1.2;
    expect(result.defence).toBe(12);// *= 1.2;
    expect(result.health).toBe(100);
});

// 04.2 Проверка функции повышения уровня, если health <= 0:
test('2Проверка функции повышения уровня', () => {
    const char = new Character('Name-1', 'swordsman');
    char.damage(999); // Наносим урон для проверки регенерации при повышении уровня
    function result() {
        char.levelUp(); // Повышаем уровень
    }

    expect(result).toThrow(Error); // Проверка типа ошибки
    expect(result).toThrow('Нельзя повысить левел умершего'); // Проверка текста ошибки
});

// 05 Проверка функции Расчет полученного урона:
test('Проверка функции Расчет полученного урона', () => {
    const result = new Character('Name-1', 'swordsman');
    expect(result.health).toBe(100);
    result.damage(10);
    expect(result.health).toBe(91);
    result.damage(999);
    expect(result.health).toBe(0);
});

test('Проверка функции Расчет полученного урона (если урон превышает очки health)', () => {
    const result = new Character('Name-1', 'swordsman');
    result.damage(9999);
    expect(result.health).toBe(0);
});