
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);

  console.log(object);

}

function draw() {
  background("black");  

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  //rect(300,20,50,10);
  drawSprites();
}