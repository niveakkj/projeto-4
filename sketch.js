let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
   palavra=morango();
  musica.loop();
}
function preload(){
  imagem=loadImage("foto.jfif");
  musica=loadSound("musica.mp3");
  
}
function draw() {
  chocolate();
  morango();
  
  let maximo=width;
  let minimo=0;
  
  let aparecer=map(mouseX,0,width,1,palavra.length);
  let inicio=palavra.substring(0,aparecer);
  text(inicio,500,400);
}

function chocolate(){
  background("pink");
  image(imagem,0,0, 1000,800)
  fill("lightblue");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function morango(){
  let palavras= ["genshin","gacha","skullgirls","icekiss"];
  return random(palavras);
}