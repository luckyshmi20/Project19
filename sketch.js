var background, background;
var alien, alien, aliensGroup;
var alien2, alien2, aliens2Group;
var rocket, rocket;
var gameState = "play"

function preload(){
background = loadImage("background.png")
alien = loadImage("alien.png");
alien2 = loadImage("alien2.png");
rocket = loadImage("rocket.png")
}

function setup() {
    createCanvas(600,600);
    
    background = createSprite(300,300);
    background.addImage("background",background);
    background.velocityY = 1;
    
    aliensGroup = new Group();
    aliens2Group = new Group();
    
    rocket = createSprite(200,200,50,50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocket);
}

function draw() {
    background(0);
    if (gameState==="play"){
        if(KeyDown("left_arrow")){
            rocket.x = rocket.x - 3;
        }
        if(KeyDown("right_arrow")){
            rocket.x = rocket.x + 3;
        }
        if(KeyDown("space")){
            rocket.VelocityY = -10;
        }
        rocket.VelocityY = rocket.VelocityY + 0.8

        if(background.y > 400){
            background.y = 300
        }
        spawnaliens();
        spawnaliens2();

        if(aliensGroup.isTouching(rocket)){
            ghost.velocityY = 0;
          }
          if(aliens2Group.isTouching(rocket) || rocket.y > 600){
            ghost.destroy();
            gameState = "end"
          }
          
          drawSprites();
    }
    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
    
}

function spawnDoors() {
 
    if (frameCount % 240 === 0) {
      var alien = createSprite(200, -50);
      var alien2 = createSprite(200,10);
     
      alien.x = Math.round(random(120,400));
      alien2.x = alien.x;
      
      alien.addImage(alien);
      alien2.addImage(alien2);
      
      alien.velocityY = 1;
      alien2.velocityY = 1;
      
      rocket.depth = alien.depth;
      rocket.depth +=1;
     
      alien.lifetime = 800;
      alien2.lifetime = 800;
  
      aliensGroup.add(alien);
      aliens2Group.add(alien2);
    }
  }