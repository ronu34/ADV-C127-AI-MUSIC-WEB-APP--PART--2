let song1 = null;
let song2 = null;

function preload() {
    song1 = loadSound("Ripple - On Your Mind [NCS Release].mp3");
    song2 = loadSound("Max Brhon - AI [NCS Release].mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500)
}