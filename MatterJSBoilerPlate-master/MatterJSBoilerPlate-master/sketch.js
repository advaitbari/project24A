
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1,dustbin2,dustbin3,ground;

function setup() {
	createCanvas(800, 700);
paper1=createSprite(50,400);
paper1.shapeColor=color("pink");
paper1.scale=0.5

ground=createSprite(400,460,800,05);
ground.shapeColor=color("green");
ground.scale=1;

dustbin1=createSprite(650,433,20,100);
dustbin1.shapeColor=color("red");
dustbin1.scale=0.5

dustbin2=createSprite(695,453,200,20);
dustbin2.shapeColor=color("red");
dustbin2.scale=0.5

dustbin3=createSprite(750,433,20,100);
dustbin3.shapeColor=color("red");
dustbin3.scale=0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, paperBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  paper1.display()
  dustbin2.display()
  dustbin3.display()
  dustbin1.display()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === space) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(paperBody, false);
  }

}
