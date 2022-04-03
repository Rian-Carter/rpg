import 'jquery-ui/ui/widgets/slider';
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
// Set global volume.
Howler.volume(0.5);

// Change global volume

$(function() {
  $( "#audioVolumeSlider" ).slider();
});


$("audioVolumeSlider").on("click", function(){
  sound.play(); // this method for playing music
});


$("#audioPlay").on("click", function(){
  sound.play(); // this method for playing music
});

$("#audioPause").on("click", function(){
  sound.pause(); // this method for pause music
}); 







let character = new Character();
// console.log(character.classBonus("Donkey"));

let enemy = new Enemy();
// console.log(enemy.enemyGenerator());

character.battle(enemy);
