class Collectable extends DrawableObject{

    index;

    constructor(path, index){
          super().loadImage(path);
          this.width = 80;
          this.height = 80;
          this.x = 500;
          this.randomizePosition();
          this.index = index;

    }
  
randomizePosition(){
    this.x = Math.random()*3000;
    this.y = 120 + Math.random()*75;
}


}