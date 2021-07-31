let bgImage;
let playerImage;
let obstacleImage;
let player;
let obstaclse = [];
let wordClassifier;
let score = 0;
let scoree = 0;
let rmv;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obsticleImage = loadImage("obstacle.png");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(erorr, results) {
  console.log(results[0].label, results[0].confidence);
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bgImage);
  fill("black");
  textSize(16);
  text("score " + score, 100, 50);

  if (random(1) < 0.01) {
    obstaclse.push(new obstacle());
  }

  for (let obs of obstaclse) {
    obs.show();
    obs.move();

    if (player.collided(obs) === true) {
      fill("black");
      textSize(32);
      text("GAME OVER!", 300, 200);
      text("Ur score is : " + score, 300, 100);
      noLoop();
    } else {
      if (obs.x === 0) {
        score++;
      }
    }
  }
  player.show();
  player.move();
}
