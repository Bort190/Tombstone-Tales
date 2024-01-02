let canvas;
let character = new Image();


function init(){
    canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2D');
    character.src = '../img/2_character_pepe/1_idle/idle/I-2.png'
    ctx.drawImage(character, 20, 20, 50, 150)
}