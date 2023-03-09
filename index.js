let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);


let randomNumber2 = Math.floor(Math.random()*6+1);

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (randomDiceImage1 > randomDiceImage2) {
    document.querySelector("h1").innerHTML = "Player-1 wins!🚩"
}
else if (randomDiceImage2 > randomDiceImage1) {
    document.querySelector("h1").innerHTML = "Player-2 wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!🤐"
}