// var angle = 0
//   , aVelocity = 0
//   , aAcceleration  = 0.001;
//
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(255);
//
//   translate(width/2, height/2);
//   rotate(angle);
//
//   stroke(0);
//   strokeWeight(2);
//   fill(127);
//
//   line(-60, 0, 60, 0);
//   ellipse(60, 0, 16, 16);
//   ellipse(-60, 0, 16, 16);
//
//   angle += aVelocity;
//   aVelocity += aAcceleration;
// }


var movers = [];
var attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 100; i++) {
    movers.push(new Mover(random(0.1, 6), random(width), random(height)));
  }
  attractor = new Attractor();
}

function draw() {
  background(0);

  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    // var force = attractor.calculateAttraction(movers[i]);
    // movers[i].applyForce(force);

    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




