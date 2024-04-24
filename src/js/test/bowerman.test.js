import Bowerman from '../class/bowerman.js';
import { paramsTyp } from '../class/character.js';

// class/Bowerman: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Bowerman: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.bowerman;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Bowerman: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Bowerman('Bowerman');

    expect(result.name).toBe('Bowerman'); // Проверка имени
    expect(result.type).toBe('bowerman'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(25); // Проверка атаки
    expect(result.defence).toBe(25); // Проверка защиты
});