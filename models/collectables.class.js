class Collectable extends DrawableObject {


    constructor(path, type, size, position) {
        super().loadImage(path);
        this.width = size;
        this.height = size;
        this.offsetY = 10;
        this.offsetX = 10;
        this.x = 500;
        this.randomizePosition(type, position);

    }

    randomizePosition(type, pos) {
        this.x = 600 * pos + Math.random() * 400;

        if (type == 'bone') {
            this.y = 380;

        }
        else {
            this.y = 120 + Math.random() * 75;
        }

    }


}