function setup() {
  createCanvas(400, 400);
   background("#0CE1FC");
}

function draw() {
  if(mouseIsPressed) {
  stroke("yellow"); //comando para alterar a cor da linha 
  fill("#0CE1FC")
  rect(mouseX,mouseY,30,30);
}
}
