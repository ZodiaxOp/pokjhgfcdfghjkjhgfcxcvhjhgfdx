img = ""
status = ""
objects = []

function setup() {
    canvas = createCanvas(640, 420)
    canvas.position(650, 750)
    video = createCapture(VIDEO)
    video.size(540, 420)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : detecting Objects"

}

function preload() {
    img = loadImage('download.jpg')
}

function draw() {
    image(video, 0, 0, 640, 420)
}
if (status != "") {
    cr = random(255)
    az = random(255)
    y = random(255)
    objectDetector.detect(video, gotresult)

    for (i = 0; i < objects.lenght; i++) {
        document.getElementById("status").innerHTML = "thor : thor radnork"
        document.getElementById("numberob").innerHTML = " Number Of Headshots : " + objects.length

        fill(cr, az, y);
        ihm = floor(objects[i].confidence * 100);
        text(objects[1].label + "" + ihm + "%", objects[i].x, objects[i].y);
        noFill();

        stroke(cr, az, y);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

    }
}

function modelLoaded() {
    console.log(TheZodic)
    status = true
}

function gotresult(results) {
    console.log(results)
    console.log(qqqwwweeerrrtttyyyuuuiiiooopppaaasssdddfffggghhhjjjkkklllzzzxxxcccvvvbbbnnnmm)
    objects = results
}