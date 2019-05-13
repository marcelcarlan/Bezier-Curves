var t;
var p0, p1, p2;
var prevPoint;
var points = false;
function setup() {
    
    createCanvas(displayWidth * 0.98, displayHeight * 0.65);
    createDiv('<p id="tLabel"></p>');
    p0 = new Point(width * 0.1, height * 0.9);
    p1 = new Point(width * 0.3, height * 0.2);
    p2 = new Point(width * 0.9, height * 0.9);
    background(0);
    frameRate(30);
    initialDraw();
}

function initialDraw() {
    t = 0;
    background(0);
    strokeWeight(5);
    stroke(200, 0, 0)
    p0.show();
    p1.show();
    p2.show();
    strokeWeight(1);
    stroke(100, 0, 0)
    line(p0.x, p0.y, p1.x, p1.y);
    line(p1.x, p1.y, p2.x, p2.y);
    prevPoint = p0;
    stroke(255);
}

function reset() {
   
    clear();
    initialDraw();
}

function resetPoints() {
    if (points == true) {
        points = false
    }
    else {
        points = true;
    }
    p1 = new Point(width * 0.3, height * 0.2);
    reset();
}
function mousePressed() {
    p1 = new Point(mouseX, mouseY);
    reset();

}

function draw() {
    if (t != 100) {
        t += 1;
    }

    tx = t / 100;
    var b = bPoint(tx, p0, p1, p2);
    if (points) {
        stroke(255);
        strokeWeight(3);
        b.show();
    }
    else {
        line(prevPoint.x, prevPoint.y, b.x, b.y);
        prevPoint = b;
    }

    select("#tLabel").html("t = " + t.toFixed(2) / 100);

}