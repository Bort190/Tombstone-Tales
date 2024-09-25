class Character extends MovableObject {

    y = 190;
    x = 100;
    height = 230;
    width = 160;
    speed = 8;
    world;
    offsetX = 40;
    offsetY = 30;
    weaponCount = 3;
    coins = 3;
    attackRange = 75;
    meleeDamage = 200;
    hurtTime = 60;
    imagesWalking = [
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_000.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_001.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_002.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_003.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_004.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_005.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_006.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_007.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_008.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_009.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_010.png',
        'img/2_character_skully/2_walk/0_Reaper_Man_Running_011.png',

    ];

    imagesIdle = [
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_001.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_002.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_000.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_003.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_004.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_005.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_006.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_007.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_008.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_009.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_010.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_011.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_012.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_013.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_014.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_015.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_016.png',
        'img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_017.png'

    ];

    imagesJumping = [
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_000.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_001.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_002.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_003.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_004.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_005.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_006.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_007.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_008.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_009.png'
    ];
    imagesFalling = [
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_010.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_011.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_012.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_013.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_014.png',
        'img/2_character_skully/3_jump/0_Reaper_Man_Jump Start_015.png'
    ];
    imagesMelee = [
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_000.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_001.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_002.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_003.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_004.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_005.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_006.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_007.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_008.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_009.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_010.png',
        'img/2_character_skully/6_melee/0_Reaper_Man_Slashing_011.png',
    ];
    imagesThrowing = [
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_000.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_001.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_002.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_003.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_004.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_005.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_006.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_007.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_008.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_009.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_010.png',
        'img/2_character_skully/7_throwing/0_Reaper_Man_Throwing_011.png',
    ];

    imagesDead = [
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_000.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_001.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_002.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_003.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_004.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_005.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_006.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_007.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_008.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_009.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_010.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_011.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_012.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_013.png',
        'img/2_character_skully/5_dead/0_Reaper_Man_Dying_014.png',
    ];
    imagesHurt = [
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_000.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_001.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_002.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_003.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_004.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_005.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_006.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_007.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_008.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_009.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_010.png',
        'img/2_character_skully/4_hurt/0_Reaper_Man_Hurt_011.png',
    ];
    imagesDash = [
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_000.png',
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_001.png',
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_002.png',
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_003.png',
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_004.png',
        'img/2_character_skully/8_sliding/0_Reaper_Man_Sliding_005.png'
    ];

    walking_sound = new Audio('audio/footsteps.wav');
    attack_sound = new Audio('audio/swoosh.wav');
    dash_sound = new Audio('audio/dash.wav');




    constructor() {
        super().loadImage('img/2_character_skully/1_idle/idle/0_Reaper_Man_Idle_000.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesFalling);
        this.loadImages(this.imagesMelee);
        this.loadImages(this.imagesDash);
        this.loadImages(this.imagesThrowing);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesHurt);
        this.applyGravity();
        this.animate();
        this.walking_sound.playbackRate = 1.4;
    }

     /**
     * animates the character, depending on the action
     */
    animate() {

        setInterval(() => {
            if (!this.isDead()) {
                this.walking_sound.pause();
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    if (!this.isAboveGround()) {
                        playSound(this.walking_sound);
                    }
                }
                if (this.world.keyboard.LEFT && this.x > -620) {
                    this.moveLeft();
                    if (!this.isAboveGround()) {
                        playSound(this.walking_sound);
                    }
                }
                if (this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()) {
                    if (!this.isHurt()) {
                        this.jump();
                    }
                }
                if (this.world.keyboard.MELEE && !this.isAttacking() && !this.isAboveGround()) {
                    this.currentImage = 0;
                    this.attackAnimationCount = 20;
                    playSound(this.attack_sound);
                    this.world.checkMeleeRange();
                }
                if (this.world.keyboard.DASH && !this.isDashing() && this.dashCooldown < 0 && this.coins > 0) {
                    playSound(this.dash_sound);
                    this.coins--;
                    world.coinBar.setPercentage(this.coins);
                    this.dash();
                }
                if (this.world.keyboard.THROW) {
                    this.world.checkThrowObject();
                }
                this.world.camera_x = -this.x + 100;
                this.checkAttackCooldown();
            }
        }, 1000 / 50);


        setInterval(() => {

            if (this.isDead()) {
                this.playAnimationOnce(this.imagesDead);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            }
            else if (this.isAboveGround()) {

                if (this.speedY > 0) {
                    this.playAnimationOnce(this.imagesJumping);
                }
                else {
                    this.playAnimationOnce(this.imagesFalling);
                }
            }
            else if (this.isAttacking()) {
                this.playAnimationOnce(this.imagesMelee);
            }
            else if (this.isDashing()) {
                this.playAnimationOnce(this.imagesDash);
            }
            else if (this.world.keyboard.THROW) {
                this.playAnimationOnce(this.imagesThrowing);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.imagesWalking);
            }
            else {
                this.playAnimation(this.imagesIdle);
            }

        }, 1000 / 30)
    }
}