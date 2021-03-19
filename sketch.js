
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledBall = Bodies.circle(200,5,20,options);
World.add(world,ball);

var options={
isStatic: false,
restitution:0.3,
friction:0.5,
density:1.2

}
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledBall.body, crumpledBall.body.position,(x: 85,y:85 ));
	}
}


