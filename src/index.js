import "./styles.css";
import p5 from "p5";

let sketch = function(p, parentThis) {
  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);
  };
  p.draw = () => {
    p.background(0);
    p.stroke(255, 255, 0);
    p.strokeWeight(1);
    p.line(0, 0, p.windowWidth, p.windowHeight);
    p.line(0, p.windowHeight, p.windowWidth, 0);
    p.fill(255);
    if (p.keyIsDown(p.SHIFT)) p.ellipse(p.mouseX, p.mouseY, 60, 60);
    else p.ellipse(p.mouseX, p.mouseY, 30, 30);
  };
  p.windowResized = event => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.keyPressed = event => {
    console.log("event", event.key, event.shiftKey);
  };
};

new p5(sketch, window.document.getElementById("container"), this);
