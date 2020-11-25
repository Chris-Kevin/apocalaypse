var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,res;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	rectangle1 =  createSprite(330,610,15,100);
	rectangle1.shapeColor = "red";
	rectangle2 = createSprite(387,653,100,15);
	rectangle2.shapeColor = "red";
	rectangle3 =  createSprite(430,610,15,100);
	rectangle3.shapeColor = "red";
    
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	res = {restitution:3}

	engine = Engine.create();	
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true,res});
	World.add(world, packageBody);	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,res});
 	World.add(world, ground);

	 rectangleBody = Bodies.rectangle(width/2,650,width,10,{isStatic:true,res});
	 World.add(world,rectangleBody);

	 
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false);

	
	  }
}



