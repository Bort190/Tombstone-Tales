class MovableObject{
    x = 100;
    y = 200;
    img;
    height = 205;
    width = 100;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log("Moving Right");
    }

    moveLeft(){

    }



}