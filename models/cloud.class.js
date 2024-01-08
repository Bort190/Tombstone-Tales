class Cloud extends MovableObject{
y = 20;
width = 500;
height = 250;



constructor(imagePath){
    super().loadImage(imagePath);
        this.x = Math.random() * 500;
        this.moveClouds();

}

moveClouds(){
    this.moveLeft();
}

}