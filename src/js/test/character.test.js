import Character from '../class/character.js';

test('Проверка Ошибки при вводе некорректного имени', () => {
    expect(() => {
      const character = new Character('A', 'Bowman');
    }).toThrow(new Error('Имя должно содержать от 2х до 10 символов!'));
});

test('Проверка Ошибки при вводе некорректного типа', () => {
    expect(() => {
        const character = new Character('Andrew', 'Ivan');
      }).toThrow(new Error('Данный тип несуществует'));
});

test('Проверка корректности создания классов', () => {
    const character = new Character('Ivan', 'bowerman');
    const correctObj = {
        name: 'Ivan',
        type: 'bowerman',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(character).toEqual(correctObj);
});

test('Проверка levelUp при health <= 0', () => {
    expect(() => {
        const character = new Character('Ivan', 'bowerman');
        character.health = 0;
        character.levelUp();
    }).toThrow(new Error('Нельзя повысить левел умершего'));
});
  
test('Проверка damage при health > 0', () => {
    const character = new Character('Ivan', 'bowerman');
    character.defence = 25;
    character.damage(25);
    expect(character.health).toBe(81);
});
  
test('Проверка levelUp при health > 0', () => {
    const character = new Character('Ivan', 'bowerman');
    character.health = 100;
    character.attack = 25;
    character.defence = 25;

    const levelUpObj = {
        name: 'Ivan',
        type: 'bowerman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
      };

    character.levelUp();
    expect(character).toEqual(levelUpObj);
});
  
test('Проверка damage при health <= 0', () => {
    const character = new Character('Ivan', 'bowerman');
    character.defence = 0;
    character.damage(100);
    expect(character.health).toBeCloseTo(0);
});