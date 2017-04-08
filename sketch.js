function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);
   
    var x = 0;
    while(x < width){
        fill(225, 35, 1);
        ellipse(x, 25, 25, 25);
        x = x + 50;
    }
    
    for(var x = 0; x < 650; x = x + 10){
        fill(70, 157, 219);
        ellipse(x, 10, 25, 25);
    }
}