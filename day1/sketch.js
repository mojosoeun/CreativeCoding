var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i =1; i <= 100; i++) {
    var v = createVector((windowWidth * (i / 100)) , windowHeight * (i / 100))
    dots.push(v)
  }

  frameRate(1000);
}

function draw() {

  strokeWeight(5);
  //for test
  for (var i = 0, l = dots.length; i < l; i++) {
    if ( i % 3 == 0) {
      stroke(color(255 - i * 2, 255 -i * 5 , 255 - i));
    } else if ( i % 3 == 1) {
      stroke(color(255 - i * 5, 255 - i * 2, 255 - i));
    } else {
      stroke(color(255 - i, 255 - i * 5, 255 - i * 2));
    }

    dots[i].add(random(-10, 10), random(-10, 10))

    if (dots[i].x < 0) {
      dots[i].x = windowWidth;
    }

    if (dots[i].x > windowWidth) {
      dots[i].x = 0;
    }

    if (dots[i].y < 0) {
      dots[i].y = windowHeight;
    }

    if (dots[i].y > windowHeight) {
      dots[i].y = 0;
    }

    point(dots[i].x, dots[i].y);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}