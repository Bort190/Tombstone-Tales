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
    gravestoneImage = new Image();
    throwableObject = [];
    throwCooldown = 4;
    collectableArray = [];
    ammoArray = [];
    knockbackLeft = false;
    throwDeleteCounter = 0;


    ambient_sound = new Audio('audio/ambient.wav');
    throw_sound = new Audio('audio/throw.wav');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.coinBarImage.src = 'img/8_coin/1.png';
        this.boneImage.src = 'img/6_bones/bottle_rotation/1.png';
        this.endbossImage.src = 'img/4_enemie_boss/6_idle/Wraith_01_Idle_000.png'
        this.gravestoneImage.src = 'img/mobileButtons/gravestone2.png'
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * sets the character, the collectables and the ammo in the world
     */
    setWorld() {
        this.character.world = this;
        this.setCollectables();
        this.setAmmo();
        this.level.enemies[3].animate();
    }

    /**
     * sets collectables in the collecable array
     */
    setCollectables() {
        for (let i = 0; i < 6; i++) {
            this.collectableArray.push(new Collectable('img/8_coin/1.png', 'skull', 80, i));
        }
    }

    /**
   * sets ammo in the ammo array
   */
    setAmmo() {
        for (let i = 0; i < 6; i++) {
            this.ammoArray.push(new Collectable('img/6_bones/bottle_rotation/1.png', 'bone', 65, i));
        }
    }

    /**
     * sets an interval to check if the character is colliding, attacking or collecting something and reduces the throwcooldown variable
     */
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

    /**
     * checks for collisions with another object. when colliding, knockbacks the player or the enemy and reduces its energy
     */
    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isDashing()) {
                this.knockbackLeft = this.isEnemyRight(enemy.x + enemy.width / 2, this.character.x + this.character.width / 2);
                this.character.hit(this.character, 10, 20, 18);
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * checks if an enemy is in melee range and attacks the enemy, if its in range. knockbacks and deletes the enemy if its hit or defeated
     */
    checkMeleeRange() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isNearby(enemy) && !enemy.isDead()) {
                this.knockbackLeft = this.isEnemyRight(this.character.x + this.character.width / 2, enemy.x + enemy.width / 2);
                this.character.meleeAttack(enemy);
                this.deleteEnemy(enemy);
                if (enemy instanceof Endboss) {
                    this.endbossHealthBar.setPercentage(enemy.energy)
                }
            }
        });
    }


    /**
     * checks if the player is in attack range of the enemy and hits the player
     */
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

    /**
     * triggers an enemy attack on the player
     * @param {*} enemy the player 
     */
    enemyAttackOnPlayer(enemy) {
        this.knockbackLeft = this.isEnemyRight(enemy.x + enemy.width / 2, this.character.x + this.character.width / 2);
        enemy.meleeAttack(this.character);
        this.statusBar.setPercentage(this.character.energy);
        enemy.attackCooldown = enemy.initialAttackCooldown;
    }

    /**
     * checks the position of enemy and player, which one is on the left or right side
     * @param {*} enemyPosition 
     * @param {*} characterPosition 
     * @returns 
     */
    isEnemyRight(enemyPosition, characterPosition) {
        return enemyPosition > characterPosition;
    }


    /**
     * deletes the enemy object. If the endboss is defeated, the window switches to the winscreen
     * @param {*} enemy 
     */
    deleteEnemy(enemy) {
        if (enemy.isDead() == true) {
            setTimeout(() => {
                let index = this.level.enemies.indexOf(enemy);
                this.level.enemies.splice(index, 1);
                if (enemy instanceof Endboss) {
                    setInterval(() => {
                        window.location = 'winscreen.html';
                    }, 2000);
                }
            }, 2000)
        }
    }


    /**
     * gets coins or bones as collectables and adds them to its array
     */
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
    /**
     * creates a new throwable object left or right from the player and checks for hits
     */
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

    /**
     * checks if throwable object has hit an enemy
     * @param {*} obj throwable object
     */
    hitWithThrowingObject(obj) {
        playSound(this.throw_sound);
        this.throwDeleteCounter = 0;
        this.throwableObject.push(obj);
        let index = this.throwableObject.indexOf(obj);
        this.throwCooldown = 10;
        this.checkForHit(this.throwableObject[index], index);
    }

    /**
      * checks if throwable object has hit an enemy
      */
    checkForHit(obj, index) {
        let throwInterval = setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                this.damageEnemywithBone(obj, enemy, index, throwInterval);
            })
        }, 100);
    }

    /**
     * if enemy is hit, damages the enemy
     * @param {*} obj throwable object
     * @param {*} enemy enemy object
     * @param {*} index index of throwable object in the array
     * @param {*} throwInterval interval in which its checking for a hit
     */
    damageEnemywithBone(obj, enemy, index, throwInterval) {

        if (obj.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
            obj.hit(enemy, 75, 5, 9)
            this.knockbackLeft = this.isEnemyRight(this.character.x + this.character.width / 2, enemy.x + enemy.width / 2);
            this.deleteThrowableObject(index, throwInterval)
            this.deleteEnemy(enemy);
        }
        else if (this.throwDeleteCounter > 40) {
            this.deleteThrowableObject(index, throwInterval)
        }
        else {
            this.throwDeleteCounter++;
        }
    }

    /**
     * deletes throwable object
     * @param {*} index index of throwable object in the array
     * @param {*} throwInterval interval in which its checking for a hit
     */
    deleteThrowableObject(index, throwInterval) {
        this.throwableObject.splice(index, 1);
        clearInterval(throwInterval);
        this.throwDeleteCounter = 0;
    }


    /**
     * checks if throwable object is ready
     * @returns true if ready
     */
    throwReady() {
        return this.throwCooldown <= 0;
    }

    /**
     * adds background images to the canvas to create a parralax effect
     */
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

    /**
     * sets fixed images to the canvas
     */
    setFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.ctx.drawImage(this.coinBarImage, 7, 40, 70, 70);
        this.ctx.drawImage(this.boneImage, 17, 99, 50, 50);
        this.ctx.drawImage(this.gravestoneImage, 17, 9, 45, 45);
        this.ctx.font = "bold 35px Showthat";
        this.ctx.strokeStyle = "darkred";
        this.ctx.strokeText("x " + this.character.weaponCount, 75, 135);
        if (this.character.x > 2800) {
            this.addToMap(this.endbossHealthBar);
            this.ctx.drawImage(this.endbossImage, 440, 0, 150, 90);
        }
        this.ctx.translate(this.camera_x, 0);
    }

    /**
     * draws the images of all objects on the canvas
     */
    draw() {
        this.setParralaxEffect();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects4);
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.collectableArray);
        this.addObjectToMap(this.ammoArray);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.ctx.translate(this.camera_x * 0.15, 0);
        this.addObjectToMap(this.level.backgroundObjects5);
        this.ctx.translate(-this.camera_x * 0.15, 0);
        this.setFixedObjects();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    /**
     * adds object to the canvas
     */
    addObjectToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * adds object to the canvas, whether its facing left or right
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
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

