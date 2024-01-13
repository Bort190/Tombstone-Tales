class Character extends MovableObject {

    y = 70;
    height = 250;
    width = 130;
    speed = 5;
    world;
    imagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    imagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    walking_sound = new Audio('audio/walking.mp3');


    constructor() {
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -620) {
                this.moveLeft();
                this.walking_sound.play();
            }
            if(this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()){
                this.jump();               
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            }
            else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.imagesWalking);
                }
            }
        }, 50)
    }
}