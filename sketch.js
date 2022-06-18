
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

 createCanvas(800, 700);
 engine = Engine.create();
 world = engine.world;
  
 //options//
 
  var plane_options={
    isStatic:true
  }

 var block1_options={
   restitution: 2,
   friction: 0.5,
   frictionAir: 0.04,
 }

 var block2_options={
   restitution:1.9,
   friction: 0.5,
   frictionAir: 0.1,
 }

 var block3_options={
   restitution: 1.9,
   friction: 0.01,
   frictionAir: 0.06,
 }
  //Bodies//

 block1 = Bodies.circle(220,10,10,block1_options);
 World.add(world,block1);

 block2 = Bodies.rectangle(110,50,10,10,block2_options);
 World.add(world,block2);

 block3 = Bodies.rectangle(350,50,10,10,block3_options);
 World.add(world,block3);

 plane = Bodies.rectangle(200,650,400,20,plane_options);
 World.add(world,plane);

 Engine.run(engine);
 rectMode(CENTER);
 ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(30);

  Engine.update(engine);
  
  //ellipses e rects//

  ellipse(block1.position.x,block1.position.y);
  rect(block2.position.x,block2.position.y);
  rect(block3.position.x,block3.position.y,100,60);

  drawSprites();
 
}



