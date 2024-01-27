
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
    attackAnimationCount = 0;
    meleeDamage = 10;
    animationFinished = false;
    attackCooldown = 0;


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i < images.length -1) {
            this.currentImage++;
            this.animationFinished = false
        }
        else if(i == images.length -1){
            this.animationFinished = true
        }
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 30;
        if (!this.isAboveGround()) {
            this.currentImage = 0;
        }
    }
    meleeAttack(enemy) {
        this.hit(enemy, this.meleeDamage, 20, 18);
    }

    hit(obj, damage, knockbackTime, knockbackHeight) {
        if (!obj.isHurt()) {
            obj.currentImage = 0;
            obj.energy -= damage;
            obj.animationFinished = false;
            if (obj.energy <= 0) {
                obj.energy = 0;
            } else {
                obj.lastHit = new Date().getTime();
            }
            obj.knockback(knockbackTime, knockbackHeight);
        }
    }
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }



    knockback(time, height) {
        let knockbackTime = time;
        this.speedY = height;
        setInterval(() => {
            if (knockbackTime > 0) {
                if (this.otherDirection) { this.x += 6; }
                else { this.x -= 6; }
                knockbackTime--;
            }
        }, 1000 / 30);
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 2;
    }

    isDead() {
        return this.energy <= 0;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y + this.height < 440;
        }

    }

    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x &&
            this.x <= (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height)
        //&& obj.onCollisionCourse;  Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. 
        //Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    isNearby(obj) { //umbenennen, damit die Funktion deutlicher wird
        return (this.x + this.width - this.offsetX + this.attackRange) >= obj.x &&
            (this.x - this.attackRange) <= (obj.x + obj.width);
    }

    checkAttackCooldown() {
        this.attackAnimationCount--;
        this.attackCooldown--;
    }

    isAttacking() {
        return this.attackAnimationCount > 0;
    }




}
