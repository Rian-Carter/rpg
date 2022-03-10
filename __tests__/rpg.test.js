import Character from './../src/rpg.js';
import Enemy from './../src/enemy.js';

describe ('Character', () => {

  test('should returns character function', () => {
    let character = new Character("Z");
    expect(character.name).toEqual("");
    expect(character.class).toEqual("Gingerbread");
    expect(character.str).toEqual(0);
    expect(character.dex).toEqual(0);
    expect(character.int).toEqual(0);
    expect(character.cha).toEqual(0);
    expect(character.wis).toEqual(0);
    expect(character.con).toEqual(0);
    expect(character.hp).toEqual(0);
    expect(character.level).toEqual(1);
    expect(character.bonus).toEqual(1);  
  });
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
    expect(character.class).toEqual("Gingerbread");
    expect(character.str).toBeLessThanOrEqual(20);
    expect(character.dex).toBeLessThanOrEqual(20);
    expect(character.int).toBeLessThanOrEqual(20);
    expect(character.cha).toBeLessThanOrEqual(20);
    expect(character.wis).toBeLessThanOrEqual(20);
    expect(character.con).toBeLessThanOrEqual(20);
    expect(character.hp).toBeLessThanOrEqual(20);
    expect(character.level).toEqual(1);
    expect(character.bonus).toEqual(1); 
  });
});

describe ('classBonus', () =>{

  //need test for bonus 1
  test('should return a specific bonus depending on class selection', () => {
    let character = new Character();
    character.statGenerator();
    expect(character.hp).toBeLessThanOrEqual(20);
    expect(character.str).toBeLessThanOrEqual(20);
  });
  
  // test for bonus gingerbread Class
  test('should return a specific bonus depending on class selection', () => {
    let character = new Character();
    character.classBonus("Gingerbread")
    expect(character.hp).toBeLessThanOrEqual(20);
    expect(character.str).toBeLessThanOrEqual(20);
  });
  
  // test for Donkey Class
    test('should return a specific bonus depending on class selection', () => {
      let character = new Character();
      character.bonus = 2;
      character.classBonus("Donkey")
      expect(character.hp).toBeLessThanOrEqual(40);
      expect(character.str).toBeLessThanOrEqual(40);
    });
  //test for Ogre Class
  test('should return a specific bonus depending on class selection', () => {
    let character = new Character();
    character.bonus = 3;
    character.classBonus("Ogre")
    expect(character.hp).toBeLessThanOrEqual(60);
    expect(character.str).toBeLessThanOrEqual(60);
  });
   //test for Dragon Class
  test('should return a specific bonus depending on class selection', () => {
    let character = new Character();
    character.bonus = 4;
    character.classBonus("Dragon")
    expect(character.hp).toBeLessThanOrEqual(80);
    expect(character.str).toBeLessThanOrEqual(80);
  });
});
  

//test for health potion
describe ('healthPotion' , () => {
  
  test('should return healthPotion function' , () => {
    let character = new Character();
    character.potion = 1;
    character.healthPotion();
    expect(character.hp).toEqual(40);
    expect(character.potion).toEqual(0);

  });

  test('should return healthPotion function' , () => {
    let character = new Character();
    character.potion = -1;
    character.healthPotion();
    expect(character.potion).toEqual(-1);
    expect(character.hp).toEqual(0);
  });
});


  // test for buy potion
describe ('buyPotion' , () => {
  
    test ('should return Characters starting gold value minus cost of potion' , () => {
      let character = new Character();
      character.buyPotion();
      expect(character.gold).toEqual(0);
      expect(character.potion).toEqual(1);
  });

  test ('should return Characters zero gold value' , () => {
    let character = new Character();
    character.gold = 0;
    character.buyPotion();
    expect(character.gold).toEqual(0);
    expect(character.potion).toEqual(0);
});
});

//test for weapon
describe ('itemSword' , () => {
  
  test('should return no weapon' , () => {
    let character = new Character(); //Character does not have a weapon
    character.itemSword();
    expect(character.weapon).toEqual(0);
    expect(character.str).toBeGreaterThanOrEqual(0);
  });

  test('should return itemSword function' , () => {
    let character = new Character(); 
    character.weapon = 1;
    character.itemSword();
    expect(character.weapon).toEqual(0);
    expect(character.str).toEqual(25);
  });
});

describe ('buysword' , () => {

  test ('should return characters starting gold value minus cost of sword' , () => {
    let character = new Character();
    character.buySword();
    expect(character.gold).toEqual(0);
    expect(character.weapon).toEqual(1);
  })
  test ('should return Characters zero gold value' , () => {
    let character = new Character();
    character.gold = 0;
    character.buySword();
    expect(character.gold).toEqual(0);
    expect(character.weapon).toEqual(0);
});
});

describe ('battle' , () => {
  test('It should roll a twenty sided dice add the attack value for the Character', () => {
        
        let character = new Character();
        let roll = character.diceRoll();
        let charAtk = character.str+character.dex+character.int+character.cha+character.wis+character.con
        let charDamagePotential = charAtk+roll
        expect(charDamagePotential).toBeLessThanOrEqual(20); // figure out what max dmg could be later
      });
    
      test('It should roll a twenty sided dice add the attack value for the Enemy', () => {
        
        let enemy = new Enemy();
        let roll = enemy.diceRoll();
        let enemyDamagePotential = enemy.atk+roll
        expect(enemyDamagePotential).toBeLessThanOrEqual(65); // figure out what max dmg could be later
      });
    
      test('It should compare the compare the attack values of the Character and Enemy and return the difference', () => {
        
        let character = new Character();
        let enemy = new Enemy();
        let charDamagePotential = character.diceRoll();
        let enemyDamagePotential = enemy.diceRoll();
        expect(charDamagePotential-enemyDamagePotential).toBeDefined();
      });

      test('It should roll dice and compare the attack values for the Enemy and the Character and return the difference', () => {
        let character = new Character();
        let enemy = new Enemy();  
        expect(character.battle(enemy)).toBeDefined();
  });

  test('It should roll dice and compare the attack values for the Enemy and the Character and return the difference', () => {
    let character = new Character();
    character.str = 999;
    let enemy = new Enemy();  
    expect(character.battle(enemy)).toBeDefined();
});

  test('It should roll dice and compare the attack values for the Enemy and the Character and return the difference', () => {
    let enemy = new Enemy(); 
    enemy.atk = 999;
    let character = new Character();  
    expect(character.battle(enemy)).toBeDefined();
});
});


describe('endCombat', () => {

  test('test to see if enemy health hits 0', () => {
    let character = new Character();
    let enemy = new Enemy();
    character.hp = 1;
    enemy.hp = -1;
    expect(character.endCombat(enemy)).toBeDefined();
});

  test('test to see if character health hits 0', () => {
    let character = new Character();
    let enemy = new Enemy();
    enemy.hp = 1;
    character.hp = -1;
    expect(character.endCombat(enemy)).toBeDefined();
});

test('test to see if neither character or enemy win, battle continues', () => {
  let character = new Character();
  let enemy = new Enemy();
  enemy.hp = 1;
  character.hp = 1;
  expect(character.endCombat(enemy)).toBeDefined();
});
});
