var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (var i =1; i <= 100; i++) {
    var p = new Particle((windowWidth * (i / 100)) , windowHeight * (i / 100));
    dots.push(p)
  }

  // frameRate(1000);
}


function draw() {

  // background(255);
  strokeWeight(5);
  //for changing dots color
  for (var i = 0, l = dots.length; i < l; i++) {
    if ( i % 3 == 0) {
      stroke(color(255 - i * 2, 255 -i * 5 , 255 - i));
    } else if ( i % 3 == 1) {
      stroke(color(255 - i * 5, 255 - i * 2, 255 - i));
    } else {
      stroke(color(255 - i, 255 - i * 5, 255 - i * 2));
    }
    dots[i].move();
    dots[i].display();
  }
}

//when resize window, resize canvas again
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}