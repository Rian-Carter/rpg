export default class Enemy {
  constructor() {
    this.name = "";
    this.atk = 75;
    this.hp = 200;
    this.currentHp = 0;
    this.level = 1;
    this.bonus = 1;
  }

  healthTracker() {
    this.currentHp = this.hp;
  }
  // to assign the enemy class
  classRoll() {
return Math.floor(Math.random() * 4 + 1);
  }

  diceRoll() {
    return Math.floor(Math.random() * 30 + 1);
  }


  // to assign specfic classes atk & hp to enemy
  enemyGenerator() {
    this.bonus = this.classRoll();
    this.atk += this.bonus + this.diceRoll();
    this.hp += this.bonus + this.diceRoll();
    this.healthTracker();
    return [this.hp, this.atk, this.bonus];
  }
  
}