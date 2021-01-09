const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;

var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,790,900,20);
     
  for(var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  
  }
  for(var m = 40; m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 75, 30));
    }
    for(var m = 40; m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 175, 30));
    }
    for(var m = 40;m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 275, 30));
    }
    for(var m = 40; m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 375, 30));
    }
  
}

function draw() {
  background("black");
  
  Engine.update(engine);  
  
  ground.display();
 
  for (var m = 0; m < plinkos.length; m++) {
     
    plinkos[m].display();
    
  }
  for(var j= 0; j<particles.length; j++){
    particles[j].display();
  }

  if(frameCount%1===0){
    particles.push(new Particles(random(10,790),10,10));
  }
  for(var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }

    
}

