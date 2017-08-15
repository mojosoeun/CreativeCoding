function Particle(x, y) {
  this.v = createVector(x , y);
  
  this.move = function() {
    this.v.add(random(-10, 10), random(-10, 10));
    
    if (this.v.x < 0) {
      this.v.x = windowWidth;
    }
  
    if (this.v.x > windowWidth) {
      this.v.x = 0;
    }
  
    if (this.v.y < 0) {
      this.v.y = windowHeight;
    }
  
    if (this.v.y > windowHeight) {
      this.v.y = 0;
    }
  };
  
  this.display = function () {
    point(this.v.x, this.v.y);
  };
}

