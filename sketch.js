const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, wall1, wall2, wall3;

var placeholder1, placeholder2;

var pyramid1 = [], pyramid2 = [];

var ball;

var sling1, sling2;

var gameState = "pre-launch";

var score = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2+150, height-50, width-300, 100);

    wall1 = new Ground(75, height/2-120, 150, height-120);
    wall2 = new Ground(width/2, 20, width, 40);
    wall3 = new Ground(width-20, height/2, 40, height);

    placeholder1 = new Ground(width/2+50, height/2+100, 250, 10);
    placeholder2 = new Ground(width/2+350, height/2, 200, 10)

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

    x = width/2+305;
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

    ball = new Ball(width/2-200, height-70);

    sling1 = new Slingshot(ball.body, {x: 145, y: height/2+125});
    sling2 = new Slingshot(ball.body, {x:width/2-340, y: height-95});
}

function draw() {
    background("#fff200");

    text("Shoot the ball to demolish the pyramids!!", width/2-60, height/2+200);

    noStroke();
    fill("black");
    textSize(18);
    text("Score: "+score, width-150, 100);

    Engine.update(engine);

    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();

    placeholder1.display();
    placeholder2.display();

    for(var i = 0; i < pyramid1.length; i++){
        pyramid1[i].display();
        pyramid1[i].score();
    }
    for(var i = 0; i < pyramid2.length; i++){
        pyramid2[i].display();
        pyramid2[i].score();
    }

    ball.display();

    sling1.display();
    sling2.display();

}

function mouseDragged(){
    if(gameState === "pre-launch"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling1.fly();
    sling2.fly();
    gameState = "launched";
}