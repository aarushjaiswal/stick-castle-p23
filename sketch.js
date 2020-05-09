const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var ground;
var sun;

function setup() {
  createCanvas(1600,800);
  sun = new Box(400,200,50,50,"yellow")
  ground = new Box(800, 780, 1600, 40,"brown");
  box1 = new Box(800, 570, 400, 380, "red");
  box2 = new Box(800, 420, 600, 100,"purple")
  box3 = new Box(700, 670, 100, 170,"green");
  box4 = new Box(900, 570, 75, 75,"blue");
  box5 = new Box(400, 730, 50, 60,"brown");
  box6 = new Box(400, 600, 200, 200,"green");
}

function draw() {
  background("blue"); 
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  ground.display()
  sun.display()
  drawSprites();
}