class MovableObject {
    x = 100;
    y = 200;
    img;
    height = 260;
    width = 140;

    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }

    moveRight() {
        console.log("Moving Right");
    }

    moveLeft() {

    }



}