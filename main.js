function preload(){
    mustache = loadImage("https://i.postimg.cc/25sPxGdK/curly-mustache-isolated-transparent-background-png-psd-888962-861.jpg")
}
noseX = 0;
noseY = 0;

function setup(){  
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 30, 30);
}


function modelLoaded(){
    console.log("PoseNet Is Succesfully Loaded")
}

function gotPoses (results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X Coordinate = " + noseX);
        console.log("nose Y Coordinate = " + noseY);
    }
}



function take_snapshot(){
    save("myFilterImage.png")
}
