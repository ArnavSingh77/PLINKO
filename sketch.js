const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var plinko,plinko1,plinko2,plinko3,plinko4,plinko5;
var pli,pli1,pli2,pli3,pli4,pli5,pli6,pli7,pli8;
var p,p1,p2,p3,p4,p5;

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
    for(var m = 15; m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 175, 30));
    }
    for(var m = 40;m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 275, 30));
    }
    for(var m = 15; m <= 780; m = m + 100) {
      plinkos.push(new Plinko(m, 375, 30));
    }
  
}

function draw() {
  background("black");
  
  Engine.update(engine);  
  
  ground.display();
  
  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
 
  pli.display();
  pli1.display();
  pli2.display();
  pli3.display();
  pli4.display();
  pli5.display();
  pli6.display();
  pli7.display();
  pli8.display();

  p.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
 
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

