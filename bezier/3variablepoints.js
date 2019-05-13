var label;
var p0 = null;
var p1 = null;
var p2 = null;
var p1sim = null;
var fixed = false;

function setup() {
    createCanvas(displayWidth * 0.98, displayHeight * 0.73);
    background(0);
    frameRate(20);
}


function initialDraw() {
    background(0);
    stroke(200, 0, 0);
    strokeWeight(5);
    p1.show();
    p1sim.show();
    strokeWeight(1);
    stroke(100, 0, 0)
    line(p1.x, p1.y, p2.x, p2.y);
    line(p2.x, p2.y, p1sim.x, p1sim.y);
    prevPoint = p0;
    stroke(255);
    drawQuadraticBezierCurve(p0, p1, p2);

}

function resetPoints() {
    p1 = null;
    p0 = null;
    p2 = null;
    p1sim = null;
    fixed = false;
    clear();
    background(0);
}

function reset() {
    if (p0 != null) {
        clear();
        initialDraw();
    }
}

function symmetricalPoint(point, reference) {
    return new Point(2 * reference.x - point.x, 2 * reference.y - point.y);
}

function mouseMoved() {
    if (p0 != null && p2 != null && fixed == false) {
        p1 = symmetricalPoint({ x: mouseX, y: mouseY }, p2);
        p1sim = new Point(mouseX, mouseY);
        reset();
    }
}

function mousePressed() {

    if (p0 == null) {
        p0 = new Point(mouseX, mouseY);
        stroke(200, 0, 0);
        strokeWeight(5);
        p0.show();
    } else if (p2 == null) {
        p2 = new Point(mouseX, mouseY);
        stroke(200, 0, 0);
        strokeWeight(5);
        p2.show();
    } else {
        fixed = true;
    }
    return false;
}

function draw() {


}