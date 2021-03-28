// Task nivel 2 - 8. Intrebare in timp limita

var x;

function CheckTime() {
x=setInterval(function(){
	var r = document.getElementById('raspuns');
	r.disabled=true;
	alert("A expirat timpul");
  },5000)
	clearInterval();
	};

function scor() {
  clearInterval(x);
  var r = document.getElementById('raspuns');
  var q = document.getElementById("p");

    if (r.value =="Timisoara") {
    q.innerHTML = "Bravo! Raspunsul este corect! Ai reducere 10% la produsele noastre cu codul: #smart"; }
	else{
	q.innerHTML = "Ati gresit! Incercati alta data!";
	document.getElementById("intr").innerHTML="";
	var r = document.getElementById('raspuns');
	r.disabled=true;
	}
}

