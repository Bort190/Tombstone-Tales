class Endboss extends MovableObject {

    y = 70;
    height = 450;
    width = 550;
    energy = 1000;
    offsetX = 200;
    offsetY = 50;
    speed = 0.1;
    initialAttackAnimationCount = 4;
    initialAttackCooldown = 7;
    hurtTime = 15;
    meleeDamage = 20;
    firstContact = true;
    boss_attack_sound = new Audio('audio/bossAttack.wav');
    boss_taunt_sound = new Audio('audio/bossTaunt.wav');

    imagesIdle = [
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_000.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_001.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_002.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_003.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_004.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_005.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_006.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_007.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_008.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_009.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_010.png',
        'img/4_enemie_boss/6_idle/Wraith_01_Idle_011.png'
    ];
    imagesAttack = [
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_000.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_001.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_002.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_003.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_004.png',
        // 'img/4_enemie_boss/3_attack/Wraith_01_Attack_005.png',
        // 'img/4_enemie_boss/3_attack/Wraith_01_Attack_006.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_007.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_008.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_009.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_010.png',
        'img/4_enemie_boss/3_attack/Wraith_01_Attack_011.png'
    ];
    imagesHurt = [
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_000.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_001.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_002.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_003.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_004.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_005.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_006.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_007.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_008.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_009.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_010.png',
        'img/4_enemie_boss/4_hurt/Wraith_01_Hurt_011.png'
    ];
    imagesTaunt = [
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_000.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_001.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_002.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_003.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_004.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_005.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_006.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_007.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_008.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_009.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_010.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_011.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_012.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_013.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_014.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_015.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_016.png',
        'img/4_enemie_boss/2_alert/Wraith_01_Taunt_017.png',
    ];
    imagesDead = [
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_000.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_001.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_002.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_003.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_004.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_005.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_006.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_007.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_008.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_009.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_010.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_011.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_012.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_013.png',
        'img/4_enemie_boss/5_dead/Wraith_01_Dying_014.png',
    ];

    constructor() {
        super().loadImage(this.imagesIdle[0]);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesTaunt);
        this.loadImages(this.imagesDead);
        this.x = 3000;
        this.applyGravity();
        this.otherDirection = true;
    }

    /**
     * animates the endboss, depending on the action
     */
    animate() {
        setInterval(() => {
            this.checkAttackCooldown()
            this.move();
            if (this.isDead()) {
                this.y = this.y - 2;
                this.playAnimationOnce(this.imagesDead);
            }
            else if (this.isHurt()) {
                this.playAnimationOnce(this.imagesHurt);
            }
            else if (this.isAttacking()) {
                this.playAnimationOnce(this.imagesAttack);
            }
            else if (this.imagesTaunt && world.character.x > 2800) {
                this.taunt();
            }
            else {
                this.playAnimation(this.imagesIdle);
            }
        }, 120)
    }
    /**
     * lets enboss taunt once
     */
    taunt() {
        this.playAnimation(this.imagesTaunt);
        playSound(this.boss_taunt_sound);
        setTimeout(() => {
            this.imagesTaunt = false;
        }, 1000);

    }

}