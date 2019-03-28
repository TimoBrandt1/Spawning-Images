const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObjects = [];

let images = ["img/gan3x3.png","img/gan2x2.png","img/cube4x4.png","img/megaminx.png"];

animate();

function animate(){
  if(Math.random()<0.1){
    let gameObject = {};
    gameObject.image = new Image();
    gameObject.image.src = images[getRandomNumber(images.length)];
    gameObject.x = getRandomNumber(canvas.width);
    gameObject.y = -120;
    gameObject.v_y = 5;
    gameObject.size = getRandomNumber(100);
    gameObject.r = gameObject.size;
    gameObjects.push(gameObject);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for(let i = 0; i< gameObjects.length;i++){
    let gameObject = gameObjects[i];

    gameObject.y += gameObject.v_y;
    context.drawImage(gameObject.image,gameObject.x,gameObject.y,gameObject.size,gameObject.size);
    if(gameObject.y > canvas.height){
      gameObjects.splice(i,1);
    }
    if (gameObject.size < 10  && gameObject.size > 0) {
      gameObject.v_y = 50;
    }
    if (gameObject.size < 20  && gameObject.size > 10) {
      gameObject.v_y = 45;
    }
    if (gameObject.size < 30  && gameObject.size > 20) {
      gameObject.v_y = 40;
    }
    if (gameObject.size < 40  && gameObject.size > 30) {
      gameObject.v_y = 35;
    }
    if (gameObject.size < 50  && gameObject.size > 40) {
      gameObject.v_y = 30;
    }
    if (gameObject.size < 60  && gameObject.size > 50) {
      gameObject.v_y = 25;
    }
    if (gameObject.size < 70  && gameObject.size > 60) {
      gameObject.v_y = 20;
    }
    if (gameObject.size < 80  && gameObject.size > 70) {
      gameObject.v_y = 15;
    }
    if (gameObject.size < 90  && gameObject.size > 80) {
      gameObject.v_y = 10;
    }
    if (gameObject.size < 100 && gameObject.size > 90) {
      gameObject.v_y = 5;
    }
  }
}

function getRandomNumber(max){return Math.floor(Math.random()*max);}

addEventListener('mousedown',mouseHandler);
let score = 0;
function mouseHandler(evt){
  for(let i = 0; i<gameObjects.length;i++){
    let dx = gameObjects[i].x - evt.clientX;
    let dy = gameObjects[i].y - evt.clientY;
    let distance = Math.sqrt(dx*dx+dy*dy);
    if(distance<gameObjects[i].r){
      gameObjects.splice(i,1);
      score++;
      document.getElementById('h1').innerHTML = "Score: " + score;
    }
  }
}
