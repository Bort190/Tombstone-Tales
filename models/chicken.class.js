class Chicken extends MovableObject {

    y = 200;
    height = 150;
    width = 140;
    imagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk1.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk2.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk3.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk4.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk5.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/Walk6.png',
    ];
    imagesDead = [
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead1.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead2.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead3.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead4.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead5.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead6.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead7.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/Dead8.png'
    ];
    imagesHurt = [
        'img/3_enemies_chicken/chicken_normal/3_hurt/Idle1.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Idle2.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Idle3.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Idle4.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Hurt1.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Hurt2.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Hurt3.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Hurt4.png',
        'img/3_enemies_chicken/chicken_normal/3_hurt/Hurt5.png'
    ];

    attackRange = 30;
    meleeDamage = 50;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/Walk1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.applyGravity();
        this.animate();

    }


    animate() {
        setInterval(() => {
            if (!this.isHurt() && !this.isDead()) {
                this.moveLeft();
            }
            this.otherDirection = true;
            this.checkAttackCooldown()
        }, 1000 / 40)


        setInterval(() => {
            if (this.isDead()) {

                setTimeout(() => {
                    this.width = 190;
                    this.height = 130;
                }, 800);

                this.playAnimationOnce(this.imagesDead, 7);
            }
            else if (this.isHurt()) {
                this.playAnimationOnce(this.imagesHurt, 9);
                console.log(this.currentImage)
            }
            else {
                this.playAnimation(this.imagesWalking);
            }


        }, 100)
    }
}