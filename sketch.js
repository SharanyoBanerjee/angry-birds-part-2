const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box4;
var box5;
var box3;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var bird;
var backgroundImage;
function preload() {
    backgroundImage = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,320,50,50);
    box2 = new Box(720,320,50,50);
    box3 = new Box(500,240,50,50);
    box4 = new Box(720,240,50,50);
    box5 = new Box(610,160,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(610,350);
    pig2 = new Pig(610,300);
    log1 = new Log(610,300,270,PI/2); 
    log2 = new Log(610,220,270,PI/2);
    log3 = new Log(550,150,120,PI/7);
    log4 = new Log(700,150,120,-PI/7);
    bird = new Bird(300,300);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();


}