var eyeX,eyeY,eyeWidth

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    eyeX =width/2
    eyeY =height/2
    eyeWidth =180

}

function draw() {
    var pupilX =map(mouseX,0,width,391,409);
        pupilY =map(mouseY,0,width,391,409)
//console.log(mouseX,mouseY)
    background(0,0,255);
//face
    strokeWeight(4);
    stroke(51);
    fill(255, 255, 0);
    ellipse(400, 400, 200);
//left eye
    fill(255);
    ellipse(eyeX-50,eyeY-20,eyeWidth-130)
//right eye
    fill(255);
    ellipse(eyeX+50,eyeY-20,eyeWidth-130)
//nose
    fill(0)
    line(eyeX+10,eyeY+40,eyeX+5,eyeY+40)

    fill(0)
    line(eyeX-10,eyeY+40,eyeX-5,eyeY+40)
//left eye b
    fill(0)
    line(eyeX-75,eyeY-50,eyeX-30,eyeY-60)
//right eye b
    fill(0)
    line(eyeX+75,eyeY-50,eyeX+30,eyeY-60)
//left pupil
    fill(0)
    ellipse(pupilX-50,pupilY-20,eyeWidth-160)
//right pupil
    fill(0)
    ellipse(pupilX+50,pupilY-20,eyeWidth-160)
//left cheek
    strokeWeight(0);
    stroke(0);
    fill(255,215,0)
    ellipse(eyeX-50,eyeY+30,eyeWidth-150)
//right cheek
    strokeWeight(0);
    stroke(0);
    fill(255,215,0)
    ellipse(eyeX+50,eyeY+30,eyeWidth-150)
    //mouth
    strokeWeight(4);
    stroke(4);
    noFill(0)
    arc(eyeX-40, eyeY-15, 360, 180, 0.8, HALF_PI);
   
}