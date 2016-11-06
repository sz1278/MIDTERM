
var NUMSINES = 8; 
var sines = new Array(NUMSINES); 
var rad; 
var i; 


var fund = 0.05; 
var ratio = 0.01; 
var alpha = 10; 
var trace = false; 

function preload(){
  ma = loadSound("sound/magical_appearance.mp3");
  sw = loadSound("sound/swirling_vortex.mp3");
}

function setup()
{
  createCanvas(1200, 800); 

  rad = height/2; 
  background(255); 

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI; 
  }
}

function draw()
{
  if (!trace) {
    sw.play();
    background(255); 
    stroke(0, 120, 0, 125); 
    noFill(); 
  } 

  push(); 
  translate(width/4, height/4); 

  for (i = 0; i<sines.length; i++)
  {
    var erad = 0; 
    if (trace) {
      ma.play();
      stroke(0, 0, 255*(float(i)/sines.length), alpha); 
      fill(0, 0, 255, alpha/2); 
      erad = 5.0*(1.0-float(i)/sines.length);
    }
    var radius = rad/(i+1); 
    rotate(sines[i]); 
    if (!trace) ellipse(0, 0, radius*2, radius*2); 
    push(); 
    translate(0, radius); 
    if (!trace) ellipse(0, 0, 5, 5);
    if (trace) ellipse(0, 0, erad, erad); 
    pop(); 
    translate(0, radius); 
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; 
  }
  
  pop(); 
  
}

function keyReleased()
{
  if (key==' ') {
    trace = !trace; 
    background(255);
  }
}

