import Character from './../src/rpg.js';

describe ('Character', () => {

  test('should returns character function', () => {
    let character = new Character("Z");
    expect(character.name).toEqual("");
    expect(character.class).toEqual("");
    expect(character.str).toEqual(0);
    expect(character.dex).toEqual(0);
    expect(character.int).toEqual(0);
    expect(character.cha).toEqual(0);
    expect(character.wis).toEqual(0);
    expect(character.con).toEqual(0);
    expect(character.hp).toEqual(0);
    expect(character.level).toEqual(1);  
  });

  describe ('diceRoll', () => {

  test('should return a random number between 1-20', () => {
    let character = new Character();
    expect(character.diceRoll()).toBeLessThanOrEqual(20);
  });
});

describe('statGenerator', () => {

  test('should return a character function with a set of attributes with random number between 1-20', () => {
    let character = new Character();
    character.statGenerator();
    expect(character.name).toEqual("");
    expect(character.class).toEqual("");
    expect(character.str).toBeLessThanOrEqual(20);
    expect(character.dex).toBeLessThanOrEqual(20);
    expect(character.int).toBeLessThanOrEqual(20);
    expect(character.cha).toBeLessThanOrEqual(20);
    expect(character.wis).toBeLessThanOrEqual(20);
    expect(character.con).toBeLessThanOrEqual(20);
    expect(character.hp).toBeLessThanOrEqual(20);
    expect(character.level).toEqual(1); 


  })
})



});