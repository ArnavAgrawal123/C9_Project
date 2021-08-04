
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
    background("RED");
  }
  if (keyIsDown(UP_ARROW)){
    background("BLUE");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("LIME");
  }
  if (keyIsDown(DOWN_ARROW)){
    background("GOLD");
  }
}




