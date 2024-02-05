class Level{
    enemies; 
    clouds;
    collectables;
    backgroundObjects;
    backgroundObjects2;    
    backgroundObjects3;
    backgroundObjects4; 
    level_end_x = 3500;

    constructor(enemies, clouds, collectables, backgroundObjects, backgroundObjects2, backgroundObjects3, backgroundObjects4){
        this.enemies = enemies;
        this.clouds = clouds;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
        this.backgroundObjects2 = backgroundObjects2;
        this.backgroundObjects3 = backgroundObjects3;
        this.backgroundObjects4 = backgroundObjects4;
    }

}