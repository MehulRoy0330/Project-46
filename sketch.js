const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, wall1, wall2, wall3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2+150, height-50, width-300, 100);

    wall1 = new Ground(75, height/2-120, 150, height-120);
    wall2 = new Ground(width/2, 20, width, 40);
    wall3 = new Ground(width-20, height/2, 40, height);
}

function draw() {
    background("#fff200");
    Engine.update(engine);

    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();
}