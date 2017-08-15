//
// // The Nature of Code
// // Daniel Shiffman
// // http://natureofcode.com
//
// // An array of objects
// var oscillators = [];
//
// function setup()  {
//   createCanvas(640, 360);
//   // Initialize all objects
//   for (var i = 0; i < 10; i++) {
//     oscillators.push(new Oscillator());
//   }
// }
//
// function draw() {
//   background(51);
//   // Run all objects
//   for (var i = 0; i < oscillators.length; i++) {
//     oscillators[i].oscillate();
//     oscillators[i].display();
//   }
// }

var startAngle = 0;
var angleVel = 0.23;

function setup() {
  createCanvas(640, 360);

}

function draw() {
  background(51);
  
  startAngle += 0.015;
  var angle = startAngle;
  
  beginShape();
  for (var x = 0; x <= width; x += 24) {
    var y = map(sin(angle), -1, 1, 0, height);
    stroke(164);
    fill(255, 50);
    strokeWeight(2);
    ellipse(x, y, 48, 48);
    angle += angleVel;
  }
  endShape();
}