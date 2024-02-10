class CoinBar extends DrawableObject {

    coins = 0;
    imagesCoins = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];



    constructor() {
        super();
        this.loadImages(this.imagesCoins);
        this.x = 20;
        this.y = 40;
        this.height = 60;
        this.width = 200;
        this.setPercentage(3);

    }

    setPercentage(coins) {
        this.coins = coins;
        let path = this.imagesCoins[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coins == 10) {
            return 5;
        }
        else if (this.coins > 8) {
            return 4;
        }
        else if (this.coins > 6) {
            return 3;
        }
        else if (this.coins > 4) {
            return 2;
        }
        else if (this.coins > 2) {
            return 1;
        }
        else {
            return 0;
        }
    }

}