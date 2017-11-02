// BACK-END/BUSINESS-LOGIC
//player information
function Player(name, tempScore, totalScore, turn) {
  this.name = name
  this.tempScore = tempScore
  this.totalScore = totalScore
  this.turn = turn;
}

//function for roll
Player.prototype.roll = function (){
  var number = rollDie();
  if (number === 1) {
    this.tempScore = 0;
    this.turn = !this.turn;
    // MAKE THIS CHANGE PLAYERS
  } else {
    return this.tempScore += number;
  }
}

//function for hold
Player.prototype.hold = function (){
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  if (this.totalScore >= 10) {
    victory();
  } else {
    // SWITCH PLAYERS
  }
}

var victory = function() {
  alert("VICTORY");
  this.totalScore = 0;
  alert(this.totalScore);
  $(".p1-total").text(0);
  $(".p2-total").text(0);
}

var rollDie = function() {
  return Math.floor(Math.random() * 6) + 1;
};

// FRONT-END/USER-LOGIC
$(document).ready(function() {

  $("#player-names").submit(function(event) {
    var player1 = new Player(p1name, 0, 0, true);
    var player2 = new Player(p2name, 0, 0, false);
    event.preventDefault();
    var p1name = $("input#p1").val();
    var p2name = $("input#p2").val();
    $(".p1-name-display").append(p1name + " total: ");
    $(".p2-name-display").append(p2name + " total: ");
    var number = rollDie();
    turn = true

    $(".pre-game").hide();
    $(".game-start").show();

    $("#roll-btn").click(function(event) {
      $(".p1-tempscore").text("temporary score is..." + player1.roll());
      // alert("p2 " + player2.roll());

    }); //roll button
    $("#hold-btn").click(function(event){
      $(".p1-total").text(player1.totalScore);
      $(".p2-total").text(player2.totalScore);
      player1.hold();
    });//hold button
  }); //when player-names us submitted
}); //end doc ready
