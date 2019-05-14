var levels = [];
levels[0] = [];
var t = 0;
function setup() {
    createCanvas(displayWidth * 0.98, displayHeight * 0.73);
    background(30);
    frameRate(10);
    stroke(200, 0, 0);
    strokeWeight(5);
}


function mousePressed() {
    var newPoint = new Point(mouseX, mouseY);
    levels[0].push(newPoint);
    for(i=1;i<levels[0].length;i++){
        levels[i]=[];
    }
    // var temp = levels[0];
    // levels=[];
    // levels[0]=temp;
    // t = 0;


}

function draw() {
    background(0);
    stroke(200, 0, 0);
    if (levels.length === 1) {
        for (let i = 0; i < levels[0].length; i++) {
            strokeWeight(5);
            levels[0][i].show();
        }
        for (let i = 0; i < levels[0].length - 1; i++) {
            strokeWeight(2);
            line(levels[0][i].x, levels[0][i].y, levels[0][i + 1].x, levels[0][i + 1].y)
        }
        for(let k = 0 ; k< levels[0].length - 1; k++){
            var newP = splitPoint(levels[0][k],levels[0][k+1],t)
            stroke(0,240,0);
            strokeWeight(7);
            newP.show();
            levels[1][k]=newP;
        }
        
     
        t = t + 0.01;
        if (t > 1) {
            t = 0;
        }
    }
}


