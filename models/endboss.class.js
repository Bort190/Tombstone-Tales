class Endboss extends MovableObject {

    y = 40;
    height = 450;
    width = 550;
    energy = 1000;
    offsetX = 200;
    offsetY = 50;
    initialAttackAnimationCount = 7;
    initialAttackCooldown = 10;
    hurtTime = 20;

    imagesIdle = [
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_000.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_001.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_002.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_003.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_004.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_005.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_006.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_007.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_008.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_009.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_010.png',
        'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_011.png'
    ];
    imagesAttack = [
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_000.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_001.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_002.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_003.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_004.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_005.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_006.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_007.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_008.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_009.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_010.png',
        'img/4_enemie_boss_chicken/3_attack/Wraith_01_Attack_011.png'
    ];
    imagesHurt = [
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_000.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_001.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_002.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_003.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_004.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_005.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_006.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_007.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_008.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_009.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_010.png',
        'img/4_enemie_boss_chicken/4_hurt/Wraith_01_Hurt_011.png'
    ];

    constructor() {
        super().loadImage(this.imagesIdle[0]);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.x = 3000;
        this.animate();
	this.applyGravity();
        this.otherDirection = true;

    }

    animate() {
        setInterval(() => {
	    this.checkAttackCooldown()
            if(this.isHurt()){
                this.playAnimationOnce(this.imagesHurt);  

}
	    else if(this.isAttacking()){
                this.playAnimationOnce(this.imagesAttack);
            

            }
        else{
		this.playAnimation(this.imagesIdle);
	    }
	        
        }, 120)
    }
}