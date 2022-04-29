function myFunction() {
    var randomNumber1=Math.random()*6 + 1;
    var playerOne=Math.floor(randomNumber1);
    var playerOneSource="images/dice"+playerOne+".png";


    var randomNumber2=Math.random()*6 + 1;
    var playerTwo=Math.floor(randomNumber2);
    var playerTwoSource="images/dice"+playerTwo+".png";

    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", playerOneSource);

    var img2 = document.querySelector(".img2");
    img2.setAttribute("src", playerTwoSource);

    var winText = document.querySelector("h1");


    if (playerOne > playerTwo){
        winText.innerHTML ="Player 1 Wins!";

    }

    if (playerOne < playerTwo){
        winText.innerHTML ="Player 2 Wins!";

    }

    if (playerOne==playerTwo) {
    winText.innerHTML ="Draw!";
    }
}

myFunction();
   


