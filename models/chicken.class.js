class Chicken extends MovableObject {

    y = 300;
    height = 130;
    width = 100;
    imagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk1.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk2.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk3.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk4.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk5.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk6.png',
    ];

    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.imagesWalking);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = true;
        }, 1000 / 60)


        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 100)
    }
}