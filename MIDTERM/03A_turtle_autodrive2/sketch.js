var x, y;
var angle = 270;
var distance = 10;
var angleamt = 90;
var step = 20
var string = 'F+F−F−F+F+F+F−F−F+F−F+F−F−F+F−F+F−F−F+F+F+F−F−F+F+F+F−F−F+F+F+F−F−F+F−F+F−F−F+F−F+F−F−F+F+F+F−F−F+F−F+F−F−F+F+F+F−F−F+F−F+F−F−F+F−F+F−F−F+F+F+F−F−F+F−F+F−F−F+F+F+F−F−F+F−F+F−F−F+F−F+F−F−F+F+F+F−F−F+F+F+F−F−F+F+F+F−F−F+F−F+F−F−F+F−F+F−F−F+F+F+F−F−F+F';
var pos = 0;
var r,g,b,a;
var currentangle = 270; 


function setup() {
  createCanvas(800, 600);
   stroke(0, 0, 0, 255);
  x = width/2;
  y = height/2;
  background(255);
}

function draw() {
  
  var c = string.charAt(pos);
  doit(c);
  pos = (pos+1) % string.length;

  var radius = 0;
  radius+= random(0, 30);
  radius+= random(0, 30);
  radius+= random(0, 30);
  radius = radius/3;
  
  // draw the stuff:
  fill(r, g, b, a); // interior fill color
  ellipse(x, y, radius, radius); // circle that chases the mouse


}

function doit(k) {
  if(k=='F') {
    stroke(0);
    var x1 = x + distance*cos(radians(angle));
    var y1 = y + distance*sin(radians(angle));
    line(x, y, x1, y1);
    stroke(random(255), random(255), random(255));
    ellipse(x, y, distance/2, distance/2);
    x = x1;
    y = y1;
  }
  else if(k=='f') {
    x = x + distance*cos(radians(angle));
    y = y + distance*sin(radians(angle));
  }
  else if(k=='+') angle+=angleamt;
  else if(k=='-') angle-=angleamt;
  else if(k=='C') background(255);
}

function keyTyped()
{
  console.log(key); // what key did we type?
  
  if(key=='F') // draw forward
  {
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(key=='=')
  {
   currentangle+=angle; // turn left
  }
  else if(key=='-')
  {
   currentangle-=angle; // turn right   
  }
  else if(key =="f")
  {
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    x = 1.1*x1;
    y = 1.1*y1;
  }
 
  
  }


 
  function mousePressed(){
    clear();
     x = width/2;
  y = height/2;
  }
