class Zombie extends MovableObject {

    y = 200;
    height = 150;
    width = 120;
    offsetX = 15;
    initialAttackAnimationCount = 10;
    initialAttackCooldown = 20;
    spawndelay;
    hurtTime = 35;

    imagesWalking = [
        'img/3_enemies_zombie/1_walk/Walk1.png',
        'img/3_enemies_zombie/1_walk/Walk2.png',
        'img/3_enemies_zombie/1_walk/Walk3.png',
        'img/3_enemies_zombie/1_walk/Walk4.png',
        'img/3_enemies_zombie/1_walk/Walk5.png',
        'img/3_enemies_zombie/1_walk/Walk6.png',
    ];
    imagesDead = [
        'img/3_enemies_zombie/2_dead/Dead1.png',
        'img/3_enemies_zombie/2_dead/Dead2.png',
        'img/3_enemies_zombie/2_dead/Dead3.png',
        'img/3_enemies_zombie/2_dead/Dead4.png',
        'img/3_enemies_zombie/2_dead/Dead5.png',
        'img/3_enemies_zombie/2_dead/Dead6.png',
        'img/3_enemies_zombie/2_dead/Dead7.png',
        'img/3_enemies_zombie/2_dead/Dead8.png'
    ];
    imagesHurt = [
        'img/3_enemies_zombie/3_hurt/Idle1.png',
        'img/3_enemies_zombie/3_hurt/Idle2.png',
        'img/3_enemies_zombie/3_hurt/Idle3.png',
        'img/3_enemies_zombie/3_hurt/Idle4.png',
        'img/3_enemies_zombie/3_hurt/Hurt1.png',
        'img/3_enemies_zombie/3_hurt/Hurt2.png',
        'img/3_enemies_zombie/3_hurt/Hurt3.png',
        'img/3_enemies_zombie/3_hurt/Hurt4.png',
        'img/3_enemies_zombie/3_hurt/Hurt5.png'
    ];
    imagesAttack = [
        'img/3_enemies_zombie/4_attack/Attack1.png',
        'img/3_enemies_zombie/4_attack/Attack2.png',
        'img/3_enemies_zombie/4_attack/Attack3.png',
        'img/3_enemies_zombie/4_attack/Attack4.png',
        'img/3_enemies_zombie/4_attack/Attack5.png',
        'img/3_enemies_zombie/4_attack/Attack6.png',
        'img/3_enemies_zombie/4_attack/Attack7.png',
        'img/3_enemies_zombie/4_attack/Attack8.png',
    ];

    attackRange = 25;
    meleeDamage = 15;
    zombieAttack_sound = new Audio('audio/zombieAttack.wav');

    constructor(position) {
        super().loadImage('img/3_enemies_zombie/1_walk/Walk1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesAttack);
        this.spawndelay = Math.random()*10;
        this.x = position * 1000 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 1;
        this.applyGravity();
        this.animate();
    }

    animate() {
        setTimeout(() => {
            setInterval(() => {
                if (!this.isHurt() && !this.isDead()) {
                    this.move();
                }
                this.checkAttackCooldown()
            }, 1000 / 40)

            setInterval(() => {
                if (this.isDead()) {
                    setTimeout(() => {
                        this.width = 190;
                        this.height = 120;
                    }, 800);
                    this.playAnimationOnce(this.imagesDead);
                }
                else if (this.isAttacking()) {
                    playSound(this.zombieAttack_sound);
                    this.playAnimationOnce(this.imagesAttack);
                }
                else if (this.isHurt()) {
                    this.playAnimation(this.imagesHurt);
                }
                else {
                    this.playAnimation(this.imagesWalking);
                }
            }, 120)
        }, 100 * this.spawndelay);
    }
}