class Ball{
    constructor(x, y){
        var options = {
            restitution: 1.5,
            friction: 1.0,
            density: 1.2
        }

        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        noStroke();
        fill("#ED1C24")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}