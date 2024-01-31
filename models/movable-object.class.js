
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
    dashLength = 10;


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
        }
        else if(i == images.length -1){
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

    dash() {

	const dashInterval = setInterval(()=>{
		if(this.dashLength > 0){
			this.x += 20;
			this.dashLength--;
			  }
		else{	
			this.dashLength = 10;
			clearInterval(dashing);
		}
	}, 30);

}


    meleeAttack(enemy) {
if(enemy instanceof Endboss){
 this.hit(enemy, this.meleeDamage, 0, 4);
}
else{
this.hit(enemy, this.meleeDamage, 20, 18);
}
    }

    hit(obj, damage, knockbackTime, knockbackHeight) {
        if (!obj.isHurt()) {
            obj.currentImage = 0;
            obj.energy -= damage;
            if (obj.energy <= 0) {
                obj.energy = 0;
            } else {
                obj.lastHit = new Date().getTime();
            }
            obj.knockback(knockbackTime, knockbackHeight);
        }
    }

    knockback(time, height) {
        let knockbackTime = time;
        this.speedY = height;
	console.log(world.knockbackLeft);
        const knockbackInterval = setInterval(() => {
            if (knockbackTime > 0) {
                if (!world.knockbackLeft) { this.x += 6; }
                else { this.x -= 6; }
                knockbackTime--;
            }
	    else{
		clearInterval(knockbackInterval)
		}
        }, 1000 / 30);
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
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
            return this.y + this.height - this.offsetY < 440;
        }

    }

    isColliding(obj) {
        return (this.x + this.width - this.offsetX) >= obj.x + obj.offsetX &&
            this.x + this.offsetX <= (obj.x - obj.offsetX + obj.width) &&
            (this.y - this.offsetY + this.height) >= obj.y + obj.offsetY &&
            (this.y + this.offsetY) <= (obj.y + obj.height - obj.offsetY)
    }

    isNearby(obj) { //umbenennen, damit die Funktion deutlicher wird
        return (this.x + this.width - this.offsetX + this.attackRange) >= obj.x + obj.offsetX &&
               (this.x + this.offsetX - this.attackRange ) <= (obj.x + obj.width - obj.offsetX);
    }

    checkAttackCooldown() {
        this.attackAnimationCount--;
        this.attackCooldown--;
    }

    isAttacking() {
        return this.attackAnimationCount > 0;
    }
}
