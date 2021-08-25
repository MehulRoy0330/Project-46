class Ball{
    constructor(x, y){
        var options = {
            restitution: 1.12,
            friction: 1.0,
            density: 2.0
        }

        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        noStroke();
        fill("#ED1C24")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}