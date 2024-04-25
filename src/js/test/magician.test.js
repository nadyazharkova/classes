import Magician from '../class/magician.js';

// 02 Проверка создания класса:
test('class/Magician: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Magician('Magician');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Magician',
        type: 'magician'
    };

    expect(result).toEqual(correct);
});