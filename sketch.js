//decalring variables 
var trex ,trex_running
var ground;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  //create canvas
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,163,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  
  ground=createSprite(50,190,400,10)
}

function draw(){
  background("white")
  
  //to draw sprite
  drawSprites()

  //making the trex jump
  if (keyDown("space")||keyDown("up")) {
   trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
}