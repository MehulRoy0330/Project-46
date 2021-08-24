const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, wall1, wall2, wall3;

var placeholder1, placeholder2;

var pyramid1 = [], pyramid2 = [];

var block;

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2+150, height-50, width-300, 100);

    wall1 = new Ground(75, height/2-120, 150, height-120);
    wall2 = new Ground(width/2, 20, width, 40);
    wall3 = new Ground(width-20, height/2, 40, height);

    placeholder1 = new Ground(width/2+50, height/2+100, 250, 10);
    placeholder2 = new Ground(width/2+350, height/2, 200, 10);

    //block = new Block(width/2+290, height/2-5);

    var x = width/2-30;
    var y = height/2+80;
    var newX = x;
    for(var i = 5; i >= 1; i--){
        x = newX;
        for(var j = 1; j <= i; j++){
            pyramid1.push(new Block(x, y));
            x += 40;
        }
        y -= 40;
        newX += 20;
    }

    x = width/2+290;
    y = height/2-5;
    newX = x;
    for(var i = 3; i >= 1; i--){
        x = newX;
        for(var j = 1; j <= i; j++){
            pyramid2.push(new Block(x, y));
            x += 40;
        }
        y -= 60;
        newX += 20;
    }

}

function draw() {
    background("#fff200");
    Engine.update(engine);

    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();

    placeholder1.display();
    placeholder2.display();

    //block.display();

    
    for(var i = 0; i < pyramid1.length; i++){
        pyramid1[i].display();
    }
    for(var i = 0; i < pyramid2.length; i++){
        pyramid2[i].display();
    }
}