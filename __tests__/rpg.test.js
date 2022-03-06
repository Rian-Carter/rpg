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
    expect(character.hitPoints).toEqual(0);
    expect(character.level).toEqual(1);  
  });

  test('', () => {
    
  })
});