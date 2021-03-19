var m;
var f;

function setup() {
  createCanvas(800,400);
   f = createSprite(400, 200, 50, 50);
   m = createSprite(600, 200, 100, 100);
}

function draw() {
  background(255,255,255);  
  
  m.y = World.mouseY;
  m.x = World.mouseX;

 if(m.x - f.x < f.width/2+ m.width/2 && f.x - m.x < f.width/2+ m.width/2 && m.y - f.y < f.height/2+ m.height/2 && f.y - m.y < f.height/2+ m.height/2){
  m.shapeColor = "red";
  f.shapeColor = "red";
 }else{
  m.shapeColor = "grey";
  f.shapeColor = "grey";
 }


  drawSprites();
}