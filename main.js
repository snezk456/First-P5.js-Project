function preload() {

}

function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 650, 500);
    
    tint(tint_color);

    fill(300, 0, 0)
  stroke(300, 0, 0)
  circle(600, 50, 70)
  
  fill(300, 0, 0)
  stroke(300, 0, 0)
  circle(50, 50, 70)
  
  fill(300, 0, 0)
  stroke(300, 0, 0)
  circle(50, 450, 70)
  
  fill(300, 0, 0)
  stroke(300, 0, 0)
  circle(600, 450, 70)
}


function take_snapshot() {
    save('birthday_pic.png');
}



function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}