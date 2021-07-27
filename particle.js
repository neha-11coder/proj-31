class Particle{

    constructor(){
    var options={
        restitution: 1,
        friction: 0,
        isStatic:false
    
    }
    this.body=Bodies.circle(random(0,400),random(0,500),10,options)
    this.color=color(random(0,255),random(0,255),random(0,255))
    this.radius=10;
    World.add(world,this.body);
    
    }
    display(){
    ellipseMode(RADIUS);
    push ();
    translate (this.body.position.x,this.body.position.y);
    fill (this.color);
    ellipse(0,0,this.radius,this.radius);
    pop ();
    }
}