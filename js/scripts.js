function Player(name, tempScore, totalScore) {
  this.name = name
  this.tempScore = tempScore
  this.totalScore = totalScore
}

$("#roll-btn").click(function() {
  var roll = Math.floor(Math.random() * 6) + 1;
});

$(document).ready(function() {
  $("#player-names").submit(function(event) {
    event.preventDefault();
    var p1name = $("input#p1").val();
    var p2name = $("input#p2").val();
    var player1 = new Player(p1name, 0, 0);
    var player2 = new Player(p2name, 0, 0);
    $(".pre-game").hide();
    $(".game-start").show();

  }); //when player-names us submitted
}); //end doc ready
