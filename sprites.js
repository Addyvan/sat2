/*
Current classes:
- Blob class for the dots
- Paddle class for the paddles

*/

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
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Paddle {
    constructor(player) {
        this.width = 150;
        this.height = 25;
        this.rotation = 0;
        if (player == 1) {
            this.axis = {
                x: 100,
                y: 400 
            };
            this.color = PLAYER_ONE_COLOR;
        } else {
            if (player == 2) {
                this.axis = {
                    x: 550,
                    y: 400
                };
                this.color = PLAYER_TWO_COLOR;
            } else {
                console.log("Error player must be set to 1 or 2");
            }
        }

    }
    rotateLeft() {
        this.rotation -= 1  * Math.PI / 180;
    }
    rotateRight() {
        this.rotation += 1 * Math.PI / 180;
    }
    draw() {
        // you need .save() and .restore() so that it all doesnt rotate
        ctx.save();
        ctx.translate(this.axis.x+this.width/2,this.axis.y+this.height/2);
        ctx.rotate(this.rotation);
        ctx.fillStyle=this.color;
        ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
    }
}