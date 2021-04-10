const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new box(200,100,50,50);
  box2 = new box(210,50,50,100);
  ground1 = new ground(200,390,400,20);
}

function draw() {
  background(255,255,255);

  Engine.update(engine)

 box1.display();
 box2.display();
 ground1.display();
}