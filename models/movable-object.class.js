class MovableObject {
    x = 100;
    y = 200;
    img;
    height = 260;
    width = 140;
    currentImage = 0;
    speed = 0.5;
    imageCache = {};
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log("Moving Right");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % this.imagesWalking.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround()) {
               this.y -= this.speedY;
            this.speedY -= this.acceleration; 
            }
            
        }, 1000/25);
    }

    isAboveGround(){
        return this.y < 200;
    }


}