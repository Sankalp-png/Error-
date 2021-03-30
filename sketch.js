//matter.js is a physics engine

//const means constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box; 
var ground;
var ball1;
var ball2;
var ball3;

function setup() {
  createCanvas(1400,800);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //Box is the class name
  box = new Box(500, 50, 50, 50);
  box1 = new Box(540, 150, 50, 50);

  ground = new Ground(700,760,1400,20);
  ground1 = new Ground(1350,400,20,800);

  ball1 = Bodies.circle(200, 50, 49, {restitution:1.5})
  World.add(myWorld, ball1);

  ball2 = Bodies.circle(250, 50, 35, {restitution:1.5})
  World.add(myWorld, ball2);

  ball3 = Bodies.circle(280, 50, 35, {restitution:1.5})
  World.add(myWorld, ball3);


}

function draw() {
  background("orange"); 
  Engine.update(myEngine);

  rectMode(CENTER)

  box.display();
  box1.display();

  ground.display();
  ground1.display();


  ellipseMode(RADIUS)
  fill("red")
  ellipse(ball1.position.x, ball1.position.y, 49, 49)

  fill("pink")
  ellipse(ball2.position.x, ball2.position.y, 35, 35)

  fill("yellow")
  ellipse(ball3.position.x, ball3.position.y, 28, 28)

  drawSprites();
}