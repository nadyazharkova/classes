import Daemon from '../daemon.js';
import { paramsTyp } from '../character.js';

// class/Daemon: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Daemon: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.daemon;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Daemon: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Daemon('Daemon');

    expect(result.name).toBe('Daemon'); // Проверка имени
    expect(result.type).toBe('daemon'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(10); // Проверка атаки
    expect(result.defence).toBe(40); // Проверка защиты
});