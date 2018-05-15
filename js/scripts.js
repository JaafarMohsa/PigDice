$(document).ready(function(){
  var totalScore = 0;
  var totalScoreTwo = 0;
  var holdScore=0;
  var holdScore2=0;
  // var player1 = new player ("Player 1");
  // var player2 = new player ("Player 2");
  $('#roll10').click(function(){
    // var currentTurn= new Turn (Player1);
    // var total = currentTurn.total;
    var dice = Math.floor((Math.random() * 6)+1);
    $("#roll1").hide();

          //output the rolled value
          $("#C1").text('');
          $("#C1").append(dice);

          if(dice > 1){
              totalScore += dice;

              //output cumulative score
              $("#Totalscore").text('');
              $("#Totalscore").append(totalScore);

              if(totalScore>=100){
                $("#P1").text("Winner!");

              }

          }else {
            totalScore = 0;
            $("#Totalscore").text('0');
            $("#C1").text('1');
            $("#roll1").show();
            $("#roll10").hide();
            $("#roll11").show();
          }

  });

  $("#new").click(function() {
    location.reload();
});

$("#hold").click(function() {
  holdScore += totalScore;
$("#roll10").hide();
// $("#roll11").show();
});





$('#roll11').click(function(){
  var dice2= Math.floor((Math.random() * 6)+1);
  $("#roll2").hide();

        //output the rolled value
        $("#C2").text('');
        $("#C2").append(dice2);

        if(dice2 > 1){
            totalScoreTwo += dice2;

            //output cumulative score
            $("#Totalscore2").text('');
            $("#Totalscore2").append(totalScoreTwo);

            if(totalScoreTwo>=100){
              $("#P2").text("Winner!");

            }

        }else {
          totalScoreTwo = 0;
          $("#Totalscore2").text('0');
          $("#C2").text('1');
          $("#roll2").show();
          $("#roll11").hide();
          $("#roll10").show();
        }

});

$("#new").click(function() {
  location.reload();
});

$("#hold").click(function() {
holdScore2 += totalScoreTwo;
// $("#roll11").hide();
$("#roll10").show();
});
});
