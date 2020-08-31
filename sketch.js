
var fixedRect, movingRect;

function setup() {

  createCanvas(1200,800);

  fixedRect1 = createSprite(500, 100, 50, 80); 
  fixedRect1.shapeColor = "yellow";
  fixedRect1.debug = true;

  fixedRect2 = createSprite(600, 100, 50, 80); 
  fixedRect2.shapeColor = "yellow";

  fixedRect3 = createSprite(700, 100, 50, 80); 
  fixedRect3.shapeColor = "yellow";

  fixedRect4 = createSprite(800, 100, 50, 80); 
  fixedRect4.shapeColor = "yellow";

  movingRect = createSprite(500, 500,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  //movingRect.velocityY=-5;
  //fixedRect.velocityY=5;
  
}

function draw() {
  background(0,0,0);   

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  
   
  //console.log(movingRect.x)

  //console.log(movingRect.x - fixedRect.x)

  //console.log(movingRect.y - fixedRect.y)

  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
  }

  // if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  //   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
  //   && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  //   && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {

  //   movingRect.shapeColor="red"; 

  //   movingRect.velocityY=movingRect.velocityY*(-1);
  //   fixedRect.velocityY=fixedRect.velocityY*(-1);

  // }
  // else{
  //   movingRect.shapeColor="blue"    
  // }

  
  drawSprites();
}

