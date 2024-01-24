
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
    attackCooldown = 0;
    meleeDamage = 100;


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images, lastImage) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i < lastImage) {
            this.currentImage++;
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
        this.speedY = 25;
        if (!this.isAboveGround()) {
            this.currentImage = 0;
        }
    }
    meleeAttack(enemy) {
        this.attackCooldown = 2;
        this.currentImage = 0;
        this.hit(enemy, this.meleeDamage, 20, 18);
    }

    hit(obj, damage, knockbackTime, knocbackHeight) {
        if (!obj.isHurt()) {
            obj.energy -= damage;
            if (obj.energy <= 0) {
                obj.energy = 0;
                obj.currentImage = 0;
            } else {
                obj.lastHit = new Date().getTime();
            }
            obj.knockback(knockbackTime, knocbackHeight);
        }
    }
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
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
        setInterval(() => {
            this.attackCooldown--;

        }, 1000)
    }

    



}
