var bullet1,bullet2,bullet3,bullet4
var wall1,wall2,wall3,wall4
var separation


function setup() {

createCanvas(1600,600);

bullet1 = createSprite(1500,100,100,50);
bullet1.velocityX=-140

bullet2 = createSprite(1500,225,100,50);
bullet2.velocityX=-110

bullet3 = createSprite(1500,375,100,50);
bullet3.velocityX=-100

bullet4 = createSprite(1500,500,100,50);
bullet4.velocityX=-80

wall1 = createSprite(25,100,40,125)
wall1.shapeColor="cyan"

wall2 = createSprite(25,225,40,125)
wall2.shapeColor="cyan"

wall3 = createSprite(25,375,40,125)
wall3.shapeColor="lime"

wall4 = createSprite(25,500,40,125)
wall4.shapeColor="lime"

separation = createSprite(800,300,1600,25)
separation.shapeColor="black"

}

function draw() {
  background(255,13,43);  

  bullet1.collide(wall1)
  bullet2.collide(wall2)
  bullet3.collide(wall3)
  bullet4.collide(wall4)

  text("The bullets Which collide with the Cyan Wall are the walls made of the best Materials",600,20)
  text("The bullets Which collide with the Lime Wall are the walls made of the worst Materials",600,580)
  text("Nothing in the if loop works!",600,325)
  drawSprites();
}