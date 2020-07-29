var fixedRect, movingRect, gObj1, gObj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gObj1 = createSprite(1000, 700, 20, 20);
  gObj1.shapeColor = "blue";
  gObj1.velocityX = -2.5;
  gObj1.velocityY = -2.3;
  gObj2 = createSprite(100, 500, 20, 20);
  gObj2.shapeColor = "blue";
  gObj2.velocityX = 3;
  gObj2.velocityY = -1;
  gObj1.debug = true;
  gObj2.debug = true;
}

function draw() {
  background(0,0,0);  

  mybounceOff(movingRect, fixedRect);
  mybounceOff(gObj1, gObj2);
  console.log(gObj1.x - gObj2.x);
  console.log(gObj2.x - gObj1.x);
  console.log(gObj1.y - gObj2.y);
  console.log(gObj2.y - gObj1.y);
  drawSprites();
}

