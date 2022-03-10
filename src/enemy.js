export default class Enemy {
  constructor() {
    this.name = "";
    this.atk = 40;
    this.hp = 0;
    this.level = 1;
    this.bonus = 1;
  }

  // to assign the enemy class
  classRoll() {
return Math.floor(Math.random() * 4 + 1);
  }

  diceRoll() {
    return Math.floor(Math.random() * 20 + 1);
  }


  // to assign specfic classes atk & hp to enemy
  enemyGenerator() {
    this.bonus = this.classRoll();
    this.atk = this.bonus + this.diceRoll();
    this.hp = this.bonus + this.diceRoll();
  }
  
}