import Undead from '../class/undead.js';
import { paramsTyp } from '../class/character.js';

// class/Undead: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Undead: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.undead;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Undead: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Undead('Undead');

    expect(result.name).toBe('Undead'); // Проверка имени
    expect(result.type).toBe('undead'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(25); // Проверка атаки
    expect(result.defence).toBe(25); // Проверка защиты
});