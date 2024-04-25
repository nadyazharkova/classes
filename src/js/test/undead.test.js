import Undead from '../class/undead.js';

// 02 Проверка создания класса:
test('class/Undead: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Undead('Undead');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Undead',
        type: 'undead'
    };

    expect(result).toEqual(correct);
});