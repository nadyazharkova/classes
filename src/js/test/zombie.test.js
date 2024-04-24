import Zombie from '../class/zombie.js';
import { paramsTyp } from '../class/character.js';

// class/Zombie: 01 Проверка наличия класса в словаре paramsTyp:
test('class/Zombie: 01 Проверка наличия записей в словаре paramsTyp', () => {
    const result = paramsTyp.zombie;
    expect(result).not.toBe(undefined);
});

// 02 Проверка создания класса:
test('class/Zombie: 02 Проверка наличия записей в словаре paramsTyp', () => {
    const result = new Zombie('Zombie');

    expect(result.name).toBe('Zombie'); // Проверка имени
    expect(result.type).toBe('zombie'); // Проверка типа
    expect(result.health).toBe(100); // Проверка ХП
    expect(result.level).toBe(1); // Проверка уровня
    expect(result.attack).toBe(40); // Проверка атаки
    expect(result.defence).toBe(10); // Проверка защиты
});