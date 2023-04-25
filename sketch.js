var navio, navioA;
var mar
function preload(){
navioA = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
mar = loadImage ("sea.png");
}
function setup(){
  createCanvas(400,400);
mar = creatSprite (400,400);
mar = addImage (mar);

navio = creatSprite (200,200,20,20);
navio = addAnimation (navioA);
  
}

function draw() {
  background("blue");
  
 if (mar.x < 0){
mar.x = mar.width/2;
 }
  mar.velocityX = mar.velocityX + 0.5;
  drawSprites();

 
}
