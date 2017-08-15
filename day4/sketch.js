var r;
var theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize all values
  r = 0;
  theta = 0;
  background(255);
}

function draw() {
  
  // Translate the origin point to the center of the screen
  translate(width/2, height/2);

  // Convert polar to cartesian
  var x = r * cos(theta);
  var y = r * sin(theta);

  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  fill(200);
  // line(0, 0, x, y);
  ellipse(x, y, 10, 10);

  // Increase the angle over time
  theta += 0.02;
  r += 0.1;
}

// var angle = 0;
// var aVelocity = 0.03;
//
// function setup() {
//   createCanvas(640, 360);
// }
//
// function draw() {
//   background(51);
//
//   var amplitude = 300;
//   var x = amplitude * sin(angle);
//   angle += aVelocity;
//
//   translate(width / 2, height / 2);
//
//   stroke(255);
//   fill(127);
//   line(0, 0, x, 0);
//   ellipse(x, 0, 48, 48);
// }
