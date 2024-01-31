class Collectable extends DrawableObject{


    constructor(path, type, size){
          super().loadImage(path);
          this.width = size;
          this.height = size;
	  this.offsetY = 10;
	  this.offsetX = 10;
          this.x = 500;
          this.randomizePosition(type);

    }
  
randomizePosition(type){
    this.x = Math.random()*3000;

if(type == 'bone'){
 	  this.y = 380;

}
else{
 this.y = 120 + Math.random()*75;
}
  
}


}