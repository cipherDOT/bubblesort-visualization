let values = [];

let i = 0;
let j = 0;
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 10; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(51);
  stroke(220);
  strokeWeight(2);

  // for (let m = 0; m < speed; m++) {
  let a = values[j]
  let b = values[j + 1];

  if (a > b) {
    swap(values, j, j + 1);
  }
  if ( i < values.length) {
    j ++;
    if (j >= values.length - i - 1) {
      j = 0;
      i ++;
    }
  } else {
    console.log('FINISHED');
    noLoop();
  }
  // }


  for (let n = 0; n < values.length; n++) {
    push();
    if (n == j) {
      stroke(220, 0, 220);
    }
    line(n * 10, height, n * 10 , height - values[n]);
    pop();
  }
}

function swap(arr,a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}