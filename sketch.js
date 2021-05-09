//Create variables here
var dog;
var HappyDog;
var database;
var foodS;
var foodStalk;
var dog;
var happydog;


function preload()
{
	//load images here
  dogImage=loadImage("images/Dog.png");
  happydog=loadImage("images/happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,20,20)
  dog.addImage(dogImage)
  dog.scale=0.15
  foodStalk=database.ref('food');
  foodStalk.on("value",readStalk);
  textSize(20)
}


function draw() {  
background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStalk(foodS);
    dog.addImage(happydog);
  }
  drawSprites();
    fill(255,255,255);
    stroke('black')
    text("Food remaining :"+foodS,170,200);
    textSize(13);
    text("press UP_ARROW key to feed drago milk",130,10,300,20) 
  }
  function writeStalk(x){
    if(x<=0){
      x=0
    }
    else{
      x=x-1
    }
    database.ref('/').update({
      food:x
    })
  }
  function readStalk(data){
    foodS=data.val();
    console.log(foodS);
  }
  //add styles here





