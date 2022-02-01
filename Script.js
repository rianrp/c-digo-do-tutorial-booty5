window.onload = function()
{
    // cria o app
    var app = new b5.App(document.getElementById('gamecanvas'), true);
    app.debug = false;
    app.clear_canvas = true; 
    //aqui nos redimensionamos a tela 
    app.setCanvasScalingMethod(b5.App.FitBest);
    
    // Aqui criamos uma cena
    var scene = new b5.Scene();
    var vec = Box2D.Common.Math.b2Vec2;
    // Aqui Adicionamos a cena no game
    app.addScene(scene);
    //aqui implantamos a fisica no game, colocando velocidade no eixo x e y, para verdadeiro
    scene.initWorld( 0, 10, false);
    b5.app.focus_scene = scene;
    app.touch_focus = scene;
//aqui criamos os atores(objetos) 
  var Player = new b5.RectActor();
//var Player, e como se fosse uma variavel, entao pode ser varios nomes
  Player.fill_style = "#40ff4f";   //Selecionando a cor
  Player.x = 10;//Posição do eixo x
  Player.y = 10;//Posição do eixo y
  Player.w = 20;//Largura
  Player.h = 20;//altura 
  Player.corner_radius = 10;//borda, deixando ele em forma esférica
  scene.addActor(Player);//colocando o Player na cena
  Player.initBody("dynamic", true, false);
  Player.addFixture({width: 20, height: 20, type: b5.Shape.TypeBox})
  
  //definindo uma fisica a ele
  //startamos o booty5
  var plataforma = new b5.RectActor();
  plataforma.fill_style = "#6abe82"
  plataforma.x = 10;
  plataforma.y = 40;
  plataforma.w = 200;
  plataforma.h = 10;
  scene.addActor(plataforma);
  plataforma.initBody("static", false, false);
  plataforma.addFixture({width: 200, height:10, type:b5.Shape.TypeBox});
  
  var buttonE = new b5.RectActor();
  buttonE.fill_style = "#6abe82";
  buttonE.x = -90;
  buttonE.y = 100;
  buttonE.w = 50;
  buttonE.h = 50;
  scene.addActor(buttonE);
  buttonE.touchable = true;
  move = false;
  buttonE.onBeginTouch = function(touch_pos){
    move = true;
    console.log("hello world");
    Player.onTick = function (){
    if(move == true){
    Player.body.SetLinearVelocity(new vec(-3,0));
    }
    }
  }
  buttonE.onEndTouch = function(touch_pos){
    move = false;
    Player.body.SetLinearVelocity(new vec(0,0));
  }
  
  var buttonD = new b5.RectActor();
  buttonD.fill_style = "#6abe82"
  buttonD.x = -30;
  buttonD.y = 100;
  buttonD.w = 50;
  buttonD.h = 50;
  scene.addActor(buttonD);
  buttonD.touchable = true;
  buttonD.onBeginTouch = function(touch_pos){
    move = true;
    console.log("hello world");
    Player.onTick = function (){
    if(move == true){
    Player.body.SetLinearVelocity(new vec(3,0));
    }
    }
  }
  buttonD.onEndTouch = function(touch_pos){
    move = false;
    Player.body.SetLinearVelocity(new vec(0,0));
  }
  app.start(); 
};