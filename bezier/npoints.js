var points = [];
function setup() {
    createCanvas(displayWidth * 0.98, displayHeight * 0.73);
    background(30);
    stroke(200,0,0);
    strokeWeight(5);
}

function resetPoints() {
    clear();
    background(0);
    points=[];
}


function mousePressed() {
    clear();
    background(0);
    var newPoint = new Point(mouseX,mouseY);
    stroke(200,0,0);
    strokeWeight(5);
    points.push(newPoint);
    beginShape();
    noFill();
    strokeWeight(1);
    points.forEach(element => {
        vertex(element.x,element.y);
        element.show();
    });
    endShape()
    drawBernsteinBezier(points);    
}
