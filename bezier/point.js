class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mul(value) {
        var newX = this.x * value;
        var newY = this.y * value;
        let newPoint = new Point(newX, newY);
        return newPoint;
    }

    show(drawPoint = point) {
        drawPoint(this.x, this.y);
    }
}

function addPoints(...points) {
    x = 0;
    y = 0;
    points.forEach(element => {
        x = x + element.x;
        y = y + element.y;
    });
    return new Point(x, y);
}

function bPoint(tx, point0, point1, point2) {
    var val0 = Math.pow((1 - tx), 2);
    var val1 = 2 * (1 - tx) * tx;
    var val2 = Math.pow(tx, 2);

    newP0 = point0.mul(val0);
    newP1 = point1.mul(val1);
    newP2 = point2.mul(val2);

    return addPoints(newP0, newP1, newP2);
}

function symmetricalPoint(point, reference) {
    return new Point(2 * reference.x - point.x, 2 * reference.y - point.y);
}

function drawQuadraticBezierCurve(point0, point1, point2, drawLineMethod = line, accuracy = 0.025) {
    var prevPoint = point0;
    for (var t = 0; t <= 1; t += accuracy) {
        var b = bPoint(t, point0, point1, point2);
        drawLineMethod(prevPoint.x, prevPoint.y, b.x, b.y);
        prevPoint = b;
    }
}

function factorial(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function combinations(n, i) {
    if(n=>i){
        return factorial(n) / (factorial(i) * factorial(n - i));
    }
    return NaN;
}

function bernsteinPolynomials(t, i, n) {
    var comp1 = combinations(n, i);
    var comp2 = Math.pow(t, i);
    var comp3 = Math.pow((1 - t), (n - i));
    if (i === 0) {
        comp2 = 1;
    }
    if ((n - i) === 0) {
        comp3 = 1;
    }

    return comp1*comp2*comp3 ;
}

function bernsteinPoint(t,n,points){
    newX = 0;
    newY = 0;
    for (var i = 0; i <= n; i++) {
        var bnVal =bernsteinPolynomials(t, i, n);
        newP = points[i].mul(bnVal);
        newX = newX + newP.x;
        newY = newY + newP.y;
    }
    bnPoint = new Point(newX, newY);
    return bnPoint;

}



function drawBernsteinBezier( points) {
    var n = points.length;
    
    if (n > 2) {
        t=0;
        var prevPoint = points[0];
        while(t <= 1 ){
            bnPoint = bernsteinPoint(t,n-1,points);
            stroke(255);
            strokeWeight(1);
            line(prevPoint.x,prevPoint.y,bnPoint.x,bnPoint.y);
            prevPoint=bnPoint;
            t+=0.01;
        }
    }
}