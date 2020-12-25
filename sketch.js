
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,dustbinImage;
var paper,paperImage;

function preload()
{

dustbinImage=loadImage("sprites/dustbingreen.png");
paperImage=loadImage("sprites/images.jpg");

	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	dustbin=createSprite(678,570)
	dustbin.scale=0.5
	dustbin.addImage(dustbinImage);

	

	paper=createSprite(63.012, 640,100,100);
	paper.scale=0.2
	paper.addImage(paperImage);
	

	


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
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
 if (keyCode === UP_ARROW) {


	Matter.Body.applyForce (paperObject.body,paperObject.body.position,{X:85,Y=-85});


 
  }
}
