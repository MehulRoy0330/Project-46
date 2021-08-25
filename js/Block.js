class Block{
    constructor(x, y){
        var options = {
            restitution: 0.15,
            friction: 0.4,
            density: 0.50
        }
        this.side = 40;
        this.body = Bodies.rectangle(x, y, this.side, this.side, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.image = loadImage("block.png")
        this.Visiblity = 255;
    }
    display(){
        var pos = this.body.position;
        if(this.body.speed < 5){
            push();
            translate(pos.x, pos.y);

            imageMode(CENTER)
            image(this.image, 0, 0, this.side, this.side);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity -= 5;
            tint(255, this.Visiblity);

            imageMode(CENTER)
            image(this.image, pos.x, pos.y, this.side, this.side);
            pop();
        }
    }
    score(){
        if(this.Visiblity < 0  && this.Visiblity > -251.25){
            score++;
        }
    }
}