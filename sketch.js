const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowman ,snowmanImg;


var snow1 = [];

function preload() {
  backgroundImg = loadImage("snow1.jpg","snow2.jpg","snow3.jpg")
  snowmanImg = loadAnimation("snowman.png","snowman2.png","snowman3.png","snowman4.png","snowman5.png","snowman6.png","snowman7.png","snowman8.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 snowman = createSprite(400, 200, 50, 50);
 snowman.addAnimation("standing",snowmanImg)
 snow = new Snow(20 , -20 ,20 ,20)
 snow.x = random(100,700)
 snow.scale=0.1;

}

function draw() {
  background(backgroundImg); 
  Engine.update(engine); 

  if (frameCount%0.5 === 0) {
    snow1.push(new Snow(random(10 , 750) , 10));
  }
  for (let i = 0; i < snow1.length; i++) {
      snow1[i].display();
    
  }
// for(var i = 0; i<200 ; i++)
// {
//   snow[i].showDrop();
//   show[i].update();
// }
          snow.display()
   
  drawSprites();

}
