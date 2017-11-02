// BACK-END/BUSINESS-LOGIC
//player information
function Player(name) {
  this.name = name;
  this.tempScore = 0;
  this.totalScore = 0;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.turn = true;
  this.newGame;
}

Game.prototype.playerSwitch = function() {
  this.turn = !this.turn;
}

//function for roll
Player.prototype.roll = function (){
  var number = rollDie();
  if (number === 1) {
    this.tempScore = 0;
    game.playerSwitch();
    // this.turn = !this.turn;
    this.turn = 1;
  } else {
    return this.tempScore += number;
  }
}

//function for hold
Player.prototype.hold = function (){
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  if (this.totalScore >= 100) {
    victory();
  } else
    game.playerSwitch();
    // true ===
    // this.turn = !this.turn;
}

Player.prototype.changePlayer = function(){
  if (this.turn = 0){
    return this.player1;
  } else {
    return this.player2;
  }
}//change player

var game = new Game();

var victory = function() {
  alert("VICTORY");
  this.totalScore = 0;
  $(".p1-total").text(0);
  $(".p2-total").text(0);
}

var rollDie = function() {
  return Math.floor(Math.random() * 6) + 1;
};

// FRONT-END/USER-LOGIC
$(document).ready(function() {

  $("#player-names").submit(function(event) {
    event.preventDefault();
    var p1name = $("input#p1").val();
    var p2name = $("input#p2").val();
    var player1 = new Player(p1name);
    var player2 = new Player(p2name);
    game.player1 = player1;
    game.player2 = player2;
    $(".p1-name-display").append(p1name + " total: ");
    $(".p2-name-display").append(p2name + " total: ");
    var number = rollDie();

    $(".pre-game").hide();
    $(".game-start").show();

    $("#roll-btn").click(function(event) {
      // $(".p1-tempscore").text("temporary score is..." + this.player.roll());
      if (game.turn) {
        //player 1 rolls
        player1.roll()
        alert("P1 P1 P1 " + player1.tempScore);
      } else {
        player2.roll()
        alert("This is p2 " +player2.tempScore);
        //player 2 rolls
      }

      // alert(this.player1.roll())
      // alert("p2 " + player2.roll());
    }); //roll button

    $("#hold-btn").click(function(event){
      if (game.turn) {
        player1.hold()
        debugger;
        //player 1 hold


      } else {
        player2.hold()
        //player 2 hold
        alert("EY2")
      }
      //turn = !turn
    });//hold button

  }); //when player-names us submitted
}); //end doc ready
