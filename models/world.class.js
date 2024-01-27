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
    throwCooldown = 4;
    collectableArray = [];


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
        this.setCollectables();
    }

    setCollectables() {
        for (let i = 0; i < 6; i++) {
            this.collectableArray.push(new Collectable('img/8_coin/1.png', this.collectableIndex));
        }

    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.getCollectable();
            this.checkPlayerInAttackRange();
            this.throwCooldown--;
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) {
                this.character.hit(this.character, 10, 20, 18);
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkMeleeRange() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isNearby(enemy)) {
                this.character.meleeAttack(enemy)
                this.deleteEnemy(enemy, index);
            }
        });
    }


    checkPlayerInAttackRange() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.isNearby(this.character) && !enemy.isDead()) {
                if(!enemy.isAttacking()){
                    enemy.currentImage = 0;
                }
                console.log(enemy.currentImage)
                enemy.speed = 0;
                enemy.attackCooldown--;
               
                enemy.attackAnimationCount = 20

                if (enemy.attackCooldown < 0) {
                    enemy.meleeAttack(this.character);

                }
            }
            else {
                enemy.speed = 0.5;
                enemy.attackCooldown = 40;
            }




            //      console.log(enemy.currentImage)
            //      if(enemy.attackCooldown<0 && enemy.isNearby(this.character)){
            //           enemy.meleeAttack(this.character);
            //          enemy.currentImage = 0;
            //         enemy.attackAnimationCount = 10
            //        enemy.attackCooldown = 40;
            //        enemy.speed = 0.15 + Math.random() * 0.5;
            //  }

        });
    }

    deleteEnemy(enemy, index) {
        if (enemy.isDead() == true) {
            setTimeout(() => {
                this.level.enemies.splice(index, 1);
            }, 3000)
        }
    }


    getCollectable() {
        this.collectableArray.forEach(collectable => {
            if (this.character.isColliding(collectable)) {
                let index = this.collectableArray.indexOf(collectable);
                this.collectableArray.splice(index, 1);
            }
        });
    }

    checkThrowObject() {
        if (this.throwReady() && this.character.weaponCount > 0) {

            if (!this.character.otherDirection) {
                let bone = new ThrowableObject(this.character.x + 100, this.character.y + 100, 1);
                this.throwableObject.push(bone);
                this.throwCooldown = 8;
                this.checkForHit(bone);
            }
            else {
                let bone = new ThrowableObject(this.character.x - 20, this.character.y + 100, -1);
                this.throwableObject.push(bone);
                this.throwCooldown = 8;
                this.checkForHit(bone);
            }
        }

    }

    checkForHit(bone) {
        let deleteCounter = 0;
        setInterval(() => {
            let index = this.throwableObject.indexOf(bone);
            this.level.enemies.forEach((enemy) => {
                if (bone.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
                    bone.hit(enemy, 5, 5, 9)
                    this.throwableObject.splice(index, 1);
                    deleteCounter = 0;
                }
                else if (deleteCounter > 80) {
                    this.throwableObject.splice(index, 1);
                    deleteCounter = 0;
                }
                else {
                    deleteCounter++
                }
            })
        }, 100);

    }

    throwReady() {
        return this.throwCooldown <= 0;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectToMap(this.level.backgroundObjects);
        this.ctx.translate(this.camera_x * 0.8, 0);
        this.addObjectToMap(this.level.backgroundObjects2);
        this.ctx.translate(-this.camera_x * 0.8, 0);
        this.ctx.translate(this.camera_x * 0.9, 0);
        this.addObjectToMap(this.level.backgroundObjects3);
        this.ctx.translate(-this.camera_x * 0.9, 0);


        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects4);
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.collectableArray);




        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);


        this.ctx.translate(-this.camera_x, 0);
        //-----space for fixed objects----//
        this.addToMap(this.statusBar);
        this.addToMap(this.CoinBar);
        this.ctx.translate(this.camera_x, 0);

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
        //mo.drawFrame(this.ctx);

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

