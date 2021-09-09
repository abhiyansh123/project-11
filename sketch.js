var ship,ship_sailing
var sea,sea1
function preload(){
  ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1=loadAnimation("sea.png")
}

function setup(){
  createCanvas(625,400);  
  sea=createSprite(400,200)  
  sea.addAnimation("sea_moving",sea1)
  sea.scale=0.3
  ship=createSprite(130,200,30,30)
  ship.addAnimation("moving_ship",ship_sailing)
  ship.scale=0.3
  
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if(sea.x<0){
    sea.x=sea.width/8
  }
  drawSprites()
}
