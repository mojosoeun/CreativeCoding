// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover();
}

function draw() {
  background(50);
  mover.update();
  mover.checkEdges();
  mover.display();
}