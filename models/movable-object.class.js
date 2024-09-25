
class MovableObject extends DrawableObject {
    speed = 0.5;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    offsetX = 0;
    offsetY = 0;
    energy = 100;
    lastHit = 0;
    attackRange = 50;
    meleeDamage = 10;
    initialAttackAnimationCount = 20;
    initialAttackCooldown = 10;
    attackCooldown = 0;
    attackAnimationCount = 0;
    dashLength = 0;
    dashCooldown = 0;
    hitting_sound = new Audio('audio/hitting.wav');


    /**
     *  plays the animation of an object endlessly by showing one frame after another
     * @param {*} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    /**
     *  plays the animation of an object once by showing one frame after another
     * @param {*} images 
     */
    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i < images.length - 1) {
            this.currentImage++;
        }
        else if (i == images.length - 1) {
        }
    }

    /**
     * moves object left or right
     */
    move() {
        if (this.x + this.width / 2 > world?.character.x) {
            this.moveLeft()
        }
        else {
            this.moveRight()
        }
    }
    /**
    * moves object right
    */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
    * moves object left 
    */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }
    /**
     * lets the object jump
     */
    jump() {
        this.speedY = 30;
        if (!this.isAboveGround()) {
            this.currentImage = 0;
        }
    }
    /**
     * lets the object move fast forward
     */
    dash() {
        this.currentImage = 0;
        this.dashLength = 15;
        const dashInterval = setInterval(() => {
            if (this.dashLength > 0) {
                if (!this.otherDirection) { this.x += 20; }
                else { this.x -= 20; }
                this.dashLength--;
            }
            else {
                this.dashCooldown = 100;
                clearInterval(dashInterval);
            }
        }, 1000 / 60);

    }

    /**
     * checks if object is currently dashing
     */
    isDashing() {
        return this.dashLength > 0;
    }

    /**
     * attacs an enemy with melee attack
     * @param {*} enemy enemy object
     */
    meleeAttack(enemy) {

        if (enemy instanceof Endboss) {
            this.hit(enemy, this.meleeDamage, 0, 4);
        }
        else {
            this.hit(enemy, this.meleeDamage, 20, 18);
        }
    }

    /**
     * hits, damages and knockbacks enemy object
     * @param {*} obj enemy object
     * @param {*} damage damage dealt
     * @param {*} knockbackTime time of knockback
     * @param {*} knockbackHeight height of knockback
     */
    hit(obj, damage, knockbackTime, knockbackHeight) {
        playSound(this.hitting_sound);
        if (!obj.isHurt()) {
            obj.currentImage = 0;
            obj.energy -= damage;
            if (obj.energy <= 0) {
                obj.energy = 0;
            } else {
                obj.lastHit = obj.hurtTime;
            }
            obj.knockback(knockbackTime, knockbackHeight);
        }
    }

    /**
     * knockbacks enemy object
     * @param {*} time time of knockback
     * @param {*} height height of knockback
     */
    knockback(time, height) {
        let knockbackTime = time;
        this.speedY = height;
        const knockbackInterval = setInterval(() => {
            if (knockbackTime > 0) {
                if (!world.knockbackLeft) { this.x += 6; }
                else { this.x -= 6; }
                knockbackTime--;
            }
            else {
                clearInterval(knockbackInterval)
            }
        }, 1000 / 30);
    }

    /**
     * applies gravity on an object if its in the air
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                if (this.y + this.height - this.offsetY > 440 && !(this instanceof ThrowableObject)) {
                    this.y = 440 - this.height + this.offsetY
                }
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    /**
     * checks if object is hurt
     * @returns 
     */
    isHurt() {
        return this.lastHit > 0;
    }
    /**
     * checks if object is dead
     * @returns 
     */
    isDead() {
        return this.energy <= 0;
    }
    /**
     * checks if object is above the ground
     * @returns 
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y + this.height - this.offsetY < 440;
        }
    }
    /**
     * checks if object is colliding with another object
     * @param {*} obj other object
     * @returns 
     */
    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x + obj.offsetX &&
            this.x + this.offsetX <= (obj.x - obj.offsetX + obj.width) &&
            (this.y - this.offsetY + this.height) >= obj.y + obj.offsetY &&
            (this.y + this.offsetY) <= (obj.y + obj.height - obj.offsetY)
    }

    /**
     * checks if an object is in attack range
     * @param {*} obj 
     * @returns 
     */
    isNearby(obj) {
        return (this.x + this.width - this.offsetX + this.attackRange) >= obj.x + obj.offsetX &&
            (this.x + this.offsetX - this.attackRange) <= (obj.x + obj.width - obj.offsetX);
    }

    /**
     * counts down the cooldown times
     */
    checkAttackCooldown() {
        this.attackAnimationCount--;
        this.attackCooldown--;
        this.dashCooldown--;
        this.lastHit--;
    }

    /**
     * checks if something is attacking
     */
    isAttacking() {
        return this.attackAnimationCount > 0;
    }
}
