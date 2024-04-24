import Swordsman from '../class/swordsman.js';
import { paramsTyp } from '../class/character.js';

// class/Swordsman: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Swordsman: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.swordsman;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Swordsman: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Swordsman('Swordsman');

    expect(result.name).toBe('Swordsman'); // Проверка имени
    expect(result.type).toBe('swordsman'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(40); // Проверка атаки
    expect(result.defence).toBe(10); // Проверка защиты
});