'use strict'

let x=0;
let y=0;
let a=0;
let ballSize = 30;
let spaceBetweenBalls = 300;


function setup() {
  createCanvas(600,600);
  background(220);
}

function draw() {
  background(220);
  fill(0,255,0);
  translate(width/2,height/2);
  y = cos(a)*spaceBetweenBalls;
  x = sin(a)*spaceBetweenBalls;
  
  rectMode(CENTER);
  
 
 
  strokeWeight(5);
  line(x,y,0,0);
  line(-x,-y,0,0);
  rotate(HALF_PI);
    line(x,y,0,0);
    line(-x,-y,0,0);
  rotate(-HALF_PI);
    ellipse(0,0,5,5);
  rotate(HALF_PI);


  line(x,y,50,50);
  line(x,y,50,-50);
  line(x,y,-50,50);
  line(x,y,-50,-50);
  
  line(-x,-y,50,50);
  line(-x,-y,50,-50);
  line(-x,-y,-50,50);
  line(-x,-y,-50,-50);
  
  rotate(-HALF_PI);
  
  
  
  line(x,y,50,50);
  line(x,y,50,-50);
  line(x,y,-50,50);
  line(x,y,-50,-50);
  
  line(-x,-y,50,50);
  line(-x,-y,50,-50);
  line(-x,-y,-50,50);
  line(-x,-y,-50,-50);
  

  a+= PI/180;
}