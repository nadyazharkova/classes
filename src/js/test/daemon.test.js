import Daemon from '../class/daemon.js';

// 02 Проверка создания класса:
test('class/Daemon: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const daemon = new Daemon('Daemon');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Daemon',
        type: 'daemon'
    };

    expect(daemon).toEqual(correct);
});