class Ground {
    //characteristics
    constructor(x, y, width, height) {
        //like string concatenation (score)
        var options = {
            isStatic : true
        }
        //"this" acts as a placeholder
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body)
    }

    //functions
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}