var hr,mn,sc,scAngle,mnAngle,hrAngle;

function preload(){

}
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);


}

function draw() {
  background(0); 
  
  translate(250,250);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr %12,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(4,253,2);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(2,2,231);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  strokeWeight(8);
  nofill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(4,253,2);
  arc(0,0,280,280,0,mnAngle);

  stroke(2,2,231);
  arc(0,0,260,260,0,hrAngle);


}