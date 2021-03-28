// Task nivel 3 - 1. Realizarea unei animatii

var canvas = document.getElementById("inima");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.7;
var c = canvas.getContext("2d");

var img = new Image();
img.src='images/inima.png';
var number=30;
var heart=[];
for(var i=0;i<number;i++){
	var x=Math.floor(Math.random()*canvas.width);
	var y=Math.floor(Math.random()*canvas.height);
	heart[i]=new Inimioara(x,y);
}


function Inimioara(x,y){
	this.x=x;
	this.y=y;
	
	this.dx = Math.floor(Math.random() * 4) + 1;
	this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	this.dy = Math.floor(Math.random() * 4) + 1;
	this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	
	 this.draw = function () {
	  c.beginPath();
	  c.drawImage(img,this.x,this.y,70,40);
	}
	
	 this.animate = function () {
	  this.x += this.dx;
	  this.y += this.dy;
	  
	  if (this.x > canvas.width || this.x< 0) {
	   this.dx = -this.dx;
	  }
	  
	  if (this.y > canvas.height || this.y < 0) {
	   this.dy = -this.dy;
	  }
	  
	  this.draw();
 }
	
} 



function update(){
	c.clearRect(0,0,canvas.width,canvas.height);
	for (var i=0;i<number;i++){
		var inima=heart[i];
		inima.animate();
	}
	window.requestAnimationFrame(update);
}

update();