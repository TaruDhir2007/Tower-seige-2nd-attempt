const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;
var engine, world;
var box1, box2, box3, box4, box5;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(400, 500);
    polygon = Bodies.circle(50, 200, 20)
    World.add(world,polygon);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    box1.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}