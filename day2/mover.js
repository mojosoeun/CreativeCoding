var Mover = function(m, x, y) {
  this.position = createVector(x, y);
  this.mass = m;
  
  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0;
  
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.acceleration = createVector(0, 0);
  
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };
  
  this.update = function () {
    
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    
    this.aAcceleration = this.acceleration.x / 10.0;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;
    
    this.acceleration.mult(0);
  };
  
  this.display = function () {
    stroke(255);
    fill(255, 50);
    rectMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    rect(0, 0, this.mass*16, this.mass*16);
    pop();
  };
  
  this.checkEdges = function () {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
};