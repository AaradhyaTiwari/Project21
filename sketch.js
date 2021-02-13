var canvas;
var music;
var box, surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //4 different surfaces
    surface1 = createSprite(100,575,200,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(300,575,200,20);
    surface2.shapeColor = "deeppink";
    surface3 = createSprite(500,575,200,20);
    surface3.shapeColor = "purple";
    surface4 = createSprite(700,575,200,20);
    surface4.shapeColor = "black";

    //box sprite
    box = createSprite(random(20,750),100,10,10);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
   
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    //condition to check if box touching surface
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        music.play();
        box.shapeColor = "red";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "deeppink";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "purple";
    }
    if(surface4.isTouching(box)){
        music.stop();
        box.shapeColor = "black";
        box.velocityX = 0;
        box.velocityY = 0;
    }

    drawSprites();
}
