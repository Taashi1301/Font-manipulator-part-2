function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.position(100, 250);
    video.size(300, 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", Getposes);
}

function draw(){
    background("#7e8289");
}

function modelLoaded(){
    console.log("ModelLoaded");
}

function Getposes(results){
    if (results.length > 0){
        console.log(results);
    }
}