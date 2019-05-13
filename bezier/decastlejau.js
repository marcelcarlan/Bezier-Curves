var points = [];
var tempPoints = [];
var t = 0;
function setup() {
    createCanvas(displayWidth * 0.98, displayHeight * 0.73);
    background(30);
    frameRate(10);
    stroke(200, 0, 0);
    strokeWeight(5);
}

// function resetPoints() {
//     clear();
//     background(0);
//     points=[];
//     t=0;
// }


function mousePressed() {
    var newPoint = new Point(mouseX, mouseY);
    points.push(newPoint);
    t=0;


}

function draw() {
    background(0);
    stroke(200,0,0);
    for(let i=0;i<points.length;i++){
        strokeWeight(5);
        points[i].show();
    }
    for(let i=0;i<points.length-1;i++){
        strokeWeight(2);
        line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
    }
    let ln = points.length;
    if (ln > 1) {
    
        for (let i = 0; i < ln - 1; i++) {
            var newP = splitPoint(points[i],points[i+1],t);
            stroke(0,255,0);
            strokeWeight(7);
            newP.show();
            tempPoints[i]=newP;
        }
        
        for(let i = 0; i< tempPoints.length - 1; i++){
            stroke(0,240,0);
            strokeWeight(2);
            nP=splitPoint(tempPoints[i],tempPoints[i+1],t);
            nP.show();
            line(tempPoints[i].x,tempPoints[i].y,tempPoints[i+1].x,tempPoints[i+1].y);
        }
        t=t+0.01;
        if(t>1){
            t=0;
            clear()
            background(0);
        }
        
    }
    
}
