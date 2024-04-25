import Swordsman from '../class/swordsman.js';

// 02 Проверка создания класса:
test('class/Swordsman: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Swordsman('Swordsman');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Swordsman',
        type: 'swordsman'
    };

    expect(result).toEqual(correct);
});