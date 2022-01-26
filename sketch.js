var mario;
var ground;




function preload() {
mario_running = loadAnimation("1.png","2.png","3.png","5.png","4.png","7.png")
mario_jumping = loadAnimation("11.png","22.png","33.png","44.png","55.png","66.png","77.png")
obstacle1 = loadAnimation ("o1.png","o2.png","o3.png")
obstacle2 = loadAnimation ("z1.png","z2.png","z3.png")
pointAnimation = loadAnimation ("p1.png","p2.png","p3.png")
backgroundImage =  loadImage ("background.png")
}




function setup() {
    createCanvas(800, 300);
    ground = createSprite(400, 290, 800, 20)
    ground.addImage ("background.png",backgroundImage)
    ground.scale = 0.5 ;
    mario = createSprite(100, 240, 60, 60);
    mario.scale = 0.33
    mario.addAnimation("running",mario_running);
    mario.addAnimation("jumping",mario_jumping);
    
}
function draw() {
    background(50, 50, 50);
     
    if (keyDown("space")) {
        mario.velocityY = -15;
        mario.changeAnimation("jumping",mario_jumping);
    }
    mario.velocityY = mario.velocityY + 0.6;

spawnPoints()
spawnObstacles()

    mario.collide(ground)
    drawSprites();
}
function spawnPoints(){
    if (frameCount % 240=== 0){
        point = createSprite(800,260,20,20)
        point.addAnimation("points",pointAnimation)
        point.scale = 1.5;
        point.velocityX = -3;
    }
}
    function spawnObstacles(){
        if (frameCount % 200=== 0){
            obstacle = createSprite(800,250,20,20)
          obstacle.addAnimation("obstacles",obstacle1)
           obstacle.scale = 3 ;
           obstacle.velocityX = -3;
        }
    }

