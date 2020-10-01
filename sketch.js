var rect1,rect2,Gameobject1,Gameobject2,Gameobject3;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(200,200,50,80);
  rect1.shapeColor = 'green';
  rect2 = createSprite(400,200,80,30)
  rect2.shapeColor = 'blue';
  Gameobject1 = createSprite(300,356,50,50);
  Gameobject1.shapeColor="yellow";
  Gameobject2 = createSprite(200,326,50,50);
  Gameobject2.shapeColor="yellow";
  Gameobject3 = createSprite(130,213,50,50);
  Gameobject3.shapeColor="yellow";
}

function draw() {
  background(0);  
  
  rect1.x = mouseX;
  rect1.y = mouseY;
  if(isTouching(Gameobject3,rect1)) {
   rect1.shapeColor="red";
   Gameobject3.shapeColor="red";

  }
  else {
    rect1.shapeColor="green";
    Gameobject3.shapeColor="yellow";
  }
  
  drawSprites();
}
function isTouching(object1,object2) {

  if(object1.x-object2.x < object1.width/2+ object2.width/2 &&
    object2.x-object1.x < object1.width/2+ object2.width/2 &&
    object1.y-object2.y < object1.width/2+ object2.width/2 &&
    object2.y-object1.y < object2.width/2+ object1.width/2) {
    return true
  } else {
    return false
  }
}