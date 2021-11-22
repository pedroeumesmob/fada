var starImg,bgImg;
var star, starBody;
var fada, fadaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadImage("images/fairy.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    fada = createSprite(200,600);
	fada.addImage(fadaImg);
	fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

    
}

function draw() {
    background(bgImg);

    star.x= starBody.position.x;
    star.y= starBody.position.y;

    if(star.y > 535 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }

    if(keyDown("LEFT_ARROW")) {
        fada.x = fada.x-5;
    }

    if(keyDown("RIGHT_ARROW")) {
        fada.x = fada.x+5;
    }

    if(keyDown("UP_ARROW")) {
        Matter.Body.setStatic(starBody,false); 
    }

    drawSprites();
}