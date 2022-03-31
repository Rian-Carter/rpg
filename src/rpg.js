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
  this.level = 1; // do we still need this? Should this be repurposed to fight level or something?
  this.bonus = 1;
  this.potion = 0;
  this.armor = 0; // to be implemented 
  this.weapon = 0;
  this.shield = 0; // to be implemented 
  this.gold = 100;
  // this.inventory = []; //Do we still need this?
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
  this.statGenerator();
}

//Items

healthPotion() {
  let potionValue = 40; 
  if (this.potion > 0) {
    this.potion -= 1;
    return this.hp = this.hp + potionValue;
  } else
    return this.hp;
  }


itemSword() {
  let swordValue = 25;
  if (this.weapon > 0) {
      this.weapon -= 1;
    return this.str = this.str + swordValue;
  } else
    return this.str;
}

// itemArmor() {
//   let armorValue = 25;
//   if (this.hp? > 0) {
//       this.weapon -= 1;
//     return this.str = this.str + swordValue;
//   } else
//     return this.str;
// }


// Buy Section

buySword() {
  let swordPrice = 100;
  if (this.gold >= 100) {
    this.gold -= swordPrice;  
    return this.weapon += 1;
  } else
    return this.gold;
}

buyPotion() {
  let potionPrice = 100;
  if (this.gold >= 100) {
    this.gold -= potionPrice;
    return this.potion += 1;
  } else 
    return this.gold;
}


// Battle Section

// Core gameplay loop
battle(enemy) {
const characterRoll = this.diceRoll();
const enemyRoll = enemy.diceRoll();
const charAtk = this.str + this.dex + this.int + this.cha + this.wis + this.con;
let charDamagePotential = parseInt(charAtk) + characterRoll;
let enemyDamagePotential = enemy.atk + enemyRoll;
// console.log("Character diceroll " + charDamagePotential);
// console.log("Enemy diceroll " + enemyDamagePotential);
if (charDamagePotential >= enemyDamagePotential) {
  enemy.hp -= (charDamagePotential - enemyDamagePotential);
  return this.endCombat(enemy);
} else (charDamagePotential < enemyDamagePotential); {
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
    return this.battle(enemy);
}

}
}

// endCombat(enemy) {
//   if(enemy.hp > this.hp) {
//      return "Enemy health is " + " " + enemy.hp;
//   } else if (this.hp > enemy.hp);
//     return "Your health is " + " " + this.hp
// }

//endCombat will have 3 outcomes: Character wins and then levels up, Enemy wins and then Character goes to game over. Otherwise, continue to battle. 



// levelUp(character) {
// if(this.hp  )

// }

// generateGold() {
//   Math.floor(Math.random() * 100) + "Gold Coins.";
// }

//to adjust enemy 
// enemy.property

//Math.abs() returns a true value