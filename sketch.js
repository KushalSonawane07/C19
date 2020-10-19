var towerimage,tower;
var doorimage,doorGroup;
var climberimage,climberGroup,climber;
var ghostimage,ghost;
var invisibleblock,invisibleGroup;
var gamestate="play";


function preload(){ 
towerimage = loadImage("tower.png");
doorimage = loadImage("door.png");
climberimage = loadImage("climber.png");
ghostimage = loadImage("ghost-standing.png");
spookySound = loadSound("spooky.wav");

}

function setup(){
createCanvas(600,600);
spookySound.loop();
tower=createSprite(300,300);
tower.addImage("tower",towerimage);
tower.velocityY=1;
doorGroup = new Group();
climberGroup = new Group();
invisibleGroup = new Group();
ghost=createSprite(200,200,50,50);
ghost.addImage("ghost",ghostimage);
ghost.scale=0.4;

  

}

function draw(){
background(0);

 if(gamestate==="play"){
  
if(keyDown("left_arrow")){
ghost.x=ghost.x-3; 
    }
if(keyDown("right_arrow")){
ghost.x=ghost.x+3;
    }
if(keyDown("space")){
ghost.velocityY=-5;
}
ghost.velocityY=ghost.velocityY+0.8;

 if(tower.y > 400 ){
tower.y=300;
} 
   
 spawndoors(); 
   
if(climberGroup.isTouching(ghost)){
 ghost.velocityY=0;

}
  
if(invisibleGroup.isTouching(ghost)||ghost.y>600){
ghost.destroy();
gamestate="end";
   } 
   
drawSprites();

 } 

if(gamestate==="end"){
stroke("yellow");
fill("yellow");
textSize(30);
text("Game Over",230,250);

}



  


}

function spawndoors(){
if(frameCount % 240 ===0 ){
var  door=createSprite(200,-50);
var climber=createSprite(200,10);
var invisibleblock=createSprite(200,15);
invisibleblock.width=climber.width;
invisibleblock.height=2;

door.addImage(doorimage);
climber.addImage(climberimage);

door.x= Math.round(random(120,400));
climber.x=door.x;
invisibleblock.x=door.x;

door.velocityY=1;
climber.velocityY=1;
invisibleblock.velocityY=1;

ghost.depth=door.depth;
ghost.depth+=1;


door.lifetime=800;
climber.lifetime=800;
invisibleblock.lifetime=800;
  
doorGroup.add(door);
//invisibleblock.debug=true;
climberGroup.add(climber);
invisibleGroup.add(invisibleblock);


}
  
}





