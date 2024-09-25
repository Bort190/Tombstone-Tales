class EndbossHealthBar extends DrawableObject {

    percentage = 1000;

    imagesHealth = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.imagesHealth);
        this.x = 500;
        this.y = 7;
        this.height = 60;
        this.width = 200;
        this.setPercentage(1000);

    }

    /**
     * sets the percentage of the healthbar
     * @param {*} percentage health in %
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesHealth[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

     /**
     * shows the right picture of the status bar, depending on the percentage
     * @returns the number of the image which should be shown
     */
    resolveImageIndex() {
        if (this.percentage == 1000) {
            return 5;
        }
        else if (this.percentage > 800) {
            return 4;
        }
        else if (this.percentage > 600) {
            return 3;
        }
        else if (this.percentage > 400) {
            return 2;
        }
        else if (this.percentage > 200) {
            return 1;
        }
        else {
            return 0;
        }
    }

}