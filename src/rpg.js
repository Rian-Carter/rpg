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
  this.hp = 250;
  this.currentHp = 0;
  this.level = 1;
  this.potion = 0;
  this.armor = 0;
  this.weapon = 0;
  this.gold = 100;
  this.totalGold = 0;
  this.wins = 0;
  this.xp = 0;
}

// levelUp() {
//   this.xp = 0;
//   if (xp = 100 ) {
//   return this.level + 1, this.gold + 100, this.totalGold + 100, this.xp = 0;
//   }
//   }


diceRoll() {
  return Math.floor(Math.random() * 20 + 1);
}

statGenerator() {
  this.str = this.diceRoll();
  this.dex = this.diceRoll();
  this.int = this.diceRoll();
  this.cha = this.diceRoll();
  this.wis = this.diceRoll();
  this.con = this.diceRoll();
  // this.hp = this.diceRoll();
}

classBonus(className) {
  this.class = className;
  switch (this.class) {
    case ("Ogre"):
      this.str + 20;
      this.hp + 20;
      this.currentHp + 20;
      break;
    case ("Donkey"):
      this.wis + 20;
      this.cha + 20;
      break;
    case ("Gingerbread"):
      this.dex + 20;
      this.con + 20;
      break;
    case ("Dragon"):
      this.str + 20;
      this.int + 20;
      break;
    case ("Princess Fiona"):
      this.cha + 20;
      this.hp + 20;
      this.currentHp + 20;
      break;
    case ("Puss In Boots"):
      this.int + 20;
      this.hp + 20;
      this.currentHp + 20;
      break;
  }
  this.statGenerator();
}

//Items

healthPotion() {
  let potionValue = 40; 
  if (this.potion > 0) {
    this.potion -= 1;
    return this.currentHp = this.currentHp + potionValue;
  } else
    return this.currentHp;
  }

itemSword() {
  let swordValue = 25;
  if (this.weapon > 0) {
      this.weapon -= 1;
    return this.str = this.str + swordValue;
  } else
    return this.str;
}

itemArmor() {
  let armorValue = 25;
  if (this.armor > 0) {
      this.armor -= 1;
    return this.hp = this.hp + armorValue;
  } else
    return this.hp;
}

// Buy Section

buyPotion() {
  let potionPrice = 100;
  if (this.gold >= 100) {
    this.gold -= potionPrice;
    return this.potion += 1;
  } else 
  return this.gold;
}

buySword() {
  let swordPrice = 100;
  if (this.gold >= 100) {
    this.gold -= swordPrice;  
    return this.weapon += 1;
  } else
  return this.gold;
}

buyArmor() {
  let armorPrice = 100;
  if (this.gold >= 100) {
    this.gold -= armorPrice;  
    return this.armor += 1;
  } else
  return this.gold;
}

generateGold() {
  this.gold = this.gold + Math.floor(Math.random() * 100) + "Gold Coins.";
  this.totalGold = this.gold + this.totalGold;
}

healthTracker() {
  this.currentHp = this.hp;
}

// Battle Section

// Core gameplay loop
battle(enemy) {
const characterRoll = this.diceRoll();
const enemyRoll = enemy.diceRoll();
const charAtk = this.str + this.dex + this.int + this.cha + this.wis + this.con;
let charDamagePotential = parseInt(charAtk) + characterRoll;
let enemyDamagePotential = enemy.atk + enemyRoll;
if (charDamagePotential >= enemyDamagePotential) {
  enemy.hp -= (charDamagePotential - enemyDamagePotential);
  return this.endCombat(enemy); 
} else (charDamagePotential <= enemyDamagePotential); {
  this.hp -= (enemyDamagePotential - charDamagePotential);
  return this.endCombat(enemy);
}
}

endCombat(enemy) {
  if(enemy.hp <= 0) {
    return "Enemy health is " + " " + enemy.hp;
  } else if (this.hp <= 0) {
    return "Your health is " + " " + this.hp;
  } else {
    return this.healthTracker() && this.battle(enemy) && this.wins +1 && this.xp + 50 && this.generateGold();
    }
  }
}