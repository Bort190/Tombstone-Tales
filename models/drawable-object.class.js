class DrawableObject {
    x = 0;
    y = 200;
    img;
    height = 260;
    width = 140;
    currentImage = 0;
    imageCache = {};


    /**
     * creates one new image Object and assignes the given path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * creates one new image Object for an array of images and assignes the given path
     * @param {*} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    /**
     * draws an image on the canvas
     * @param {*} ctx 2D context
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * creates a frame arpund the object for testing
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Endboss) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width - this.offsetX, this.height - this.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width - this.offsetX + this.attackRange, this.height);
            ctx.stroke();
        }
    }



}