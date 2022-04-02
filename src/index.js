// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import Character from './rpg.js';
import Enemy from './enemy.js';
import {Howl, Howler} from 'howler';

let sound = new Howl({
  src: [ './assets/sound/AllSlam.webm','./assets/sound/AllSlam.mp3'],
  onplayerror: function() {
    sound.once('unlock', function() {
      sound.play();
    });
  }
});



// Play the sound.
// sound.play();

// Change global volume.
Howler.volume(0.5);


let character = new Character();
console.log(character.classBonus("Donkey"));

let enemy = new Enemy();
console.log(enemy.enemyGenerator());

character.battle(enemy);


//Battle Logic:
// enemy.hp
// enemy.atk
// enemy.damagePotential = enemy.atk + random d20

// player.atk = combined stats + relevant items
// player.damagePotential = player.atk + random d20

// player.damageActual = enemy.damagePotential - player.damagePotential
// player.hp -= player.damageActual

// OR 

// enemy.damageActual = player.damagePotential - enemy.damagePotential
// enemy.hp -= enemy.damageActual