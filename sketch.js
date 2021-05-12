const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var ground;

function setup(){
    var canvas = createCanvas(1025,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    // box3 = new Box(200,200,50,150);
    
    ground = new Ground(100,590,1000,10)

}

function draw(){
    background("white");
    Engine.update(engine);

    box1.display();
    box2.display();
    // box3.display();


    ground.display();
   
}