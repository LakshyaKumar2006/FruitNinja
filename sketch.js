var knife, knifeImage;
var fruit, fruit1, fruit2, fruit3, fruit4, fruit4;
var alien, alien1, alien2;
var fruitsGroup, aliensGroup;

var S1, S2;


var PLAY=1;
var END=0;
var gameState=PLAY;

var gameOver, gameOverImage;

var score=0;

function preload(){
  //loading sword or knife's image
 knifeImage=loadImage('sword.png');
 
  // loading the images of aliens and fruits
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  gameOverImage=loadImage("gameover.png");
  
  S1=loadSound("knifeSwooshSound.mp3");
  S2=loadSound("gameover.mp3");
}
function setup(){
  createCanvas(600, 600);
  knife=createSprite(100, 100, 20, 20);
  
   fruit=createSprite(600, random(100, 500), 10, 10);
  
  fruitsGroup=createGroup();
  aliensGroup=createGroup();
  
}
function draw(){
 background("red");
  
  // knife IMage and additional controls
  knife.addImage(knifeImage);
  knife.y=mouseY;
  knife.x=mouseX;
  if(fruit.x===400){
    fruit.velocityY=Math.round(random(-5,5)); 
     fruit.velocityX=Math.round(random(-5,5));
    
  }
  if(fruit.x===500){
    fruit.velocityY=Math.round(random(-5,5));
       fruit.velocityX=Math.round(random(-5,5));
  }
  if(fruit.x===300){
    fruit.velocityY=Math.round(random(-5,5)); 
       fruit.velocityX=Math.round(random(-5,5));
  }
  if(fruit.x===200){
    fruit.velocityY=Math.round(random(-5,5)); 
       fruit.velocityX=Math.round(random(-5,5));
  }
  if(fruit.x===600){
    fruit.velocityY=Math.round(random(-5,5)); 
       fruit.velocityX=Math.round(random(-5,5));
  }
  
  
  text("Score"+score, 500, 100);
  
  if(gameState===PLAY){
    spawnFruits();
    spawnAliens();
    
    if(knife.isTouching(fruitsGroup)){
      fruitsGroup.destroyEach();
      S1.play();
      score=score+1;
    }
    if(knife.isTouching(aliensGroup)){
      gameState=END;
    }
    
  }else if(gameState===END){
    fruitsGroup.setVelocityEach(0);
    aliensGroup.setVelocityEach(0);
    fruitsGroup.setLifetimeEach(0);
    knife.destroy();
    aliensGroup.destroyEach();
    gameOv();
    //S2.play();
  }
  
drawSprites();  
}
function spawnFruits(){

  if(frameCount%100===0){
      fruit=createSprite(600, random(100, 500), 10, 10);
  fruit.velocityX=-5-score;
   var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4:fruit.addImage(fruit4);
              break;
      case 5: fruit.addImage(fruit5);
              break;
      case 6: fruit.addImage(fruit6);
              break;
      default: break;
    }
    fruit.scale=0.35;
    fruit.lifetime=200;
    
    fruitsGroup.add(fruit);
  }
  
}
function spawnAliens(){
 
  if(frameCount%200===0){
     alien=createSprite(600, random(100, 500), 10,10);
  alien.velocityX=-6;
  var ran=Math.round(random(1,2));
   switch(ran){
       case 1:alien.addImage(alien1);
       break;
       case 2:alien.addImage(alien2);
       break;
       default: break;
   }
    
    aliensGroup.add(alien);
   
  }
}
function gameOv(){
  gameOver=createSprite(300, 300, 10, 10);
  gameOver.addImage(gameOverImage);
}








