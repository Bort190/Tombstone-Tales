let canvas;
let world;
let audioMute = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

function fullscreen() {
    world.canvas.requestFullscreen();
}

function openControls() {
    document.getElementById('keyAssignmentContainer').classList.remove("d-none");
}

function closeControls() {
    document.getElementById('keyAssignmentContainer').classList.add("d-none");
}

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

function playSound(sound) {
    if (!audioMute) {
        sound.play();
    }
    else {
        sound.pause();
    }
}

