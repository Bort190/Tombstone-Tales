class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    statusBar = new StatusBar();
    CoinBar = new CoinBar();
    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObject() {
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject(this.character.x +100, this.character.y +100);
            this.throwableObject.push(bottle)
        }

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.throwableObject);

        this.ctx.translate(-this.camera_x, 0);
        //-----space for fixed objects----//
        this.addToMap(this.statusBar);
        this.addToMap(this.CoinBar);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.enemies);
        this.addToMap(this.character);


        this.ctx.translate(-this.camera_x, 0);


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
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx); //entspricht drawImage() aus drawableObject
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x *= -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x *= -1;
    }
}