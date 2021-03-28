// Task nivel 3 - 2. Quiz cu raspunsuri multiple

var puncte=0;
var q=[{'intrebare':"In ce an a fost fondat Clariss?",'raspunsuri':[['2019',true],['2020',false],['2018',false],['2017',false]]},
{'intrebare':"Ce produse vindem noi?",'raspunsuri':[['Tocuri',true],['Botine',false],['Sandale',true],['Pantofi',true]]},
{'intrebare':"Ce culori gasesti in logo-ul nostru?",'raspunsuri':[['Albastru',true],['Mov',true],['Roz',true],['Rosu',false]]},
{'intrebare':"Din ce materiale sunt facute produsele noastre?",'raspunsuri':[['Plastic',false],['Piele',true],['Catifea',true],['Piele intoarsa',true]]}];
var lista=document.createElement('ol');
lista.name="list";


q.forEach(function (x){	
	var li=document.createElement('li');
	li.textContent=x.intrebare;
	lista.appendChild(li);
	for(var i=0;i<4;i++){
		var divulet=document.createElement('div');
		divulet.class="intrebare";
		var checkbox=document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "check";
		checkbox.value = x.raspunsuri[i][1];
		var label=document.createElement('label');
		label.htmlFor="check";
		label.appendChild(document.createTextNode(x.raspunsuri[i][0]));
		divulet.appendChild(checkbox);
		divulet.appendChild(label);
		lista.appendChild(divulet);
	}
});

var button = document.createElement("button");
button.innerHTML = "Trimite";

 

var app=document.getElementById('quiz');
app.appendChild(lista);
app.appendChild(button);


button.addEventListener ("click", function() {
	rasp=document.getElementsByName('check');
	for(var k=0;k<16;k++){	
		rasp[k].disabled=true;
		if(rasp[k].checked.toString()==rasp[k].value.toString() && (rasp[k].checked)){
			console.log(rasp[k].checked);
			console.log(rasp[k].value);
			
			puncte++;
		}
	}
	var p = document.createElement("p");
	p.id="rezultat";
	var rez = document.createTextNode("Ati acumulat un scor de "+puncte+" puncte");
	p.appendChild(rez);
	lista.appendChild(p);


});

