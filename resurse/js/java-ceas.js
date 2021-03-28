// Task nivel 1 - 6. Numaratoare inversa

var count=new Date("jul 1,2020 00:00:00").getTime();
var x=setInterval(function(){
	var azi = new Date().getTime();
	var d=count-azi;
	
	var zi=Math.floor(d/(1000*60*60*24));
	var ora=Math.floor((d%(1000*60*60*24))/(1000*60*60));
	var minut=Math.floor((d%(1000*60*60))/(1000*60));
	var secunda=Math.floor((d%(1000*60))/1000);
	
	document.getElementById("zi").innerHTML=zi;
	document.getElementById("ora").innerHTML=ora;
	document.getElementById("minut").innerHTML=minut;
	document.getElementById("secunda").innerHTML=secunda;
	
	if(d<0){
		clearInterval(x);
	}
},1000);
