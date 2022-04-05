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
Howler.volume(0.35);

//Stuff we need to make vscode happy:

let character = new Character();

let enemy = new Enemy();

character.battle(enemy);


// Audio controls:

$( function() {
  $( "#audioVolumeSlider" ).slider({
    value:35,
    min: 0,
    max: 100,
    step: 5,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value+"%");
      Howler.volume(($( "#audioVolumeSlider" ).slider( "value" ) / 100 ));
    }
  });
  $( "#amount" ).val($( "#audioVolumeSlider" ).slider( "value" )+"%");
} );


$("audioVolumeSlider").on("click", function(){
  sound.play(); // this method for playing music
});


$("#audioPlay").on("click", function(){
  sound.play(); // this method for playing music
});

$("#audioPause").on("click", function(){
  sound.pause(); // this method for pause music
}); 

$(document).ready(function() {
  
    
    $('#startGame').click(function() {
      $('#titleScreen').hide();
      $('#characterPage').show();
    });

    $('.shop-button').click(function() {
      $('#characterPage').hide();
      $('#storePage').show();
    });

    $('.battle-button').click(function() {
      $('#storePage').hide();
      $('#battlePage').show();
    });

    $('#loseButton').click(function() {
      $('#battlePage').hide();
      $('#endPage').show();
    });

    $('#winButton').click(function() {
      $('#battlePage').hide();
      $('#winPage').show();
    });

    $('#restartButton').click(function() {
      $('#endPage').hide();
      $('#characterPage').show();
    });

    $('#storeButton').click(function() {
      $('#winPage').hide();
      $('#storePage').show();
    });



     //----character page----
     //disable button until character creation is done?
     // dice roll button
     // generate stats
     // display stats
     // display dice roll image
     // display character image


    //----shop----
    // equip & purchase items
    // decrease coin amount 


    //----battle----
    // attack button
    // use item 
    // display damage ?
    // reveal character & enemy image
    //display character & enemy name 

    //coin needs to be linked 

});
