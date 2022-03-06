export default class Character {
  constructor() {
  this.name = "";
  this.class = "";
  this.str = 0;
  this.dex = 0;
  this.int = 0;
  this.cha = 0;
  this.wis = 0;
  this.con = 0;
  this.hp = 0;
  this.level = 1;
}
  
diceRoll() {
  return Math.floor(Math.random() * 20 + 1)
}

statGenerator() {
  this.str = this.diceRoll();
  this.dex = this.diceRoll();
  this.int = this.diceRoll();
  this.cha = this.diceRoll();
  this.wis = this.diceRoll();
  this.con = this.diceRoll();
  this.hp = this.diceRoll();
}

}