var sp1,sp2,sp3,sp4,roof,roof2,roof3;

function setup() {
  createCanvas(800,400);
  sp1= createSprite(300, 290, 30, 100);
  sp1.shapeColor=("brown");
  sp2= createSprite(350, 300, 30, 80);
  sp2.shapeColor=("brown");
  sp3= createSprite(400, 300, 30, 80);
  sp3.shapeColor=("brown");
  sp4= createSprite(450, 290, 30, 100);
  sp4.shapeColor=("brown");
 roof= createSprite(375,230,170,20);
 roof.shapeColor=("red");
 roof2= createSprite(375,210,170,20);
 roof2.shapeColor=("purple");
 roof3=createSprite(375,190,170,20);
 roof3.shapeColor=("blue");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}