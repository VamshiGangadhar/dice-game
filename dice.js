var i = Math.floor(Math.random()*6+1);
var image_1 = "dice"+i+".png";
var imageSrc1 = "images/" + image_1;

// var image1 = document.querySelector("img")[0];
// image1.setAttribute("src",imageSrc1);
document.querySelector(".img1").setAttribute("src",imageSrc1);

var j = Math.floor(Math.random()*6+1);
var image_2 = "dice"+j+".png";
var imageSrc2 = "images/"+image_2;

// var image2 = document.querySelector("img")[1];
// image2.setAttribute("src",imageSrc2);

document.querySelector(".img2").setAttribute("src",imageSrc2);

if (i>j){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(j>i){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(i==j){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1"),innerHTML="Player 2 wins";
}