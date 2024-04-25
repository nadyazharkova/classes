import Bowerman from '../class/bowerman.js';

// 02 Проверка создания класса:
test('Правильно создается объект', () => {
    const bowerman = new Bowerman('Bowerman');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Bowerman',
        type: 'bowerman'
    };

    expect(bowerman).toEqual(correct);
});