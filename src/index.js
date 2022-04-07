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


$("#audioPlay").on("click", function(){
  sound.play(); // this method for playing music
});

$("#audioPause").on("click", function(){
  sound.pause(); // this method for pause music
}); 

$('#startGame').click(function() {
  $('#titleScreen').hide();
  $('#characterPage').show();
});

     //----character page----
      $('#dice-roll').click(function() {
      character.classBonus($('#selectClass').val());
      $( "#input-hp" ).val(character.currentHp);
      $( "#input-str" ).val(character.str);
      $( "#input-dex" ).val(character.dex);
      $( "#input-int" ).val(character.int);
      $( "#input-cha" ).val(character.cha);
      $( "#input-wis" ).val(character.wis); 
      $( "#input-con" ).val(character.con);
      
    });
     //disable button until character creation is done?

   //----shop----
    $('#shop-button').click(function() {
      character.name = $("#characterName").val();
      $( "#displayName" ).text(character.name);
      enemy.enemyGenerator();
      $( "#input-coin" ).val(character.gold);
      $( "#input-currentLeve" ).val(character.level);
      $('#characterPage').hide();
      $('#storePage').show();
    });

    $('#swordButton').click(function() {
      character.buySword();
      $( "#input-coin" ).val(character.gold);
      $( "#swordInventory" ).text("x"+character.weapon);
    });

    $('#shieldButton').click(function() {
      character.buyArmor();
      $( "#input-coin" ).val(character.gold);
      $( "#shieldInventory" ).text("x"+character.armor);
    });

    $('#potionButton').click(function() {
      character.buyPotion();
      $( "#input-coin" ).val(character.gold);
      $( "#potionInventory" ).text("x"+character.potion);
    });


    $('.battle-button').click(function() {
      $( "#input-currentHp" ).val(character.currentHp);
      $( "#input-EnemycurrentHp" ).val(enemy.currentHp);
      $( "#input-currentLevel" ).val(character.level);
      $( "#battle-sword" ).text("x"+ character.weapon);
      $( "#battle-shield" ).text("x"+ character.armor);
      $( "#battle-potion" ).text("x"+ character.potion);
      $( "#showName" ).text(character.name);
      $('#storePage').hide();
      $('#battlePage').show();
    });


    //----battle----
    // attack button
    // use item 
    // display damage ?
    $('#battle-sword').click(function() {
      character.itemSword(); 
      $( "#battle-sword" ).text("x"+ character.weapon);
    });

      $('#battle-shield').click(function() {
        character.itemArmor(); 
        $( "#battle-shield" ).text("x"+ character.armor);
      });

        $('#battle-potion').click(function() {
          character.healthPotion(); 
          $( "#battle-potion" ).text("x"+ character.potion);
          $( "#input-currentHp" ).val(character.currentHp);
        });

    $('#attackButton').click(function() {
      character.battle(enemy);
      $( "#input-currentHp" ).val(character.currentHp);
      $( "#input-EnemycurrentHp" ).val(enemy.currentHp);
      let playerCurrentHp = character.currentHp;
      let enemyCurrentHp = enemy.currentHp;
      if (playerCurrentHp <= 0) {
        $('#battlePage').hide();
        $('#endPage').show();
      } else
      if (enemyCurrentHp <= 0) {
        $('#battlePage').hide();
        $('#winPage').show();
      }
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
      character.healthTracker();
      enemy.healthTracker();
      $('#endPage').hide();
      $('#characterPage').show();
    });

    $('#storeButton').click(function() {
      character.healthTracker();
      enemy.healthTracker();
      $( "#input-coin" ).val(character.gold);
      $( "#input-currentLeve" ).val(character.level);
      $('#winPage').hide();
      $('#storePage').show();
    });



