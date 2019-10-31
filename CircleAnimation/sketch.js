var rotateAngle = 0;
var lenght = 50;
var plus = true;
var drawRound = 0;
var timeSpend = 0;


function setup() {
  createCanvas(400,400);
  background(220);
}

function draw() {
  background(220);
  timeSpend = millis;
  fill(lenght*1.7,lenght*1.7+100,0,20);
  rotateAngle += PI/180;
  translate(width/2,height/2);
  //rotate(rotateAngle);
  
  
  for(var i = 0; i < 30; i++) {
  if (timeSpend >5) {
  millis = 0;  
  rotation();
  }
  
  
  ellipse(0,lenght,lenght,lenght);
  rotate((i / 180)* (drawRound)/200);
  }
  
  
  /*
  if (plus === true) {
    lenght++;
  } else {
    lenght--;
  }

  if (lenght >=100) {
    plus = false;
  } else if (lenght <= 0) {
    plus = true;
  }
  */
  drawRound++;
}