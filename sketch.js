let logo;
let x, y;
let xSpeed, ySpeed;
let logoWidth = 150;
let logoHeight = 75;
let tintColor;

function preload() {
  logo = loadImage("dvd-logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  x = random(logoWidth, width - logoWidth);
  y = random(logoHeight, height - logoHeight);
  xSpeed = random([-3, 3]);
  ySpeed = random([-3, 3]);

  randomColor();
}

function draw() {
  background(255);

  // Move
  x += xSpeed;
  y += ySpeed;

  // Bounce
  if (x < logoWidth / 2 || x > width - logoWidth / 2) {
    xSpeed *= -1;
    randomColor();
  }
  if (y < logoHeight / 2 || y > height - logoHeight / 2) {
    ySpeed *= -1;
    randomColor();
  }

  tint(tintColor);
  image(logo, x, y, logoWidth, logoHeight);
}

function randomColor() {
  tintColor = color(random(255), random(255), random(255));
}
