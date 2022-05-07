
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500 );

    canvas = createCanvas(500, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function draw() {
    background('#969A97');

    document.getElementById("font_size").innerHTML = "font and size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#03fc3d');
    text('S.K.A.N',50,400)
  
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX +" rightWrist = " + rightWristX +" difference = " + difference);


    }
}
