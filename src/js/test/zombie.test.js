import Zombie from '../class/zombie.js';

// 02 Проверка создания класса:
test('class/Zombie: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Zombie('Zombie');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Zombie',
        type: 'zombie'
    };

    expect(result).toEqual(correct);
});