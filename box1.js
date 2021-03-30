class Box {
    //properties 
    //constructor is a function that consists of all the properties or characteristics
    constructor(x, y, width, height) {
        //like string concatenation (score)
        var options = {
            restitution: 0.2
        }
        //this acts as a placeholder
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body)
        this.width = width;
        this.height = height;
    }

    //functions
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop()
    }
}