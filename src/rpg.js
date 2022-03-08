export default class Character {
  constructor() {
  this.name = "";
  this.class = "Gingerbread";
  this.str = 0;
  this.dex = 0;
  this.int = 0;
  this.cha = 0;
  this.wis = 0;
  this.con = 0;
  this.hp = 0;
  this.level = 1;
  this.bonus = 1;
  this.potion = 1;
  this.armor = 0;
  this.weapon = 0;
  this.shield = 0;
}

diceRoll() {
  return Math.floor(Math.random() * 20 + 1);
}

statGenerator() {
  this.str = this.diceRoll() * this.bonus;
  this.dex = this.diceRoll();
  this.int = this.diceRoll();
  this.cha = this.diceRoll();
  this.wis = this.diceRoll();
  this.con = this.diceRoll();
  this.hp = this.diceRoll() * this.bonus;
}

classBonus(className) {
  this.class = className;
  switch (this.class) {
    case ("Ogre"):
      this.bonus = 3;
      break;
    case ("Donkey"):
      this.bonus = 2;
      break;
    case ("Gingerbread"):
      this.bonus = 1;
      break;
    case ("Dragon"):
      this.bonus = 4;
      break;
  }
  this.statGenerator()
}

// generateGold() {
//   Math.floor(Math.random() * 100) + "Gold Coins.";
// }

healthPotion() {
  let potionValue = 40; 
  this.potion -= 1;
  if (this.potion >= 0) {
    return this.hp = this.hp + potionValue;
  } else return "need potions";
}

buyPotion() {
  potionPrice = 100;
  if (this.playersGold - potionPrice >=0) {
    return this.potion + 1;
  } else return "need more gold";
}

winning() {
  if (this.enemyHp <= 0) {
    return "Victory";
  } else if (this.hp <= 0) {
    return "You lose"
  } 
}
}

