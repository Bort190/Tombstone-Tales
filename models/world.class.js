class World {
    ctx;
    canvas;
    clouds = [new Cloud('img/5_background/layers/4_clouds/1.png'), new Cloud('img/5_background/layers/4_clouds/2.png')];
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    backgroundObjects = [new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0)]


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.character)

        this.addObjectToMap(this.enemies);
        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.backgroundObjects);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}