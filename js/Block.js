class Block{
    constructor(x, y){
        var options = {
            restitution: 0.15,
            friction: 0.7,
            density: 6.0
        }
        this.side = 40;
        this.body = Bodies.rectangle(x, y, this.side, this.side, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("#00A2E8");
        rect(pos.x, pos.y, this.side, this.side);
    }
}