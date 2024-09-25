let canvas;
let world;
let keyboard = new Keyboard();
let audioMute = false;

/**
 * assigns the canvas Object and creates a new world object
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * opens fullscreen
 */
function fullscreen() {
    world.canvas.requestFullscreen();
}

/**
 * opens controls screen
 */
function openControls() {
    document.getElementById('keyAssignmentContainer').classList.remove("d-none");
}

/**
 * closes controls screen
 */
function closeControls() {
    document.getElementById('keyAssignmentContainer').classList.add("d-none");
}

/**
 * mutes or unmutes audio
 */
function muteAudio() {
    let muteButton = document.getElementById("muteUnmuteButton");
    if (audioMute) {
        audioMute = false;
        muteButton.src = "img/mobileButtons/muteIcon.png";
    }
    else if (!audioMute) {
        audioMute = true;
        muteButton.src = "img/mobileButtons/unMuteIcon.png";
    }
}

/**
 * plays soundfile
 * @param {*} sound 
 */
function playSound(sound) {
    if (!audioMute) {
        sound.play();
    }
    else {
        sound.pause();
    }
}


/**
 * eventlistener when key is pressed
 */
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

/**
 * eventlistener when key is no longer pressed
 */
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
});


/**
 * controls for touchscreens
 */
document.getElementById("leftButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
})
document.getElementById("leftButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
})
document.getElementById("rightButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
})
document.getElementById("rightButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
})
document.getElementById("jumpButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
})
document.getElementById("jumpButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
})
document.getElementById("attackButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.MELEE = true;
})
document.getElementById("attackButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.MELEE = false;
})
document.getElementById("throwButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.THROW = true;
})
document.getElementById("throwButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.THROW = false;
})
document.getElementById("dashButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DASH = true;
})
document.getElementById("dashButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DASH = false;
})