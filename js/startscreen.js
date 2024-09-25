let canvas;
let world;
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

