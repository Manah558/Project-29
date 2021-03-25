const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Bluebox(500,360,20,30);
    box2 = new Yellowbox(520,360,20,30);
    box3 = new Greenbox(540,360,20,30);
    box4 = new Redbox(560,360,20,30);
    box5 = new Greenbox(580,360,20,30);
    box6 = new Yellowbox(600,360,20,30);
    
    box7 = new Redbox(510,330,20,30);
    box8 = new Yellowbox(530,330,20,30);
    box9 = new Bluebox(550,330,20,30);
    box10 = new Redbox(570,330,20,30);
    box11 = new Greenbox(590,360,20,30);
    
    box12 = new Yellowbox(520,310,20,30);
    box13 = new Bluebox(540,310,20,30);
    box14 = new Redbox(560,310,20,30);
    box15 = new Greenbox(580,310,20,30);

    box16 = new Yellowbox(530,280,20,30);
    box17 = new Redbox(550,280,20,30);
    box18 = new Greenbox(570,280,20,30);

    box19 = new Bluebox(540,250,20,30);
    box20 = new Redbox(560,250,20,30);

    box21 = new Greenbox(550,220,20,30);

    box22 = new Greenbox(500,135,20,30);
    box23 = new Bluebox(520,135,20,30);
    box24 = new Yellowbox(540,135,20,30);
    box25 = new Redbox(560,315,20,30);
    box26 = new Greenbox(580,315,20,30);
    box27 = new Yellowbox(600,315,20,30);

    box28 = new Bluebox(510,105,20,30);
    box29 = new Redbox(530,105,20,30);
    box30 = new Yellowbox(550,105,20,30);
    box31 = new Greenbox(570,105,20,30);
    box32 = new Redbox(590,105,20,30);

    box33 = new Yellowbox(520,75,20,30);
    box34 = new Bluebox(540,75,20,30);
    box35 = new Redbox(560,75,20,30);
    box36 = new Greenbox(580,75,20,30);

    box37 = new Yellowbox(530,45,20,30);
    box38 = new Bluebox(550,45,20,30);
    box39 = new Greenbox(570,45,20,30);

    ball = new Ball(0,0,50);

    spring = new Projectile(ball.body,{x:200,y:200});

    ground = new Platform(400,390,800,20);

    groundHovering = new Platform(550,160,200,20);

}

function draw(){
    background(247, 223, 178);
    Engine.update(engine);

    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box10.display();
    box11.display();
    
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
    box16.display();
    box17.display();
    box18.display();
   
    box19.display();
    box20.display();
    
    box21.display();
   
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    box33.display();
    box34.display();
    box35.display();
    box36.display();
    
    box37.display();
    box38.display();
    box39.display();

    ball.display();
    spring.display();
    ground.display();
    groundHovering.display();
}

function mouseDragger(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    spring.release();
}
