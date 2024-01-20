class Character extends MovableObject {

    y = 70;
    height = 230;
    width = 160;
    speed = 5;
    world;
    offsetX = 50;
    imagesWalking = [
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_000.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_001.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_002.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_003.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_004.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_005.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_006.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_007.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_008.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_009.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_010.png',
        'img/2_character_pepe/2_walk/0_Reaper_Man_Running_011.png',

    ];

    imagesIdle = [
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_000.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_001.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_002.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_003.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_004.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_005.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_006.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_007.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_008.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_009.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_010.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_011.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_012.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_013.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_014.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_015.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_016.png',
        'img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_017.png'

    ];

    imagesJumping = [
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_000.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_001.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_002.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_003.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_004.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_005.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_006.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_007.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_008.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_009.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_010.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_011.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_012.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_013.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_014.png',
        'img/2_character_pepe/3_jump/0_Reaper_Man_Jump Start_015.png',
    ];

    imagesDead = [
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_000.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_001.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_002.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_003.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_004.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_005.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_006.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_007.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_008.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_009.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_010.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_011.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_012.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_013.png',
        'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_014.png',
    ];
    imagesHurt = [
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_000.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_001.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_002.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_003.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_004.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_005.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_006.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_007.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_008.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_009.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_010.png',
        'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_011.png',
    ];

    walking_sound = new Audio('audio/walking.mp3');
    weaponCount = 5;


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/0_Reaper_Man_Idle_000.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesHurt);
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
            if (this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60);


        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            }
            else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.imagesWalking);
            }
            else{
                this.playAnimation(this.imagesIdle);
            }

        }, 50)
    }
}