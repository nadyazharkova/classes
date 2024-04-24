import Magician from '../class/magician.js';
import { paramsTyp } from '../class/character.js';

// class/Magician: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Magician: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.magician;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Magician: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Magician('Magician');

    expect(result.name).toBe('Magician'); // Проверка имени
    expect(result.type).toBe('magician'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(10); // Проверка атаки
    expect(result.defence).toBe(40); // Проверка защиты
});