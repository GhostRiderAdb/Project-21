var thickness, wall;
var bullet, speed, weight
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * speed * speed * weight / 22500;
    if(deformation > 1000){
      bullet.shapeColor = "red";
    }
   
    else if (deformation < 1000){
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
}