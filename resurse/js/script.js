
window.onload=function(){
	
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();
    var obiecte;
	
	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un stfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					var obJson = JSON.parse(this.responseText);
					obiecte=obJson.produs;
					localStorage.setItem("original", JSON.stringify(obiecte));
					if(localStorage.getItem('litera')){
					obiecte = JSON.parse(localStorage.getItem('litera'));}
					afiseajaJsonTemplate(obiecte);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/produs.json", true);
	//trimit catre server cererea
	ajaxRequest.send();
	function afiseajaJsonTemplate(obiecte) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisTemplate");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate ="";
			//parcurg vetorul de produse din obJson
			for(let i=0;i<obiecte.length;i++){
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
				//practic obJson.studenti[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
				textTemplate+=ejs.render("<div class='unprodus'>\
				<img src=<%= produs.imagine%>>\
				<p>Id: <%= produs.id %></p>\
				<p>Nume: <%= produs.nume %> </p>\
				<p>Tip: <%= produs.tip%></p>\
				<p>Pret: <%= produs.pret%> RON </p>\
				</div>", 
				{produs: obiecte[i]});
			} 
			//adaug textul cu afisarea studentilor in container
			container.innerHTML=textTemplate;
			
	}
	
	document.getElementById("sorteaza_nume").onclick = function () {
		obiecte.sort(function (a, b) {
			if(a.nume < b.nume) { return -1; }
			if(a.nume > b.nume) { return 1; }
			return 0;
		});
		afiseajaJsonTemplate(obiecte);
	}
	
	document.getElementById("sorteaza_desc_culoare").onclick = function () {
		obiecte.sort(function (b, a) {
			if(a.culoare < b.culoare) { return -1; }
			if(a.culoare > b.culoare) { return 1; }
			return 0;
		});
		afiseajaJsonTemplate(obiecte);
	}
	
	//RESETARE
	document.getElementById("reset").onclick = function () {
		obiecte = JSON.parse(localStorage.getItem('original'));
		afiseajaJsonTemplate(obiecte);
		localStorage.removeItem('litera');
		document.getElementById("filtre").style.display = "none";
		schimbat=document.getElementById("afisPretMediu");
		schimbat.innerHTML="";
	}
	

	
	// //CALCULARE
	document.getElementById("calcul_mediu").onclick = function () {
		var suma=0;
		for(var i=0;i<obiecte.length;i++){
			suma=suma+parseInt(obiecte[i].pret);
		}
		suma=suma/obiecte.length;
		suma=suma.toFixed(3);
		schimbat=document.getElementById("afisPretMediu");
		schimbat.innerHTML="Pretul mediu al produselor este de "+suma+" RON";
	}


	document.getElementById("filtru").onclick =  function(){
    document.getElementById("filtre").style.display = "block";}
	
	
	//FILTRARE
	document.getElementById("filtru_aplica").onclick=function(){
		var rezultat=[1];
        var o1=document.getElementById("filtru_roz");
		var o2=document.getElementById("filtru_pantof");
		var o3=document.getElementById("filtru_pret_maxim");
		
		if(o1.checked==true){
			rezultat=obiecte.filter(function(x){
			return x.culoare=="roz";});
			if(o2.checked==true){
				rezultat = obiecte.filter(function(x){
				return x.culoare == "roz" &&
				x.tip=="decupat" ;});
				if( o3.checked==true)
						rezultat = obiecte.filter(function(x){
						return x.pret <= 200 &&
						x.culoare == "roz" &&
						x.tip=="decupat" ;});
				}
			else{
				if( o3.checked==true)
						rezultat = obiecte.filter(function(x){
						return x.pret <= 200 &&
						x.culoare == "roz";});
			}
		}
		else{
			if(o2.checked==true){
				rezultat = obiecte.filter(function(x){
				return x.tip=="decupat" ;});
				if( o3.checked==true)
						rezultat = obiecte.filter(function(x){
						return x.pret <= 200 &&
						x.tip=="decupat" ;});
				}
			else{
				if( o3.checked==true)
					rezultat = obiecte.filter(function(x){
					return x.pret <= 200;});
			}
		}
		console.log(rezultat);
		if(rezultat[0]!=1)
		afiseajaJsonTemplate(Array.from(rezultat));
}

   //SetTimeout
   document.getElementById("discount").onclick = function () {
    setTimeout(function(){ alert("Ai castigat un discount de 30% folosind codul #rabdator"); },3000);
   }
   
   	var okiut=true;
   
  //SetInterval 
   setInterval(
   function  () {
     var x=document.getElementsByClassName("unprodus");
	 if(okiut==true){
	 for(i=0;i<x.length;i++){
		x[i].style.backgroundColor='#ffdedb';
	}
	 okiut=false;}
	 else{
		for(i=0;i<x.length;i++){
		x[i].style.backgroundColor='#fff0fe';
	}
	 okiut=true;
	 }
	},2000);
   
   window.onkeypress = function(m){
	   prod=document.getElementsByClassName("unprodus");
	   if(m.key=="m"){
	   for(var j=0;j<prod.length;j++){
		   if(obiecte[j].culoare=="rosu"){
			   prod[j].style.color="red";
			   prod[j].style.textShadow="-1px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black";
		   }
		   if(obiecte[j].culoare=="portocaliu"){
			   prod[j].style.color="orange";
			   prod[j].style.textShadow="-1px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black";
		   }
		   if(obiecte[j].culoare=="albastru"){
			   prod[j].style.color="blue";
			   prod[j].style.textShadow="-1px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black";
		   }
		   if(obiecte[j].culoare=="roz"){
			   prod[j].style.color="pink";
			   prod[j].style.textShadow="-1px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black";
		   }
		   if(obiecte[j].culoare=="alb"){
			   prod[j].style.color="white";
			   prod[j].style.textShadow="-1px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black";
		   }
	   }}
	   else{
		   for(var i=0;i<obiecte.length;i++){
				if(((obiecte[i].nume[0]))==(m.key.toUpperCase()))
				{		
					obiecte.splice(i,1);
					i--;
					}}
			afiseajaJsonTemplate(obiecte);
			localStorage.setItem('litera', JSON.stringify(obiecte));
   }}
   

}