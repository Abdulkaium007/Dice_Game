var ranNum1 = Math.floor(Math.random()*6) + 1;
//console.log(ranNum1);

var ranPic1 = "./images/dice" + ranNum1 + ".png";
document.querySelector("img.img1").setAttribute("src", ranPic1);


var ranNum2 = Math.floor(Math.random()*6) + 1;
//console.log(ranNum1);

var ranPic2 = "./images/dice" + ranNum2 + ".png";
document.querySelector("img.img2").setAttribute("src", ranPic2);


if (ranNum1>ranNum2){
    document.querySelector("h1").innerHTML ="🎉 Player 1 won the battle." ;
}
else if (ranNum2>ranNum1){
    document.querySelector("h1").innerHTML = "Player 2 won the battle. 🎉";
}
else{
    document.querySelector("h1").innerHTML = "🤝 Draw. 🤝";
}