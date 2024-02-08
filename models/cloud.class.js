class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;



    constructor(imagePath, speed) {
        super().loadImage(imagePath);
        this.x = Math.random() * 3500;
        this.speed = speed;
        this.moveClouds();


    }

    moveClouds() {
        setInterval(() => {
            this.moveLeft();
        }, 150);

    }

}