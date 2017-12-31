// blobs

class Blob {
    constructor(height, width, weight, x, color) {
        console.log("constructing new blob");
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;

        this.y = 0;
        this.x = x;
        this.velocity_x = 0;
        this.velocity_y = 2.5;
    }
    move() {
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width/2,0,2*Math.PI);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
    }
}

class Padel {
    constructor() {

    }
    rotate() {

    }
    draw() {
        
    }
}