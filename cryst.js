var randomNum = Math.floor(Math.random() * 102) + 19;
var win = 0;
var losses = 0;

var crystalOne = Math.floor(Math.random() * 12) + 1; // between 0-1 not including 0 or 1
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;

var score = 0;
 
$("h1").css({ background: "#ccc", color: "pink"});
$("h2").css({ background: "yellow", color: "white"});
$(".hookah").css({ background: "orange", color: "coral" });
$(".madison").css({ background: "green", color: "gold"});
$(".score").css({ background: "gold", color: "black"});

$(".hookah").html(randomNum);


$(".crystal").click(function(){
    switch (this.id) {
        case "One":
            score += crystalOne;
            $(".score").html(score);
            condition();
            break;

        case "Two":
            score += crystalTwo;
            $(".score").html(score);
            condition();
            break;

        case "Three":
            score += crystalThree;
            $(".score").html(score);
            condition();
            break;


        case "Four":
            score += crystalFour;
            $(".score").html(score);
            condition();
            break;
    }
});

function condition() {
    if (randomNum == score) {
        win++;
        $(".madison").html("win: " + win + " losses: " + losses);
    reset();
    }
    
    else if (score > randomNum) {
        losses++;
        $(".madison").html("win: " + win + " losses: " + losses);
        reset();
    }
    
    else {
    
    }
}

function reset() {
     crystalOne = Math.floor(Math.random() * 12) + 1; // reset copy from variables
     crystalTwo = Math.floor(Math.random() * 12) + 1;
     crystalThree = Math.floor(Math.random() * 12) + 1;
     crystalFour = Math.floor(Math.random() * 12) + 1;
        score = 0;
randomNum = Math.floor(Math.random() * 102) + 19;
    }

