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

describe ('classRoll', () => {

  test('should return a random number between 1-4', () => {
    let enemy = new Enemy();
    expect(enemy.classRoll()).toBeLessThanOrEqual(4);
  });
});

});