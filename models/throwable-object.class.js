class ThrowableObject extends MovableObject {
    speedX = 12
    rightDirection;


    imagesRotation = [
        'img/6_bones/bottle_rotation/1.png',
        'img/6_bones/bottle_rotation/1.png',
        'img/6_bones/bottle_rotation/2.png',
        'img/6_bones/bottle_rotation/2.png',
        'img/6_bones/bottle_rotation/3.png',
        'img/6_bones/bottle_rotation/3.png',
        'img/6_bones/bottle_rotation/4.png',
        'img/6_bones/bottle_rotation/4.png'

    ];

    constructor(x, y, direction) {
        super();
        this.x = x;
        this.y = y;
        this.speedX = direction * this.speedX;
        this.width = 50;
        this.height = 60;
        this.loadImage("img/6_bones/bottle_rotation/1.png");
        this.loadImages(this.imagesRotation);
        this.throw();
    }

    throw() {
        world.character.weaponCount--;
        this.speedY = 22;
        this.applyGravity()
        setInterval(() => {
            this.x += this.speedX;
            this.playAnimation(this.imagesRotation);
        }, 1000/30);


    }
}