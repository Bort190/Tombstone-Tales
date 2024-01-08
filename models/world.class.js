class World {
    ctx;
    canvas;
    keyboard;
    clouds = [new Cloud('img/5_background/layers/4_clouds/1.png'), new Cloud('img/5_background/layers/4_clouds/2.png')];
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)
    ]


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character)
        this.addObjectToMap(this.clouds);


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
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x *= -1; 
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if(mo.otherDirection){
            this.ctx.restore();
            mo.x *= -1;
        }
    }
}