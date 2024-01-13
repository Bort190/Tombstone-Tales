class Character extends MovableObject {

    y = 70;
    height = 250;
    width = 130;
    speed = 5;
    world;
    imagesWalking = ['img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'];
    walking_sound = new Audio('audio/walking.mp3');


    constructor() {
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.loadImages(this.imagesWalking);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -620) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;
            console.log(this.x);
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.imagesWalking);
            }
        }, 50)
    }


    jump() {

    }
}