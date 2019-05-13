var points = [];
var tempPoints = [];
var levels = [];
levels[0] = [];
var nrLevel = 1;
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
    levels[0].push(newPoint);
    var temp = levels[0];
    levels=[];
    levels[0]=temp;
    t = 0;


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

        for (i = 1; i <= levels[0].length-2; i++) {
            var newLevel = [];
            for (j = 0; j < levels[i-1].length - 1; j++) {
                var newP = splitPoint(levels[i-1][j], levels[i-1][j+1], t);
                stroke(0, 255, 0);
                strokeWeight(7);
                newP.show();
                newLevel[j] = newP;
            }
            // for (let j = 0; j < newLevel.length - 1; j++) {
            //     stroke(0, 240, 0);
            //     strokeWeight(2);
            //     line(newLevel[j].x, newLevel[j].y, newLevel[j + 1].x, newLevel[j + 1].y);
            // }
            levels[i] = newLevel;
        }

     
        t = t + 0.01;
        if (t > 1) {
            t = 0;
            clear()
            background(0);
        }
    }
}


