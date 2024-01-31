class DrawableObject {
    x = 0;
    y = 200;
    img;
    height = 260;
    width = 140;
    currentImage = 0;
    imageCache = {};

 

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width- this.offsetX, this.height - this.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.linewidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width - this.offsetX + this.attackRange, this.height);
	    ctx.stroke();
        }
    }



}