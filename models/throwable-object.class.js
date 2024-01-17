class ThrowableObject extends MovableObject {
    speedX = 5

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 60;
        this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.throw();
    }

    throw() {

        this.speedY = 30; 
        this.applyGravity()
        setInterval(() => {
            this.x += this.speedX;
        }, 1000 / 60);


    }
}