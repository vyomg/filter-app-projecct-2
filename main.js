function preload() {
 
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initailized');
}

function gotPoses(results) 
{
    if(results.lenght > 0);
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.net.x);
        console.log("nose y =" + results[0].pose.net.y);
    }
}
 
function draw() {
 Image(video, 0, 0, 300, 300);
}
 
function take_snapshot() {
    save('myFilterImage.png');
}