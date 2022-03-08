import Enemy from './../src/enemy.js';

describe ('Enemy', () => {

  test('should return enemy function', () => {
  let enemy = new Enemy();
  expect(enemy.name).toEqual("");
  expect(enemy.atk).toEqual(0);
  expect(enemy.hp).toEqual(0);
  expect(enemy.level).toEqual(1);
  expect(enemy.bonus).toEqual(1);
  });
});

describe ('classRoll', () => {

  test('should return a random number between 1-4', () => {
    let enemy = new Enemy();
    expect(enemy.classRoll()).toBeLessThanOrEqual(4);
  });
});

  describe ('diceRoll', () => {

    test('should return number between 1-20', () => {
      let enemy = new Enemy();
    expect(enemy.diceRoll()).toBeLessThanOrEqual(20);
    });
  });

  describe ('enemyGenerator', () => {

    test('should return a specific class to enemy', () => {
      let enemy = new Enemy();
      enemy.enemyGenerator();
      expect(enemy.name).toEqual("");
      expect(enemy.atk).toBeLessThanOrEqual(25);
      expect(enemy.hp).toBeLessThanOrEqual(25);
      expect(enemy.level).toEqual(1);
      expect(enemy.bonus).toBeLessThanOrEqual(4);
    });
  });

