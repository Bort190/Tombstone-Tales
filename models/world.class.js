class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    endbossHealthBar = new EndbossHealthBar();
    endbossImage = new Image();
    coinBarImage = new Image();
    boneImage = new Image();
    throwableObject = [];
    throwCooldown = 4;
    collectableArray = [];
    ammoArray = [];
    knockbackLeft = false;

    ambient_sound = new Audio('audio/ambient.wav');
    throw_sound = new Audio('audio/throw.wav');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.coinBarImage.src = 'img/8_coin/1.png';
        this.boneImage.src = 'img/6_bones/bottle_rotation/1.png';
        this.endbossImage.src = 'img/4_enemie_boss_chicken/6_idle/Wraith_01_Idle_000.png'
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.setCollectables();
        this.setAmmo();
    }

    setCollectables() {
        for (let i = 0; i < 6; i++) {
            this.collectableArray.push(new Collectable('img/8_coin/1.png', 'skull', 80));
        }
    }

    setAmmo() {
        for (let i = 0; i < 6; i++) {
            this.ammoArray.push(new Collectable('img/6_bones/bottle_rotation/1.png', 'bone', 65));
        }
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.getCollectable();
            this.checkPlayerInAttackRange();
            this.throwCooldown--;
            playSound(this.ambient_sound);
            if (this.character.isDead()) {
                setInterval(() => {
                    window.location = 'endscreen.html';
                }, 2000);
            }
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDashing()) {
                this.character.hit(this.character, 10, 20, 18);
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkMeleeRange() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isNearby(enemy) && !enemy.isDead()) {
                this.knockbackLeft = this.isEnemyRight(this.character.x + this.character.width / 2, enemy.x + enemy.width / 2);
                this.character.meleeAttack(enemy);
                this.deleteEnemy(enemy, index);
                if (enemy instanceof Endboss) {
                    this.endbossHealthBar.setPercentage(enemy.energy)
                }
            }
        });
    }


    checkPlayerInAttackRange() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.isNearby(this.character) && !enemy.isDead() && !enemy.isHurt()) {
                if (!enemy.isAttacking()) {
                    enemy.currentImage = 0;
                }
                enemy.speed = 0;
                enemy.attackAnimationCount = enemy.initialAttackAnimationCount;
                if (enemy.attackCooldown < 0 && !this.character.isDashing() && !this.character.isHurt()) {
                    this.enemyAttackOnPlayer(enemy)
                }
            }
            else {
                enemy.speed = 0.15 + Math.random() * 1;
                enemy.attackCooldown = enemy.initialAttackCooldown;
            }
        });
    }

    enemyAttackOnPlayer(enemy) {
        this.knockbackLeft = this.isEnemyRight(enemy.x + enemy.width / 2, this.character.x + this.character.width / 2);
        enemy.meleeAttack(this.character);
        this.statusBar.setPercentage(this.character.energy);
        enemy.attackCooldown = enemy.initialAttackCooldown;
    }

    isEnemyRight(enemyPosition, characterPosition) {
        return enemyPosition > characterPosition;
    }


    deleteEnemy(enemy, index) {
        if (enemy.isDead() == true) {
            setTimeout(() => {
                this.level.enemies.splice(index, 1);
            }, 2000)
        }
    }


    getCollectable() {
        this.collectableArray.forEach(collectable => {
            if (this.character.isColliding(collectable)) {
                let index = this.collectableArray.indexOf(collectable);
                this.collectableArray.splice(index, 1);
                this.character.coins++;
                this.coinBar.setPercentage(this.character.coins);
            }
        });
        this.ammoArray.forEach(ammo => {
            if (this.character.isColliding(ammo)) {
                let index = this.ammoArray.indexOf(ammo);
                this.ammoArray.splice(index, 1);
                this.character.weaponCount++;
            }
        });

    }

    checkThrowObject() {
        if (this.throwReady() && this.character.weaponCount > 0) {
            if (!this.character.otherDirection) {
                let bone = new ThrowableObject(this.character.x + 100, this.character.y + 100, 1);
                this.hitWithThrowingObject(bone)
            }
            else {
                let bone = new ThrowableObject(this.character.x - 20, this.character.y + 100, -1);
                this.hitWithThrowingObject(bone)
            }
        }
    }

    hitWithThrowingObject(bone) {
        playSound(this.throw_sound);
        this.throwableObject.push(bone);
        this.throwCooldown = 8;
        this.checkForHit(bone);
    }

    checkForHit(bone) {
        let deleteCounter = 0;
        setInterval(() => {
            let index = this.throwableObject.indexOf(bone);
            this.level.enemies.forEach((enemy) => {
                this.damageEnemywithBone(index, bone, enemy, deleteCounter);
            })
        }, 100);
    }

    damageEnemywithBone(index, bone, enemy, deleteCounter) {
        if (bone.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
            bone.hit(enemy, 5, 5, 9)
            this.knockbackLeft = this.isEnemyRight(this.character.x + this.character.width / 2, enemy.x + enemy.width / 2);
            this.deleteThrowableObject(index, deleteCounter)
        }
        else if (deleteCounter > 80) {
            this.deleteThrowableObject(index, deleteCounter)
        }
        else {
            deleteCounter++
        }
    }

    deleteThrowableObject(index, deleteCounter) {
        this.throwableObject.splice(index, 1);
        deleteCounter = 0;
    }


    throwReady() {
        return this.throwCooldown <= 0;
    }

    setParralaxEffect() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectToMap(this.level.backgroundObjects);
        this.ctx.translate(this.camera_x * 0.8, 0);
        this.addObjectToMap(this.level.backgroundObjects2);
        this.ctx.translate(-this.camera_x * 0.8, 0);
        this.ctx.translate(this.camera_x * 0.9, 0);
        this.addObjectToMap(this.level.backgroundObjects3);
        this.ctx.translate(-this.camera_x * 0.9, 0);
    }

    setFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.ctx.drawImage(this.coinBarImage, 7, 40, 70, 70);
        this.ctx.drawImage(this.boneImage, 17, 95, 50, 50);
        this.ctx.font = "bold 35px Showthat";
        this.ctx.strokeStyle = "darkred";
        this.ctx.strokeText("x " + this.character.weaponCount, 75, 135);
        if (this.character.x > 2800) {
            this.addToMap(this.endbossHealthBar);
            this.ctx.drawImage(this.endbossImage, 440, 0, 150, 90);
        }
        this.ctx.translate(this.camera_x, 0);
    }

    draw() {
        this.setParralaxEffect();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects4);
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.collectableArray);
        this.addObjectToMap(this.ammoArray);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);
        this.setFixedObjects();
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
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);

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

