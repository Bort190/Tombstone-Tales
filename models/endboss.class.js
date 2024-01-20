class Endboss extends MovableObject {

    y = 20;
    height = 450;
    width = 550;

    imagesWalking = [
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_000.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_001.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_002.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_003.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_004.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_005.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_006.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_007.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_008.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_009.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_010.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_011.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_012.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_013.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_014.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_015.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_016.png',
        'img/4_enemie_boss_chicken/2_alert/Wraith_01_Casting Spells_017.png',
    ];

    constructor() {
        super().loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.x = 700;
        this.animate();
        this.otherDirection = true;

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 80)
    }
}