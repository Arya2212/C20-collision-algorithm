var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="indigo";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if((movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 )  && (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2))
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
if((movingRect.y-fixedRect.y)<(movingRect.height/2+fixedRect.height/2) && (fixedRect.y-movingRect.y)<(fixedRect.height/2+movingRect.height/2))
{
  movingRect.shapeColor="orange";
  fixedRect.shapeColor="yellow";
}
else{
  movingRect.shapeColor="black"
  fixedRect.shapeColor="violet"
}
  drawSprites();
}
