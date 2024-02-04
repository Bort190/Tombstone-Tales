let canvas;
let world;
let keyboard = new Keyboard();
let audioMute = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function fullscreen(){
	world.canvas.requestFullscreen();
}

function muteAudio(){
	audioMute = !audioMute;
	console.log(audioMute)
}

function playSound(sound){
	if(!audioMute){
		sound.play();
	}
}


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case 'ArrowUp':
            keyboard.UP = true;
            break;
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case ' ':
            keyboard.SPACE = true;
            break;
        case 'd':
            keyboard.THROW = true;
            break;
        case 'f':
            keyboard.MELEE = true;
            break;
        case 'Shift':
            keyboard.DASH = true;
            break;
        default:
            break;
    }

})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 'ArrowUp':
            keyboard.UP = false;
            break;
        case 'ArrowDown':
            keyboard.DOWN = false;
            break;
        case ' ':
            keyboard.SPACE = false;
            break;
        case 'd':
            keyboard.THROW = false;
            break;
        case 'f':
            keyboard.MELEE = false;
            break;
        case 'Shift':
            keyboard.DASH = false;
            break;
        default:
            break;
    }

})